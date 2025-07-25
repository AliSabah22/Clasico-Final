#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if ImageMagick is installed
function checkImageMagick() {
  try {
    execSync('convert -version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    console.error('ImageMagick is not installed. Please install ImageMagick to optimize images.');
    console.error('Installation: https://imagemagick.org/script/download.php');
    return false;
  }
}

// Optimize image file
function optimizeImage(inputPath, outputPath, quality = 85) {
  try {
    const command = `convert "${inputPath}" -quality ${quality} -strip -interlace Plane "${outputPath}"`;
    execSync(command, { stdio: 'ignore' });
    
    // Get file sizes
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ Optimized: ${path.basename(inputPath)}`);
    console.log(`📊 Size reduction: ${savings}% (${(originalSize / 1024).toFixed(1)}KB → ${(optimizedSize / 1024).toFixed(1)}KB)`);
    
    return true;
  } catch (error) {
    console.error(`❌ Failed to optimize ${path.basename(inputPath)}:`, error.message);
    return false;
  }
}

// Convert to WebP format
function convertToWebP(inputPath, outputPath, quality = 85) {
  try {
    const command = `convert "${inputPath}" -quality ${quality} -define webp:lossless=false "${outputPath}"`;
    execSync(command, { stdio: 'ignore' });
    console.log(`✅ Created WebP: ${path.basename(outputPath)}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to create WebP: ${error.message}`);
    return false;
  }
}

// Main function
function main() {
  if (!checkImageMagick()) {
    process.exit(1);
  }

  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  const optimizedDir = path.join(imagesDir, 'optimized');

  // Create optimized directory if it doesn't exist
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }

  // Recursively find all image files
  function findImageFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('optimized')) {
        files.push(...findImageFiles(fullPath));
      } else if (/\.(jpg|jpeg|png|gif|bmp|tiff)$/i.test(item)) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  const imageFiles = findImageFiles(imagesDir);

  if (imageFiles.length === 0) {
    console.log('No image files found to optimize.');
    return;
  }

  console.log(`🖼️  Found ${imageFiles.length} image(s) to optimize...\n`);

  let successCount = 0;
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  imageFiles.forEach(filePath => {
    const relativePath = path.relative(imagesDir, filePath);
    const dir = path.dirname(relativePath);
    const nameWithoutExt = path.parse(relativePath).name;
    const ext = path.parse(relativePath).ext.toLowerCase();
    
    // Create optimized directory structure
    const optimizedSubDir = path.join(optimizedDir, dir);
    if (!fs.existsSync(optimizedSubDir)) {
      fs.mkdirSync(optimizedSubDir, { recursive: true });
    }
    
    // Optimize original format
    const optimizedPath = path.join(optimizedSubDir, `${nameWithoutExt}-optimized${ext}`);
    if (optimizeImage(filePath, optimizedPath)) {
      successCount++;
      totalOriginalSize += fs.statSync(filePath).size;
      totalOptimizedSize += fs.statSync(optimizedPath).size;
    }

    // Create WebP version
    const webpPath = path.join(optimizedSubDir, `${nameWithoutExt}.webp`);
    convertToWebP(filePath, webpPath);
  });

  console.log(`\n🎉 Optimization complete!`);
  console.log(`✅ Successfully optimized: ${successCount}/${imageFiles.length} images`);
  
  if (successCount > 0) {
    const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
    console.log(`📊 Total size reduction: ${totalSavings}%`);
    console.log(`💾 Total saved: ${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(1)}MB`);
  }

  console.log(`\n📁 Optimized files saved to: ${optimizedDir}`);
  console.log(`💡 Update your image components to use the optimized files!`);
  console.log(`🌐 WebP format provides better compression for modern browsers!`);
}

if (require.main === module) {
  main();
}

module.exports = { optimizeImage, convertToWebP }; 