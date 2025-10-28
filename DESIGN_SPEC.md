# SaaS Landing Page - Design Specifications

## Quick Reference

### Color Palette
- **Primary:** `#2563EB` (indigo-600)
- **Primary Light:** `#3B82F6`
- **Primary Dark:** `#1E40AF`
- **Background:** `#FFFFFF`
- **Gray Scale:** `#F9FAFB` → `#111827`

### Typography
- **Font:** Inter (Google Fonts)
- **Weights:** 400, 500, 600, 700
- **Scale:** 0.875rem - 3.5rem

### Spacing Scale
- XS: 0.5rem (8px)
- SM: 1rem (16px)
- MD: 1.5rem (24px)
- LG: 2rem (32px)
- XL: 3rem (48px)
- 2XL: 4rem (64px)
- 3XL: 6rem (96px)

### Border Radius
- SM: 0.375rem (6px)
- MD: 0.5rem (8px)
- LG: 0.75rem (12px)
- XL: 1rem (16px)
- 2XL: 1.5rem (24px)

### Shadows
- SM: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- MD: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
- LG: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
- XL: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`

## Section Breakdown

### 1. Navigation (Sticky)
- Logo with gradient text effect
- Navigation links (Features, Pricing, Testimonials, FAQ)
- Sign In (secondary button) + Get Started (primary button)
- Glassmorphism effect with backdrop blur
- Scroll-based shadow enhancement

### 2. Hero Section
- Badge: "✨ New Feature Released"
- H1: Large headline with gradient text accent
- Subtitle: 1.25rem gray text
- Dual CTAs: Primary + Secondary with icons
- Stats row: 3 metrics (10K+ Users, 99.9% Uptime, 4.9/5 Rating)
- Product screenshot mockup with browser chrome

### 3. Social Proof Strip
- Title: "Trusted by innovative companies worldwide"
- 6-column logo grid (responsive to 3 cols, 2 cols)
- Hover opacity transition

### 4. Features Grid
- Section header with title + subtitle
- 3-column grid (responsive to 2 cols, 1 col)
- 6 feature cards with:
  - Icon in gradient background box
  - Title (1.25rem, semibold)
  - Description text
  - Hover: lift + shadow + border color change

**Features:**
- Lightning Fast
- Secure by Default
- Real-time Updates
- Team Collaboration
- API Integration
- Custom Branding

### 5. Product Showcase
- 2 alternating layout sections
- Left: Content (badge, title, description, feature list)
- Right: Browser mockup with visual elements
- Sections: Dashboard & Automation

### 6. Pricing Section
- Section header
- 3-column grid (responsive to 1 col)
- Cards: Starter ($29), Professional ($79), Enterprise ($199)
- Featured card (Professional) with "Most Popular" badge
- Hover effects on all cards
- Full feature lists with checkmarks

### 7. Testimonials Carousel
- Section header
- Single testimonial display
- Auto-rotate every 5 seconds (pauses on hover)
- Previous/Next navigation buttons
- Dot indicators
- Each testimonial: 5-star rating, quote, avatar, name, role
- Keyboard navigation (arrow keys)

### 8. FAQ Accordion
- Section header
- 6 questions in accordion format
- Smooth expand/collapse animations
- Hover states on questions
- Icon rotation on expand
- Questions:
  - How do I get started?
  - Can I change my plan?
  - Is my data secure?
  - Do you offer a free trial?
  - What support do you provide?
  - Can I integrate with other tools?

### 9. Footer
- 2-column layout (brand + links)
- Brand section:
  - Logo
  - Description
  - Social media icons (Twitter, LinkedIn, GitHub, YouTube)
- Links section (4 columns):
  - Product
  - Company
  - Resources
  - Legal
- Bottom copyright row

## Responsive Breakpoints

### Desktop (1024px+)
- Full multi-column layouts
- All features visible
- Maximum spacing

### Tablet (768px - 1024px)
- 2-column features grid
- Single column showcase
- 3-column logo grid
- Adjusted spacing

### Mobile (<768px)
- Single column layouts
- Stacked navigation (hidden)
- 2-column logo grid
- 2-column footer links
- Reduced font sizes
- Full-width buttons

## Animations & Transitions

### Hover States
- Buttons: Darken + lift + shadow
- Cards: Lift + shadow + border color
- Links: Color change
- Social icons: Background color + lift

### Scroll-Based
- Navbar shadow on scroll
- Element fade-in with Intersection Observer
- Smooth scroll to anchor links

### Interactive
- Carousel slide transitions
- FAQ accordion expand/collapse
- Icon rotations

## Accessibility Features

### WCAG 2.1 AA Compliance
- Minimum 4.5:1 contrast for normal text
- Minimum 3:1 contrast for large text
- Minimum 3:1 contrast for UI components

### Semantic HTML
- Proper heading hierarchy (h1-h4)
- Navigation landmarks
- List structures for features/pricing
- Button elements for interactions

### Keyboard Support
- Tab navigation through all interactive elements
- Arrow keys for carousel
- Enter/Space for button activation
- Focus indicators on all interactive elements

### ARIA Labels
- Navigation aria-labels
- Button descriptions
- Link purposes

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Optimizations
- CSS variables for theming
- Transform-based animations (GPU accelerated)
- Minimal JavaScript
- Lazy-loaded fonts with preconnect
- Optimized selector specificity
