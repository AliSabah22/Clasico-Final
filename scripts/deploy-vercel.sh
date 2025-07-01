#!/bin/bash

echo "🚀 Starting Vercel deployment preparation..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf out

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🚀 Ready for Vercel deployment!"
    echo ""
    echo "Next steps:"
    echo "1. Push your changes to GitHub"
    echo "2. Deploy to Vercel using: vercel --prod"
    echo "3. Or connect your GitHub repo to Vercel for automatic deployments"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi 