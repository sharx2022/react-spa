# Sharx Website - Developer Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Architecture](#architecture)
5. [Routing System](#routing-system)
6. [Component Structure](#component-structure)
7. [Styling Guidelines](#styling-guidelines)
8. [Adding New Features](#adding-new-features)
9. [Maintenance Guidelines](#maintenance-guidelines)
10. [Deployment](#deployment)

---

## Project Overview

This is a professional Single Page Application (SPA) for Sharx, a software solutions company focused on mobile development. The website showcases two main products:
- **Sharx** - A cab-sharing mobile application
- **RotaIQ** - An AI-powered workforce scheduling application

### Key Features
- Multi-page routing with React Router
- Responsive design (mobile, tablet, desktop)
- Product showcase pages with detailed information
- Legal documentation pages (Privacy Policy, Terms & Conditions, etc.)
- Branded color scheme and professional UI/UX

---

## Technology Stack

### Core Technologies
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **React Router DOM v6** - Client-side routing

### Development Tools
- **ESLint** - Code linting
- **CSS3** - Styling (no CSS preprocessor)
- **Git** - Version control

### Third-Party Services (Referenced)
- Firebase (for product backends)
- Stripe (for payment processing)
- App Store & Google Play (for app distribution)

---

## Project Structure

```
react-spa/
├── public/                          # Static assets
├── src/
│   ├── assets/                      # Images and documents
│   │   ├── images/                  # Logo and product images
│   │   │   └── sharx_logo_new_transparent background.png
│   │   ├── sharx_law/              # Sharx legal documents
│   │   │   ├── privacy_policy.txt
│   │   │   ├── terms_&_conditions.txt
│   │   │   ├── community_guidelines.txt
│   │   │   └── safety_typs.txt
│   │   └── rota_iq_law/            # RotaIQ legal documents
│   │       ├── privacy_policy.txt
│   │       └── terms_&_conditions.txt
│   │
│   ├── pages/                       # Page components
│   │   ├── Home.tsx                # Landing page
│   │   ├── SharxProduct.tsx        # Sharx product page
│   │   ├── RotaIQProduct.tsx       # RotaIQ product page
│   │   ├── PrivacyPolicy.tsx       # Sharx privacy policy
│   │   ├── TermsConditions.tsx     # Sharx terms & conditions
│   │   ├── CommunityGuidelines.tsx # Sharx community guidelines
│   │   ├── SafetyTips.tsx          # Sharx safety tips
│   │   ├── RotaIQPrivacyPolicy.tsx # RotaIQ privacy policy
│   │   └── RotaIQTermsConditions.tsx # RotaIQ terms & conditions
│   │
│   ├── App.tsx                      # Main app component (routing)
│   ├── App.css                      # Global styles
│   ├── main.tsx                     # Application entry point
│   └── index.css                    # Base CSS reset/normalize
│
├── index.html                       # HTML template
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── vite.config.ts                  # Vite configuration
├── .gitignore                      # Git ignore rules
├── README.md                       # Project readme
└── DOCUMENTATION.md                # This file
```

---

## Architecture

### Application Structure

The application follows a **component-based architecture** with a clear separation of concerns:

1. **Entry Point** (`main.tsx`)
   - Renders the root React component
   - Wraps app with `BrowserRouter` for routing
   - Applies strict mode

2. **Main App Component** (`App.tsx`)
   - Defines all routes
   - Contains shared layout (navbar, footer)
   - Implements `ScrollToTop` functionality

3. **Pages** (`src/pages/`)
   - Each page is a self-contained component
   - Pages handle their own content and structure
   - Pages can be nested under products

4. **Styling** (`App.css`)
   - Single global stylesheet
   - Organized by sections and components
   - Uses CSS custom properties for theming

### Component Hierarchy

```
App
├── ScrollToTop (utility component)
└── Layout (shared across all pages)
    ├── Navbar
    │   └── Products Dropdown
    ├── Page Content (varies by route)
    │   ├── Home
    │   ├── SharxProduct
    │   ├── RotaIQProduct
    │   └── Legal Pages
    └── Footer
```

---

## Routing System

### Route Structure

The application uses React Router v6 with the following route hierarchy:

```
/                                    → Home page
/products/sharx                      → Sharx product page
/products/rotaiq                     → RotaIQ product page
/products/sharx/privacy-policy       → Sharx privacy policy
/products/sharx/terms-conditions     → Sharx terms & conditions
/products/sharx/community-guidelines → Sharx community guidelines
/products/sharx/safety-tips          → Sharx safety tips
/products/rotaiq/privacy-policy      → RotaIQ privacy policy
/products/rotaiq/terms-conditions    → RotaIQ terms & conditions
```

### Implementing Routing

Routes are defined in `App.tsx`:

```typescript
<Routes>
  <Route path="/" element={<Layout><Home /></Layout>} />
  <Route path="/products/sharx" element={<Layout><SharxProduct /></Layout>} />
  // ... more routes
</Routes>
```

### Navigation Methods

1. **Internal Links** (React Router)
   ```tsx
   import { Link } from "react-router-dom";
   <Link to="/products/sharx">Sharx</Link>
   ```

2. **Anchor Links** (same page navigation)
   ```tsx
   <a href="#about">About</a>
   ```

3. **External Links** (app stores, etc.)
   ```tsx
   <a href="https://..." target="_blank" rel="noopener noreferrer">
     Download
   </a>
   ```

---

## Component Structure

### Page Component Template

Each page follows this basic structure:

```tsx
import { Link } from "react-router-dom";
import "../App.css";

function PageName() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          {/* Content */}
        </div>
      </section>

      {/* Additional Sections */}
      <section className="content-section">
        <div className="container">
          {/* Content */}
        </div>
      </section>
    </div>
  );
}

export default PageName;
```

### Common Section Types

1. **Hero Section** - Page introduction with CTA
2. **Features Section** - Grid of features/benefits
3. **Problem Section** - Problem statement with statistics
4. **How It Works** - Step-by-step process
5. **Pricing Section** - Pricing tiers
6. **FAQ Section** - Accordion-style questions
7. **CTA Section** - Call-to-action with download buttons

### Reusable Patterns

#### Download Buttons (App Store & Google Play)

```tsx
<div className="app-download-buttons">
  <a
    href="[APP_STORE_URL]"
    target="_blank"
    rel="noopener noreferrer"
    className="app-store-btn"
  >
    {/* App Store SVG */}
  </a>
  <a
    href="[GOOGLE_PLAY_URL]"
    target="_blank"
    rel="noopener noreferrer"
    className="google-play-btn"
  >
    {/* Google Play SVG */}
  </a>
</div>
```

#### Back Navigation Link

```tsx
<Link to="/products/[product]" className="back-link">
  <svg>{/* Arrow icon */}</svg>
  Back to [Product]
</Link>
```

#### Legal Links Footer

```tsx
<div className="legal-links">
  <Link to="/products/[product]/privacy-policy">Privacy Policy</Link>
  <span className="legal-separator">•</span>
  <Link to="/products/[product]/terms-conditions">Terms & Conditions</Link>
</div>
```

---

## Styling Guidelines

### Color Scheme

The brand uses the following color palette (defined in `App.css`):

```css
:root {
  /* Primary Colors */
  --primary-color: #fa0856;      /* Main pink */
  --secondary-color: #ffffff;     /* White */
  
  /* Accent Colors */
  --accent-light-blue: #b6c7d1;  /* Light blue */
  --accent-yellow: #fdcc0d;       /* Yellow */
  --accent-green: #53e77f;        /* Green */
  
  /* Neutral Colors */
  --background-dark: #0a0f1e;     /* Dark background */
  --text-light: #e0e0e0;          /* Light text */
  --text-muted: #a0a0a0;          /* Muted text */
}
```

### CSS Organization

The `App.css` file is organized into logical sections:

1. **CSS Variables** - Color palette, spacing
2. **Base Styles** - Global resets, typography
3. **Layout Components** - Navbar, footer, container
4. **Common Components** - Buttons, cards, sections
5. **Page-Specific Styles** - Hero, features, legal pages
6. **Utility Classes** - Spacing, alignment
7. **Responsive Breakpoints** - Mobile, tablet, desktop

### Responsive Design

The site uses the following breakpoints:

```css
/* Mobile: Default (320px - 767px) */
/* Tablet: 768px - 1023px */
@media (max-width: 1024px) { }

/* Desktop: 1024px+ */
```

### Naming Conventions

- **BEM-inspired** naming for CSS classes
- Component-based prefixes (e.g., `product-hero`, `legal-content`)
- Semantic names that describe purpose
- Hyphen-separated lowercase

Examples:
```css
.product-hero
.product-hero-content
.product-hero-buttons
.app-download-buttons
.legal-content
.faq-accordion
```

---

## Adding New Features

### Adding a New Product Page

1. **Create the product page component** in `src/pages/`:
   ```tsx
   // src/pages/NewProduct.tsx
   import { Link } from "react-router-dom";
   import "../App.css";

   function NewProduct() {
     return (
       <div className="product-page">
         {/* Your content */}
       </div>
     );
   }

   export default NewProduct;
   ```

2. **Add the route** in `App.tsx`:
   ```tsx
   import NewProduct from "./pages/NewProduct";

   // In the Routes component:
   <Route
     path="/products/new-product"
     element={<Layout><NewProduct /></Layout>}
   />
   ```

3. **Update navigation** in `App.tsx` (navbar dropdown):
   ```tsx
   <ul className="dropdown-menu">
     <li>
       <Link to="/products/new-product">
         <div className="dropdown-item">
           <strong>New Product</strong>
           <span>Product Tagline</span>
         </div>
       </Link>
     </li>
   </ul>
   ```

4. **Add product card** on home page (`Home.tsx`):
   ```tsx
   <div className="product-card">
     <h3>New Product</h3>
     <p>Product description</p>
     <Link to="/products/new-product" className="btn btn-secondary">
       Learn More
     </Link>
   </div>
   ```

### Adding Legal Pages for a Product

1. **Create the legal page components**:
   ```tsx
   // src/pages/ProductPrivacyPolicy.tsx
   import { Link } from "react-router-dom";
   import "../App.css";

   function ProductPrivacyPolicy() {
     return (
       <div className="legal-page">
         <section className="legal-hero">
           <div className="container">
             <Link to="/products/product-name" className="back-link">
               {/* Back button */}
             </Link>
             <h1>Privacy Policy</h1>
             <p className="legal-subtitle">Last Updated: [Date]</p>
           </div>
         </section>

         <section className="legal-content">
           <div className="container">
             {/* Legal content */}
           </div>
         </section>
       </div>
     );
   }

   export default ProductPrivacyPolicy;
   ```

2. **Add routes** in `App.tsx`:
   ```tsx
   <Route
     path="/products/product-name/privacy-policy"
     element={<Layout><ProductPrivacyPolicy /></Layout>}
   />
   ```

3. **Add links** to product page CTA section:
   ```tsx
   <div className="legal-links">
     <Link to="/products/product-name/privacy-policy">
       Privacy Policy
     </Link>
     <span className="legal-separator">•</span>
     <Link to="/products/product-name/terms-conditions">
       Terms & Conditions
     </Link>
   </div>
   ```

### Adding a New Section to Home Page

1. **Add the section component** in `Home.tsx`:
   ```tsx
   <section id="new-section" className="new-section">
     <div className="container">
       <div className="section-header">
         <h2>Section Title</h2>
         <div className="underline"></div>
         <p className="section-subtitle">Subtitle text</p>
       </div>
       <div className="section-content">
         {/* Your content */}
       </div>
     </div>
   </section>
   ```

2. **Add styles** to `App.css`:
   ```css
   .new-section {
     padding: 5rem 0;
     background: var(--background-dark);
   }

   .new-section .section-content {
     /* Your styles */
   }
   ```

3. **Add navigation link** to navbar if needed:
   ```tsx
   <li>
     <a href="#new-section">Section Name</a>
   </li>
   ```

---

## Maintenance Guidelines

### Code Quality

1. **TypeScript**
   - Use proper typing for props and state
   - Avoid `any` type unless absolutely necessary
   - Define interfaces for complex objects

2. **Component Structure**
   - Keep components focused and single-purpose
   - Extract reusable logic into separate components
   - Use meaningful component and variable names

3. **CSS Organization**
   - Keep related styles together in `App.css`
   - Follow the existing naming conventions
   - Add comments for complex styling sections

### Content Updates

#### Updating Product Information

Product content is located in the respective page components:
- `src/pages/SharxProduct.tsx` - Sharx product details
- `src/pages/RotaIQProduct.tsx` - RotaIQ product details

To update:
1. Open the relevant product page file
2. Locate the section you want to modify
3. Update the text, images, or links
4. Test the changes locally

#### Updating Legal Documents

Legal documents are stored as `.txt` files in `src/assets/`:
- `src/assets/sharx_law/` - Sharx legal documents
- `src/assets/rota_iq_law/` - RotaIQ legal documents

To update:
1. Edit the `.txt` file with new content
2. Update the corresponding page component if structure changes
3. Update the "Last Updated" date in the legal page header

#### Updating Contact Information

Contact details are in `Home.tsx` under the contact section:

```tsx
<section id="contact" className="contact">
  <div className="container">
    {/* Update contact cards here */}
  </div>
</section>
```

#### Updating App Store Links

App store URLs are defined in:
- Sharx: `SharxProduct.tsx`
- RotaIQ: `RotaIQProduct.tsx`

Search for `href="https://apps.apple.com/` and `href="https://play.google.com/` to update links.

### Asset Management

#### Adding New Images

1. Place images in `src/assets/images/`
2. Import in the component:
   ```tsx
   import imageName from "./assets/images/image-file.png";
   ```
3. Use in JSX:
   ```tsx
   <img src={imageName} alt="Description" />
   ```

#### Logo Updates

The logo is imported in `App.tsx`:
```tsx
import sharxLogo from "./assets/images/sharx_logo_new_transparent background.png";
```

To update:
1. Replace the image file in `src/assets/images/`
2. Update the import path if the filename changes
3. Adjust CSS in `.logo-image` if sizing needs changes

### Version Control Best Practices

1. **Commit Messages**
   - Use descriptive commit messages
   - Format: `[Feature/Fix/Update]: Brief description`
   - Example: `Feature: Add RotaIQ privacy policy page`

2. **Branching**
   - Use feature branches for new features
   - Keep `main` branch stable
   - Branch naming: `feature/feature-name` or `fix/bug-name`

3. **Pull Requests**
   - Test changes locally before creating PR
   - Include description of changes
   - Request review from team members

---

## Deployment

### Development Server

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Production Build

Build for production:
```bash
npm run build
```

This creates optimized files in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Deployment Platforms

The project can be deployed to:
- **Vercel** - Recommended for React SPAs
- **Netlify** - Great for static sites
- **GitHub Pages** - Free hosting for static sites
- **AWS S3 + CloudFront** - Scalable hosting

#### Vercel Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

#### Netlify Deployment

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy`
3. For production: `netlify deploy --prod`

### Environment Variables

If you need environment-specific configurations:

1. Create `.env` file in root:
   ```
   VITE_API_URL=https://api.example.com
   VITE_APP_NAME=Sharx
   ```

2. Access in code:
   ```tsx
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. Add `.env` to `.gitignore` (already done)

---

## Common Tasks

### Adding a New FAQ

In `SharxProduct.tsx` or `RotaIQProduct.tsx`:

```tsx
<div className="faq-item">
  <button
    className="faq-question"
    onClick={() => toggleFAQ(index)}
  >
    Your question here?
    <svg className={`faq-arrow ${openFAQ === index ? "rotate" : ""}`}>
      {/* Arrow icon */}
    </svg>
  </button>
  {openFAQ === index && (
    <div className="faq-answer">
      <p>Your answer here.</p>
    </div>
  )}
</div>
```

### Updating Pricing Plans

In the product page, locate the pricing section:

```tsx
<div className="pricing-card">
  <span className="plan-badge">Badge Text</span>
  <h3>Plan Name</h3>
  <p className="price">£X.XX</p>
  <ul>
    <li>Feature 1</li>
    <li>Feature 2</li>
  </ul>
  <button className="btn btn-primary">Get Started</button>
</div>
```

### Adding Statistics/Metrics

```tsx
<div className="stat-card">
  <h3>300k+</h3>
  <p>Description of statistic</p>
</div>
```

---

## Troubleshooting

### Common Issues

1. **Routes not working after deployment**
   - Ensure your hosting platform supports SPAs
   - Configure redirects to `index.html`

2. **Styles not applying**
   - Check if `App.css` is imported in component
   - Verify class names match CSS file
   - Clear browser cache

3. **Images not loading**
   - Check import paths are correct
   - Ensure images are in `src/assets/images/`
   - Use relative paths with `./`

4. **TypeScript errors**
   - Run `npm run build` to check for type errors
   - Fix any typing issues before committing

---

## Contact & Support

For questions or issues with this project:
- **Email**: support@officialsharx.com
- **Website**: [Sharx Official Website]

---

## License

© 2025 Sharx. All rights reserved.

