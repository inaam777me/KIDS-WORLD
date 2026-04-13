# Kids World 👶

> Premium newborn essentials, baby products, and thoughtfully curated gifts for every parent

A modern, responsive e-commerce platform for baby products built with React 19, TypeScript, and Tailwind CSS. Features a beautiful UI with smooth animations, form validation, and a mobile-first design.

## ✨ Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Product Showcase**: Featured products with ratings and reviews
- **Category Browsing**: Easy-to-navigate product categories
- **Contact Form**: Full validation with error handling and success notifications
- **Mobile Navigation**: Hamburger menu with smooth animations
- **Interactive Components**: Hover effects and animated transitions
- **Modern Tech Stack**: React 19, TypeScript, Tailwind CSS, Motion/React
- **Organized Architecture**: Component-based structure with centralized types and constants

## 🚀 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.0 | UI framework |
| **TypeScript** | 5.8 | Type safety |
| **Vite** | 6.4 | Build tool & dev server |
| **Tailwind CSS** | 4.1 | Styling |
| **Motion/React** | - | Animations |
| **Lucide React** | - | Icons (25+) |

## 📁 Project Structure

```
src/
├── App.tsx                    # Main application entry
├── main.tsx                   # React DOM render
├── index.css                  # Global styles
├── components/                # 10 React components
│   ├── Navbar.tsx            # Navigation with mobile menu
│   ├── Hero.tsx              # Hero section with CTAs
│   ├── Categories.tsx        # Product categories grid
│   ├── FeaturedProducts.tsx  # Product showcase with ratings
│   ├── WhyChooseUs.tsx       # Features and benefits
│   ├── Testimonials.tsx      # Customer reviews
│   ├── Contact.tsx           # Contact form and info
│   ├── SpecialServices.tsx   # Premium services section
│   ├── MapSection.tsx        # Location map
│   └── Footer.tsx            # Footer with links
├── types/
│   └── index.ts              # TypeScript interfaces
└── constants/
    └── index.ts              # Data arrays and configuration
```

## 🏃 Getting Started

### Prerequisites

- **Node.js** 16+ (LTS recommended)
- **npm** 7+ or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd KIDS-WORLD
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   
   The app will be available at:
   - Local: `http://localhost:3000`
   - Network: `http://<your-ip>:3000`

## 📦 Available Scripts

```bash
# Development server (Vite)
npm run dev

# Production build
npm run build

# TypeScript type checking
npm run lint

# Preview production build locally
npm run preview
```

## 🎨 Design Features

### Color Palette
- **Baby Pink** (#fce7e0) - Primary color
- **Baby Rose** (#f3876f) - Accent
- **Baby Blue** (#e0f4fd) - Secondary
- **Baby Cream** (#fff8f3) - Background

### Components

#### Navbar
- Fixed positioning with backdrop blur
- Desktop: Full navigation menu with search and shop button
- Mobile: Hamburger menu with smooth slide animation
- Links: Categories, Products, Why Us, Contact

#### Hero Section
- Full-screen banner with gradient background
- Three CTA buttons (Shop, Contact, WhatsApp)
- Animated entrance with staggered delays
- Shop interior image

#### Categories
- 4 product categories with hover animations
- Gradient overlays on images
- Icon badges
- Image zoom on hover

#### Featured Products
- 6 showcase products with star ratings (4.7-4.9)
- Product tags (bestseller, trending, essential, popular)
- Review counts
- Add to cart button on hover

#### Contact Section
- Form validation (name, email, message)
- Error state styling with red borders
- Success notification
- Multiple contact methods (phone, WhatsApp, location)
- Contact info card with icons

#### Footer
- Multi-column layout
- Social media links
- Newsletter signup
- Quick links and categories
- Privacy and Terms links

## 🔧 Configuration

### TypeScript Types

All types are centralized in `src/types/index.ts`:

```typescript
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Product {
  name: string;
  price: string;
  img: string;
  desc: string;
  rating: number;
  reviews: number;
  tag?: string;
}

interface Category {
  title: string;
  desc: string;
  iconName: string;
  bg: string;
  img: string;
  color: string;
}
```

### Data & Constants

All data arrays are in `src/constants/index.ts`:

- **CATEGORIES**: 4 product categories
- **FEATURED_PRODUCTS**: 6 showcase products
- **TESTIMONIALS**: 3 customer reviews
- **CONTACT_INFO**: Phone, WhatsApp, location, map embed

## 📱 Mobile Responsiveness

- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Mobile First**: Designed mobile-first, enhanced for larger screens
- **Touch Friendly**: Large buttons and spacing for mobile interaction
- **Hamburger Menu**: Collapses on mobile, expands on desktop

## 🎯 Build & Deploy

### Production Build

Build optimized production bundle:

```bash
npm run build
```

Output in `dist/` folder:
- **CSS**: 42.65 kB (gzipped: 7.27 kB)
- **JS**: 361.55 kB (gzipped: 111.90 kB)
- **Build time**: ~9.5 seconds

### Deploy Options

1. **Vercel** (Recommended)
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Netlify**
   - Connect GitHub repo
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **GitHub Pages**
   - Deploy `dist` folder
   - Enable Pages in repository settings

4. **Traditional Hosting**
   - Upload `dist` folder to your server
   - Configure server to serve `dist/index.html` for all routes (SPA)

## 🔗 Contact Information

**Kids World** - Premium Baby Products Store

- **Phone**: 0776174260
- **WhatsApp**: 0720877431
- **Location**: NO.06, Beach Road, New Kattankudy 06, Kattankudy, Sri Lanka

## 📝 License

This project is created for Kids World. All rights reserved.

## 🤝 Contributing

For issues and feature requests, please contact the development team.

---

**Last Updated**: April 2026  
**Status**: ✅ Production Ready
