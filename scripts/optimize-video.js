#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if ffmpeg is installed
function checkFFmpeg() {
  try {
    execSync('ffmpeg -version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    console.error('FFmpeg is not installed. Please install FFmpeg to optimize videos.');
    console.error('Installation: https://ffmpeg.org/download.html');
    return false;
  }
}

// Optimize video file
function optimizeVideo(inputPath, outputPath) {
  try {
    const command = `ffmpeg -i "${inputPath}" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart "${outputPath}"`;
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ Optimized: ${path.basename(inputPath)}`);
    
    // Get file sizes
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`📊 Size reduction: ${savings}% (${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(optimizedSize / 1024 / 1024).toFixed(1)}MB)`);
    
    return true;
  } catch (error) {
    console.error(`❌ Failed to optimize ${path.basename(inputPath)}:`, error.message);
    return false;
  }
}

// Create WebM version for better compression
function createWebM(inputPath, outputPath) {
  try {
    const command = `ffmpeg -i "${inputPath}" -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus -b:a 128k "${outputPath}"`;
    execSync(command, { stdio: 'ignore' });
    console.log(`✅ Created WebM: ${path.basename(outputPath)}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to create WebM: ${error.message}`);
    return false;
  }
}

// Main function
function main() {
  if (!checkFFmpeg()) {
    process.exit(1);
  }

  const videosDir = path.join(__dirname, '..', 'public', 'videos');
  const optimizedDir = path.join(videosDir, 'optimized');

  // Create optimized directory if it doesn't exist
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }

  // Get all video files
  const videoFiles = fs.readdirSync(videosDir)
    .filter(file => /\.(mp4|mov|avi|mkv)$/i.test(file))
    .filter(file => !file.includes('optimized'));

  if (videoFiles.length === 0) {
    console.log('No video files found to optimize.');
    return;
  }

  console.log(`🎬 Found ${videoFiles.length} video(s) to optimize...\n`);

  let successCount = 0;
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  videoFiles.forEach(file => {
    const inputPath = path.join(videosDir, file);
    const nameWithoutExt = path.parse(file).name;
    
    // Optimize MP4
    const optimizedMp4 = path.join(optimizedDir, `${nameWithoutExt}-optimized.mp4`);
    if (optimizeVideo(inputPath, optimizedMp4)) {
      successCount++;
      totalOriginalSize += fs.statSync(inputPath).size;
      totalOptimizedSize += fs.statSync(optimizedMp4).size;
    }

    // Create WebM version
    const webmPath = path.join(optimizedDir, `${nameWithoutExt}.webm`);
    createWebM(inputPath, webmPath);
  });

  console.log(`\n🎉 Optimization complete!`);
  console.log(`✅ Successfully optimized: ${successCount}/${videoFiles.length} videos`);
  
  if (successCount > 0) {
    const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
    console.log(`📊 Total size reduction: ${totalSavings}%`);
    console.log(`💾 Total saved: ${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(1)}MB`);
  }

  console.log(`\n📁 Optimized files saved to: ${optimizedDir}`);
  console.log(`💡 Update your video components to use the optimized files!`);
}

if (require.main === module) {
  main();
}

module.exports = { optimizeVideo, createWebM }; 