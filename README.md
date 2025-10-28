# SaaS Landing Page Mockup

A high-fidelity, developer-ready landing page mockup for modern SaaS products, built with HTML, CSS, and vanilla JavaScript.

## 🎨 Design System

### Color Palette
- **Primary Color:** `#2563EB` (indigo-600) - Used for CTAs, links, and accents
- **Primary Dark:** `#1d4ed8` - Hover states for primary elements
- **Primary Light:** `#3b82f6` - Gradients and decorative elements
- **Background:** `#ffffff` (white) - Main background
- **Background Gray:** `#f9fafb` - Alternate section backgrounds
- **Text Primary:** `#111827` - Main text content
- **Text Secondary:** `#6b7280` - Supporting text
- **Border:** `#e5e7eb` - Card borders and dividers

### Typography
- **Font Family:** Inter (with system sans-serif fallbacks)
- **Font Weights:** 300, 400, 500, 600, 700
- **Sizes:**
  - Hero Title: 3.5rem (56px)
  - Section Title: 2.5rem (40px)
  - Showcase Title: 2rem (32px)
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)

### Spacing & Layout
- **Container Max Width:** 1280px
- **Section Padding:** 6rem (96px) vertical
- **Card Border Radius:** 1rem (16px)
- **Button Border Radius:** 0.5rem (8px)
- **Grid Gaps:** 2rem (32px)

### Shadows
- **Small:** `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **Medium:** `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
- **Large:** `0 10px 15px -3px rgba(0, 0, 0, 0.1)`
- **Extra Large:** `0 20px 25px -5px rgba(0, 0, 0, 0.1)`

## 📐 Page Sections

### 1. Navigation Bar
- Fixed position with blur backdrop
- Logo, navigation links, and CTA buttons
- Smooth scroll functionality
- Responsive hide on mobile

### 2. Hero Section (Above the Fold)
- Large headline with gradient text effect
- Descriptive subtitle
- Primary and secondary CTAs
- Key statistics display
- Animated product mockup (browser window)

### 3. Social Proof Strip
- "Trusted by" heading
- 6-column grid of company logos
- Hover effects

### 4. Features Grid
- 6 feature cards in 3-column layout
- Icon, title, and description per card
- Hover effects with lift animation
- Border highlight on hover

### 5. Product Showcase
- Two alternating layout sections
- Dashboard and integrations mockups
- Feature lists with checkmarks
- Responsive image-content grid

### 6. Pricing Section
- Three pricing tiers
- Featured "Most Popular" badge
- Feature lists with checkmarks
- Full-width CTA buttons
- Hover lift effects

### 7. Testimonials Carousel
- Three testimonial cards
- 5-star ratings
- Avatar, name, and role
- Navigation arrows
- Auto-responsive layout

### 8. FAQ Accordion
- 6 common questions
- Click to expand/collapse
- Smooth animations
- Icon rotation on expand

### 9. Rich Footer
- 5-column grid layout
- Company info with logo
- Social media icons
- Multiple link categories:
  - Product
  - Company
  - Resources
  - Legal
- Bottom copyright bar
- Hover effects on all links

## 🎯 Features

### Accessibility
- WCAG AA compliant color contrast ratios
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states on all interactive elements

### Responsiveness
- Desktop-first design (1280px max container)
- Tablet breakpoint: 1024px
- Mobile breakpoint: 768px
- Small mobile: 480px
- Flexible grid layouts
- Stacked layouts on mobile

### Interactions
- Smooth scroll navigation
- FAQ accordion functionality
- Testimonial carousel with controls
- Hover states on all interactive elements
- Card lift animations
- Fade-in animations on scroll
- Floating hero mockup animation

### Performance
- No external dependencies (except Google Fonts)
- Optimized CSS with minimal specificity
- Vanilla JavaScript (no frameworks)
- Fast load times
- Modern CSS features (Grid, Flexbox)

## 🚀 Usage

### Viewing the Mockup
Simply open `index.html` in a modern web browser:

```bash
open index.html
```

Or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js with http-server
npx http-server
```

Then navigate to `http://localhost:8000`

### Customization

#### Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563EB;
    --primary-dark: #1d4ed8;
    /* ... other colors */
}
```

#### Content
All content is in `index.html` and can be easily modified:
- Replace text in sections
- Update feature descriptions
- Modify pricing plans
- Change testimonials
- Update FAQ questions

#### Styling
All styles are in `styles.css`:
- Modify spacing with CSS variables
- Adjust breakpoints in media queries
- Change animations and transitions
- Update typography scales

## 📁 File Structure

```
design-projects/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Interactive functionality
└── README.md       # This file
```

## 🛠️ Development

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Technologies Used
- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

## 📋 Checklist for Developers

When implementing this design:

- [ ] Set up proper meta tags and SEO
- [ ] Add real company logos in social proof
- [ ] Implement actual product screenshots
- [ ] Connect forms to backend
- [ ] Add analytics tracking
- [ ] Set up proper routing for navigation
- [ ] Implement proper image optimization
- [ ] Add loading states for interactive elements
- [ ] Set up error handling
- [ ] Add proper authentication flows
- [ ] Implement real testimonial data
- [ ] Add CMS integration if needed
- [ ] Set up proper build pipeline
- [ ] Add unit tests for JavaScript
- [ ] Perform accessibility audit
- [ ] Test on actual devices
- [ ] Optimize for Core Web Vitals

## 🎨 Design Handoff Notes

### For Designers
- All spacing uses the 8px grid system
- Colors are defined as CSS variables for easy theming
- Consistent border radius across all cards (16px)
- All icons use inline SVG for customization
- Hover states include subtle lift (4px translateY)
- Shadows increase in depth with hover states

### For Developers
- Mobile-first media queries recommended for production
- Consider lazy loading images and animations
- SVG icons can be replaced with icon library
- CSS Grid used for layouts (ensure fallbacks if needed)
- JavaScript is vanilla (easy to port to React/Vue/etc)
- Consider adding skeleton loaders for async content
- Testimonial carousel can be replaced with a proper library
- FAQ accordion can integrate with your routing solution

## 📝 License

This is a design mockup created for demonstration purposes.
