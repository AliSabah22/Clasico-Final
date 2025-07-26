#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Define all image paths used in the application
const imagePaths = [
  // Hero images
  '/images/hero/hero-bg.jpeg',
  '/images/logo.jpg',
  
  // Team images
  '/team/nemar.jpeg',
  '/team/ali.jpeg',
  '/team/humam.jpeg',
  '/team/akram.jpeg',
  '/team/team.jpeg',
  
  // Gallery images
  '/images/gallery_photos/photo1.jpg',
  '/images/gallery_photos/photo2.jpg',
  '/images/gallery_photos/photo3.jpg',
  '/images/gallery_photos/photo4.jpg',
  '/images/gallery_photos/photo5.jpg',
  '/images/gallery_photos/photo6.jpg',
  
  // Service images
  '/images/services/service1.jpg',
  '/images/services/service2.jpg',
  '/images/services/service3.jpg',
  
  // Package images
  '/images/packages/gold.png',
  '/images/packages/silver.png',
  '/images/packages/platinum.png',
  
  // Testimonial images
  '/images/testimonials/client1.jpg',
  '/images/testimonials/client2.jpg',
  '/images/testimonials/client3.jpg',
  
  // Video gallery thumbnails
  '/images/gallery/video1.jpg',
  '/images/gallery/video2.jpg',
  '/images/gallery/video3.jpg',
  '/images/gallery/video4.jpg',
  
  // Other images
  '/images/signature-experience.jpeg',
  '/images/og-image.jpg',
  '/images/twitter-image.jpg',
];

function validateImages() {
  console.log('🔍 Validating images...\n');
  
  const publicDir = path.join(__dirname, '..', 'public');
  const results = {
    found: [],
    missing: [],
    errors: []
  };

  imagePaths.forEach(imagePath => {
    const fullPath = path.join(publicDir, imagePath);
    
    try {
      if (fs.existsSync(fullPath)) {
        const stats = fs.statSync(fullPath);
        const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
        
        results.found.push({
          path: imagePath,
          size: sizeInMB + ' MB',
          exists: true
        });
        
        console.log(`✅ ${imagePath} (${sizeInMB} MB)`);
      } else {
        results.missing.push(imagePath);
        console.log(`❌ ${imagePath} - MISSING`);
      }
    } catch (error) {
      results.errors.push({
        path: imagePath,
        error: error.message
      });
      console.log(`⚠️  ${imagePath} - ERROR: ${error.message}`);
    }
  });

  // Summary
  console.log('\n📊 Summary:');
  console.log(`✅ Found: ${results.found.length} images`);
  console.log(`❌ Missing: ${results.missing.length} images`);
  console.log(`⚠️  Errors: ${results.errors.length} images`);

  if (results.missing.length > 0) {
    console.log('\n❌ Missing images:');
    results.missing.forEach(path => console.log(`   - ${path}`));
  }

  if (results.errors.length > 0) {
    console.log('\n⚠️  Images with errors:');
    results.errors.forEach(item => console.log(`   - ${item.path}: ${item.error}`));
  }

  // Check for unused images
  console.log('\n🔍 Checking for unused images...');
  const allImages = getAllImagesInPublic(publicDir);
  const usedImages = new Set(imagePaths);
  const unusedImages = allImages.filter(img => !usedImages.has(img));

  if (unusedImages.length > 0) {
    console.log('\n📁 Potentially unused images:');
    unusedImages.forEach(img => console.log(`   - ${img}`));
  }

  return results;
}

function getAllImagesInPublic(dir) {
  const images = [];
  
  function scanDirectory(currentDir, relativePath = '') {
    try {
      const items = fs.readdirSync(currentDir);
      
      items.forEach(item => {
        const fullPath = path.join(currentDir, item);
        const relativeItemPath = path.join(relativePath, item);
        
        if (fs.statSync(fullPath).isDirectory()) {
          scanDirectory(fullPath, relativeItemPath);
        } else if (isImageFile(item)) {
          images.push('/' + relativeItemPath);
        }
      });
    } catch (error) {
      console.error(`Error scanning directory ${currentDir}:`, error.message);
    }
  }
  
  scanDirectory(dir);
  return images;
}

function isImageFile(filename) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  const ext = path.extname(filename).toLowerCase();
  return imageExtensions.includes(ext);
}

// Run validation
if (require.main === module) {
  validateImages();
}

module.exports = { validateImages }; 