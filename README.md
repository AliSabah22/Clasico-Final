# Clasico Barbershop Website

A modern, luxury barbershop website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ⚡ Optimized for performance
- 📱 Mobile-first approach
- 🖼️ Optimized image loading for Vercel
- 🚀 Ready for production deployment

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Images**: Next.js Image Optimization

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Build for production: `npm run build`

## Image Optimization

This project includes optimized image loading specifically configured for Vercel deployment. All images are properly optimized and should display correctly in production.

## Deployment

The project is configured for seamless deployment on Vercel with:
- Optimized image handling
- Proper caching headers
- Performance optimizations
- Error handling for images

---

**Last Updated**: July 1, 2024 - Image loading fixes implemented

## 🚀 Performance Features

- **Lightning Fast Loading**: Optimized for sub-2 second load times
- **Image Optimization**: WebP/AVIF formats with lazy loading
- **Lazy Loading**: Components load only when needed
- **Caching Strategy**: Aggressive caching for static assets
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **Mobile First**: Responsive design with touch optimizations
- **Accessibility**: WCAG compliant with reduced motion support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Performance**: Optimized images, lazy loading, caching

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd clasico-barbershop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run optimization script**
   ```bash
   node scripts/optimize-for-vercel.js
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🚀 Deployment to Vercel

### Automatic Deployment (Recommended)

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Vercel will automatically detect Next.js and deploy

2. **Environment Variables** (if needed)
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   npx vercel --prod
   ```

## ⚡ Performance Optimizations

### Built-in Optimizations

- **Image Optimization**: Automatic WebP/AVIF conversion
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Unused code elimination
- **Minification**: CSS and JavaScript minification
- **Caching**: Static assets cached for 1 year
- **CDN**: Global content delivery network

### Custom Optimizations

- **Lazy Loading**: Components load on scroll
- **Preloading**: Critical resources preloaded
- **DNS Prefetch**: External domains prefetched
- **Performance Headers**: Security and caching headers
- **Reduced Motion**: Accessibility support

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with optimizations
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── [routes]/          # Other pages
├── components/            # Reusable components
│   ├── sections/          # Page sections
│   ├── ui/               # UI components
│   ├── OptimizedImage.tsx # Image optimization
│   └── LazyLoad.tsx      # Lazy loading wrapper
├── lib/                  # Utilities and helpers
└── types/                # TypeScript types
```

## 🎨 Customization

### Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  gold: '#fbbf24',
  'gold-dark': '#f59e0b',
  'gold-light': '#fcd34d',
}
```

### Images
- Place images in `public/images/`
- Use `OptimizedImage` component for best performance
- Images are automatically optimized by Next.js

### Content
- Update content in component files
- Modify metadata in `src/app/layout.tsx`
- Update sitemap in `public/sitemap.xml`

## 📊 Performance Monitoring

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Monitoring Tools
- Vercel Analytics (built-in)
- Google PageSpeed Insights
- Lighthouse CI

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run analyze      # Analyze bundle size
```

### Performance Testing

```bash
# Test build performance
npm run build

# Analyze bundle
npm run analyze

# Test locally
npm run dev
```

## 🌐 SEO & Analytics

### SEO Features
- Meta tags optimization
- Open Graph tags
- Twitter Cards
- Structured data
- Sitemap generation
- Robots.txt

### Analytics Setup
1. Add Google Analytics to `src/app/layout.tsx`
2. Configure Vercel Analytics in dashboard
3. Set up conversion tracking

## 🚨 Troubleshooting

### Common Issues

**Build Fails**
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

**Slow Loading**
- Check image sizes and formats
- Verify lazy loading implementation
- Monitor Core Web Vitals

**Deployment Issues**
- Check Vercel build logs
- Verify environment variables
- Ensure all dependencies are in package.json

## 📈 Performance Tips

1. **Optimize Images**
   - Use WebP/AVIF formats
   - Implement lazy loading
   - Use appropriate sizes

2. **Minimize JavaScript**
   - Use dynamic imports
   - Implement code splitting
   - Remove unused dependencies

3. **Optimize CSS**
   - Use Tailwind's purge feature
   - Minimize custom CSS
   - Use CSS-in-JS sparingly

4. **Caching Strategy**
   - Leverage Vercel's edge caching
   - Use appropriate cache headers
   - Implement service workers if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test performance impact
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check Vercel documentation
- Review Next.js performance guide
- Open an issue in the repository

---

**Built with ❤️ for Clasico Barbershop** 