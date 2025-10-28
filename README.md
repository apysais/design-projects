# SaaS Landing Page - High-Fidelity Mockup

## Overview

This repository contains a high-fidelity, interactive HTML/CSS mockup for a modern SaaS landing page. The design is production-ready and serves as comprehensive developer handoff documentation.

## 🎨 Design Specifications

### Color Palette
- **Primary Color:** `#2563EB` (indigo-600)
- **Background:** `#FFFFFF` (white)
- **Secondary Backgrounds:** Gray scale (`#F9FAFB`, `#F3F4F6`)
- **Text Colors:** Gray scale for hierarchy (`#111827` to `#6B7280`)

### Typography
- **Font Family:** Inter (with system font fallbacks)
- **Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Sizes:** Responsive scale from 0.875rem to 3.5rem

### Layout
- **Max Width:** 1280px container
- **Grid System:** CSS Grid with responsive breakpoints
- **Spacing Scale:** 0.5rem to 6rem (8px to 96px)
- **Border Radius:** 0.375rem to 1.5rem for various elements

## 📐 Sections Included

1. **Navigation Bar**
   - Sticky header with logo, navigation links, and CTAs
   - Glassmorphism effect with backdrop blur

2. **Hero Section**
   - Compelling headline with gradient text
   - Dual CTAs (primary and secondary)
   - Key statistics display
   - Product screenshot mockup

3. **Social Proof Strip**
   - Company logo grid
   - Trust indicators

4. **Features Grid**
   - 6 feature cards with icons
   - Hover animations
   - 3-column responsive layout

5. **Product Showcase**
   - Two detailed sections with alternating layouts
   - Feature lists with checkmarks
   - Browser-style mockups

6. **Pricing Section**
   - Three pricing tiers
   - Featured plan with highlight
   - Feature comparison lists

7. **Testimonials Carousel**
   - Rotating customer testimonials
   - Avatar placeholders
   - Manual and automatic navigation

8. **FAQ Section**
   - Accordion-style questions
   - Smooth expand/collapse animations

9. **Rich Footer**
   - Multi-column link structure
   - Social media icons
   - Brand information

## 🎯 Design Features

### Accessibility
- ✅ WCAG 2.1 AA compliant color contrast ratios
- ✅ Semantic HTML structure
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation support
- ✅ Focus states for all interactive elements

### Responsiveness
- **Desktop:** Optimized for 1280px+ screens
- **Tablet:** Breakpoint at 1024px and 768px
- **Mobile:** Optimized for 480px and below
- Fluid typography and spacing
- Responsive grid layouts

### Animations & Interactions
- Smooth hover states on buttons and cards
- Scroll-based fade-in animations
- Testimonial carousel with auto-rotate
- FAQ accordion with smooth transitions
- Subtle shadow and transform effects

### Performance
- Optimized CSS with CSS variables
- Minimal JavaScript for interactions
- Google Fonts with preconnect
- Efficient animations using CSS transforms

## 🚀 Usage

### Viewing the Mockup

1. Clone the repository:
```bash
git clone https://github.com/apysais/design-projects.git
cd design-projects
```

2. Open `index.html` in a modern web browser:
```bash
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

Or use a local server:
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

### File Structure
```
design-projects/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── script.js           # Interactive functionality
└── README.md          # Documentation (this file)
```

## 🛠️ Customization Guide

### Colors
All colors are defined as CSS variables in `:root`:
```css
--color-primary: #2563EB;
--color-white: #FFFFFF;
/* Modify these to change the color scheme */
```

### Typography
Font family and sizes:
```css
--font-family: 'Inter', -apple-system, ...;
/* Update typography variables for different fonts */
```

### Spacing
Consistent spacing scale:
```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
/* Adjust for tighter or looser layouts */
```

### Breakpoints
Responsive breakpoints in media queries:
- Desktop: 1024px+
- Tablet: 768px - 1024px
- Mobile: < 768px

## 📋 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🎓 Developer Handoff Notes

### Key Components

**Buttons:**
- `.btn-primary` - Main call-to-action
- `.btn-secondary` - Secondary actions
- `.btn-large` - Larger button variant
- `.btn-full` - Full-width button

**Cards:**
- `.feature-card` - Feature grid items
- `.pricing-card` - Pricing tier cards
- `.testimonial-card` - Testimonial items

**Layout:**
- `.container` - Main content wrapper (1280px max-width)
- Grid systems use CSS Grid with responsive columns

**Interactions:**
- Testimonial carousel: JavaScript-powered rotation
- FAQ accordion: Toggle with smooth height transitions
- Smooth scroll: Automatic offset for sticky navbar

### Design Tokens

All design decisions are documented in CSS variables for easy theming and maintenance.

## 🔧 Extending the Design

### Adding New Sections
1. Follow the existing HTML structure
2. Use semantic HTML5 elements
3. Apply consistent spacing using utility classes
4. Test responsiveness at all breakpoints

### Custom Illustrations
Replace mockup placeholders with:
- Real product screenshots
- Custom illustrations
- Icon libraries (e.g., Heroicons, Feather Icons)

### Animations
Additional animations can be added using:
- CSS transitions for simple effects
- CSS animations for complex sequences
- JavaScript for interactive behaviors

## 📝 License

This design mockup is part of the design-projects repository and is available for educational and demonstration purposes.

## 🤝 Contributing

This is a mockup project. For improvements or suggestions, please open an issue in the repository.

---

**Design System Version:** 1.0  
**Last Updated:** October 2024  
**Designed for:** Modern SaaS Products
