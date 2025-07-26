#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Optimizing project for Vercel deployment...');

// Clean up unnecessary files
const filesToRemove = [
  'scripts/benchmark.js',
  'scripts/dev-optimizer.js',
  'scripts/lightning-dev.js',
  'scripts/optimize-dev.js',
  'scripts/performance-check.js',
  'start-fast.sh',
  'OPTIMIZATION_SUMMARY.md',
  'railway.json'
];

filesToRemove.forEach(file => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`✅ Removed: ${file}`);
  }
});

// Create .gitignore if it doesn't exist
const gitignoreContent = `# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Next.js
.next/
out/
build/
dist/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# nyc test coverage
.nyc_output

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port
`;

if (!fs.existsSync('.gitignore')) {
  fs.writeFileSync('.gitignore', gitignoreContent);
  console.log('✅ Created .gitignore');
}

// Create robots.txt if it doesn't exist
const robotsContent = `User-agent: *
Allow: /

Sitemap: https://clasicobarbershop.com/sitemap.xml
`;

if (!fs.existsSync('public/robots.txt')) {
  fs.writeFileSync('public/robots.txt', robotsContent);
  console.log('✅ Created robots.txt');
}

// Create sitemap.xml
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://clasicobarbershop.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://clasicobarbershop.com/services</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://clasicobarbershop.com/gallery</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://clasicobarbershop.com/about</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://clasicobarbershop.com/contact</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://clasicobarbershop.com/team</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemapContent);
console.log('✅ Created sitemap.xml');

console.log('\n🎉 Project optimized for Vercel deployment!');
console.log('\nNext steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm run build');
console.log('3. Deploy to Vercel');
console.log('\nPerformance optimizations applied:');
console.log('✅ Optimized Next.js config');
console.log('✅ Added Vercel configuration');
console.log('✅ Optimized images and caching');
console.log('✅ Added lazy loading components');
console.log('✅ Optimized CSS and animations');
console.log('✅ Added performance headers');
console.log('✅ Created sitemap and robots.txt'); 