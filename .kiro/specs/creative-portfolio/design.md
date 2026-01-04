# Design Document: Creative Portfolio Website

## Overview

The creative portfolio website is a single-page application (SPA) that presents a creative professional's work, story, and contact information in a warm, inviting manner. The design prioritizes visual harmony, accessibility, and emotional connection while maintaining professional credibility.

The website uses modern web technologies (HTML5, CSS3, JavaScript) to create a responsive, performant experience. The architecture emphasizes semantic HTML, component-based styling, and progressive enhancement to ensure the site works across all devices and browsers.

## Architecture

### High-Level Structure

The application follows a component-based architecture with clear separation of concerns:

```
Portfolio Website
├── Navigation Component
├── Hero Section Component
├── About Section Component
├── Featured Work Section Component
│   └── Project Card Components (multiple)
└── Contact Footer Component
```

### Technology Stack

- **HTML5**: Semantic markup for structure and accessibility
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties for theming
- **Vanilla JavaScript**: Lightweight interactivity for smooth scrolling and hover effects
- **No framework dependencies**: Keeps the site fast, maintainable, and easy to deploy

### Responsive Strategy

The design uses a mobile-first approach with breakpoints at:
- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (two columns)
- Desktop: > 1024px (two or three columns)

## Components and Interfaces

### 1. Navigation Bar Component

**Purpose**: Provides site-wide navigation and quick access to key sections.

**Structure**:
```html
<nav class="navbar">
  <div class="nav-container">
    <a href="#about" class="nav-link">About</a>
    <a href="#work" class="nav-link">Work</a>
    <a href="#contact" class="nav-button">Contact</a>
  </div>
</nav>
```

**Styling Properties**:
- Fixed or sticky positioning for persistent access
- Flexbox layout for horizontal alignment
- Contact button uses accent color with rounded corners (border-radius: 24px)
- Smooth hover transitions (transition: all 0.3s ease)

**Behavior**:
- Smooth scroll to target sections on click
- Hover states provide visual feedback
- Maintains visibility across all scroll positions

### 2. Hero Section Component

**Purpose**: Creates an immediate, welcoming first impression and communicates core identity.

**Structure**:
```html
<section class="hero">
  <div class="hero-content">
    <div class="hero-text">
      <h1 class="hero-greeting">Hi, I'm [Name]. I build digital experiences with heart.</h1>
      <p class="hero-subtitle">[Role Description]</p>
      <button class="cta-button">View My Projects</button>
    </div>
    <div class="hero-image">
      <img src="[headshot-placeholder]" alt="Professional headshot">
    </div>
  </div>
</section>
```

**Styling Properties**:
- Background: Cream/off-white (#FAF8F5 or similar)
- Text color: Deep charcoal gray (#2D2D2D)
- Typography: Large heading (48-64px), medium subtitle (18-24px)
- CTA button: Accent color background, white text, rounded corners (border-radius: 28px)
- Headshot: Rounded corners (border-radius: 16px), subtle shadow

**Layout**:
- Desktop: Two-column layout (text left, image right) using CSS Grid
- Mobile: Single column, stacked vertically

### 3. About Section Component

**Purpose**: Tells the professional's story and highlights core values or skills.

**Structure**:
```html
<section class="about">
  <div class="about-container">
    <h2 class="section-heading">About Me</h2>
    <p class="about-bio">[Biographical text]</p>
    <div class="values-grid">
      <div class="value-item">
        <div class="value-icon">[Icon]</div>
        <h3 class="value-title">[Value Name]</h3>
      </div>
      <!-- Repeat for 3-4 values -->
    </div>
  </div>
</section>
```

**Styling Properties**:
- Background: Light beige (#F5F3EF) to differentiate from other sections
- Values grid: CSS Grid with 2x2 or 4-column layout
- Icons: Simple, consistent style (SVG or icon font)
- Spacing: Generous padding (80px vertical, 40px horizontal)

**Layout**:
- Desktop: 4-column grid for values
- Tablet: 2x2 grid
- Mobile: Single column stack

### 4. Featured Work Section Component

**Purpose**: Showcases portfolio projects in an organized, scannable format.

**Structure**:
```html
<section class="featured-work">
  <div class="work-container">
    <h2 class="section-heading">Featured Work</h2>
    <div class="projects-grid">
      <!-- Project cards rendered here -->
    </div>
  </div>
</section>
```

**Styling Properties**:
- Background: Cream/off-white (matches hero)
- Grid: CSS Grid with gap (32px)
- Responsive columns: 1 (mobile), 2 (tablet), 2-3 (desktop)

### 5. Project Card Component

**Purpose**: Displays individual project information in a consistent, attractive format.

**Structure**:
```html
<article class="project-card">
  <div class="project-image">
    <img src="[project-image]" alt="[Project name]">
  </div>
  <div class="project-content">
    <h3 class="project-title">[Project Name]</h3>
    <p class="project-description">[Two-sentence description]</p>
    <div class="tech-tags">
      <span class="tech-tag">[Technology]</span>
      <!-- Repeat for each tech -->
    </div>
  </div>
</article>
```

**Styling Properties**:
- Border-radius: 16px for rounded corners
- Box-shadow: 0 4px 12px rgba(0,0,0,0.08) for subtle depth
- Hover effect: Enhanced shadow (0 8px 24px rgba(0,0,0,0.12)) and slight lift (transform: translateY(-4px))
- Tech tags: Pill-shaped (border-radius: 16px), small font (12-14px), light background with accent color text
- Transition: all 0.3s ease for smooth hover

**Layout**:
- Image: Full-width at top, aspect-ratio: 16/9
- Content: Padding (24px), stacked vertically
- Tags: Flexbox row with wrap and gap (8px)

### 6. Contact Footer Component

**Purpose**: Encourages connection and provides clear contact methods.

**Structure**:
```html
<footer class="contact-footer">
  <div class="footer-container">
    <h2 class="footer-heading">Let's Connect</h2>
    <p class="footer-text">[Encouraging message]</p>
    <a href="mailto:[email]" class="email-button">Send an Email</a>
    <div class="social-links">
      <a href="[linkedin-url]" class="social-link">LinkedIn</a>
      <a href="[github-url]" class="social-link">GitHub</a>
    </div>
  </div>
</footer>
```

**Styling Properties**:
- Background: Light beige (matches About section)
- Email button: Large, prominent, accent color, rounded (border-radius: 32px)
- Social links: Smaller, understated, charcoal gray with hover accent
- Spacing: Generous padding, centered content

## Data Models

### Project Data Structure

```javascript
{
  id: string,              // Unique identifier
  title: string,           // Project name
  description: string,     // Two-sentence description
  imageUrl: string,        // Path to project image
  imageAlt: string,        // Accessible image description
  techStack: string[]      // Array of technology names
}
```

### Site Configuration

```javascript
{
  name: string,            // Professional's name
  greeting: string,        // Hero greeting text
  role: string,            // Role/subtitle
  headshotUrl: string,     // Path to headshot image
  bio: string,             // About section biography
  values: [                // Core values/skills
    {
      icon: string,        // Icon identifier or SVG
      title: string        // Value name
    }
  ],
  contact: {
    email: string,
    linkedin: string,
    github: string,
    footerMessage: string
  },
  theme: {
    backgroundColor: string,      // Cream/off-white
    altBackgroundColor: string,   // Light beige
    textColor: string,            // Deep charcoal
    accentColor: string           // Warm muted color
  }
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property Reflection

After analyzing all acceptance criteria, several properties can be consolidated to eliminate redundancy:
- Color-related properties (background, text, accent) can be grouped into theme consistency properties
- Rounded corner properties across different elements can be unified
- Font consistency checks can be combined
- Responsive grid properties at different breakpoints can be merged into one comprehensive property
- Hover feedback properties can be consolidated

### Correctness Properties

**Property 1: Hero section completeness**
*For any* page load, the hero section should contain all required elements: a greeting heading, role subtitle, headshot image, and call-to-action button.
**Validates: Requirements 1.1**

**Property 2: Warm color theme consistency**
*For any* section of the website, background colors should use soft cream/off-white or light beige (never pure white #FFFFFF), and text colors should use deep charcoal gray (never pure black #000000).
**Validates: Requirements 1.2, 6.1, 6.2**

**Property 3: Accent color application**
*For any* primary interactive element (CTA buttons, contact button, email button), the element should be styled with the defined warm accent color as its background.
**Validates: Requirements 1.3, 2.3, 5.2**

**Property 4: Rounded corner consistency**
*For any* interactive element (buttons, images, project cards), the element should have a border-radius greater than zero to create rounded corners.
**Validates: Requirements 1.3, 2.4, 6.3**

**Property 5: Typography consistency**
*For any* text element across all sections, the font-family should be a sans-serif typeface, maintaining visual consistency throughout the site.
**Validates: Requirements 1.5, 3.5**

**Property 6: Navigation completeness**
*For any* page load, the navigation bar should contain links to About, Work, and Contact sections with correct href attributes.
**Validates: Requirements 2.1**

**Property 7: Smooth scroll behavior**
*For any* navigation link click, the page should scroll to the target section with smooth animation (either via scroll-behavior: smooth or JavaScript smooth scroll).
**Validates: Requirements 2.2, 8.3**

**Property 8: Navigation hover feedback**
*For any* navigation link, hovering should trigger a visual change in CSS properties (color, opacity, or transform).
**Validates: Requirements 2.5**

**Property 9: About section differentiation**
*For any* page load, the About section's background color should be visually distinct from the hero section's background color (light beige vs cream).
**Validates: Requirements 3.1**

**Property 10: Values grid structure**
*For any* page load, the About section should display between 3 and 4 value items, each containing an icon element and title text.
**Validates: Requirements 3.3**

**Property 11: Project grid layout**
*For any* viewport width, the Featured Work section should display project cards in a CSS Grid with column count appropriate to screen size: 1 column (< 768px), 2 columns (768-1024px), or 2-3 columns (> 1024px).
**Validates: Requirements 4.1, 7.1, 7.2, 7.3**

**Property 12: Project card completeness**
*For any* project card rendered, the card should contain all required child elements: an image, title heading, description text, and tech stack tags container.
**Validates: Requirements 4.2**

**Property 13: Card elevation styling**
*For any* project card, the card should have both rounded corners (border-radius > 0) and a subtle box-shadow with low opacity for depth.
**Validates: Requirements 4.3, 6.5**

**Property 14: Tech tag pill styling**
*For any* tech stack tag, the tag should be styled with high border-radius (creating pill shape) and small font-size (12-14px range).
**Validates: Requirements 4.4**

**Property 15: Contact links presence**
*For any* page load, the contact footer should contain links with href attributes pointing to LinkedIn and GitHub/social profiles.
**Validates: Requirements 5.1**

**Property 16: Email button prominence**
*For any* page load, the email button should have larger computed dimensions (font-size, padding, or both) than social media links.
**Validates: Requirements 5.5**

**Property 17: Contact link functionality**
*For any* contact link, the href attribute should use appropriate protocols: mailto: for email, https:// for social profiles.
**Validates: Requirements 5.4**

**Property 18: Accent color warmth**
*For any* element using the accent color, the color's HSL hue value should fall within warm ranges (0-60° for red/orange/yellow tones or 80-150° for warm greens).
**Validates: Requirements 6.4**

**Property 19: Mobile navigation accessibility**
*For any* mobile viewport (< 768px), navigation elements should remain present in the DOM and have clickable/tappable areas.
**Validates: Requirements 7.4**

**Property 20: Minimum font size for readability**
*For any* text element at any viewport size, the computed font-size should be at least 14px to maintain readability.
**Validates: Requirements 7.5**

**Property 21: Interactive hover feedback**
*For any* interactive element (buttons, project cards), hovering should trigger visual changes such as color, opacity, box-shadow, or transform modifications.
**Validates: Requirements 8.1, 8.2**

**Property 22: Smooth transitions**
*For any* interactive element that changes state, the element should have CSS transition properties defined to ensure smooth visual changes.
**Validates: Requirements 8.4**

## Error Handling

### Missing Content Scenarios

**Missing Project Data**: If no projects are provided, the Featured Work section should display a placeholder message indicating content is coming soon, rather than showing an empty grid.

**Missing Images**: If project images or headshot fail to load, the application should:
- Display a colored placeholder div with the project/person's initials
- Maintain layout integrity (preserve aspect ratios and spacing)
- Log errors to console for debugging

**Invalid Configuration**: If theme colors or required configuration values are missing:
- Fall back to default color values (cream: #FAF8F5, beige: #F5F3EF, charcoal: #2D2D2D, accent: #D4896B)
- Display a console warning about missing configuration
- Continue rendering with defaults

### Browser Compatibility

**CSS Feature Detection**: For browsers that don't support CSS Grid:
- Provide Flexbox fallback layouts
- Use @supports queries to detect feature availability
- Ensure content remains accessible even if layout is simplified

**Smooth Scroll Fallback**: For browsers without smooth scroll support:
- Implement JavaScript-based smooth scrolling
- Gracefully degrade to instant scroll if JavaScript is disabled

### Accessibility Errors

**Missing Alt Text**: All images must have alt attributes. If alt text is not provided in configuration:
- Use descriptive fallback text based on context (e.g., "Project screenshot for [title]")
- Log warning to console

**Color Contrast**: Ensure all text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text):
- Test charcoal gray (#2D2D2D) against cream backgrounds
- Verify accent color provides sufficient contrast for button text
- Provide darker accent color variant if needed for accessibility

## Testing Strategy

### Unit Testing Approach

Unit tests will verify specific examples and integration points:

**Component Rendering Tests**:
- Test that each section renders with correct HTML structure
- Verify that configuration data is correctly inserted into templates
- Test edge cases like empty project arrays or missing optional fields

**Styling Tests**:
- Verify that CSS classes are correctly applied to elements
- Test that theme colors from configuration are properly injected
- Validate that responsive breakpoints trigger correct layout changes

**Interaction Tests**:
- Test smooth scroll functionality when navigation links are clicked
- Verify hover states are applied and removed correctly
- Test that external links open correctly

**Example Unit Tests**:
- "Hero section renders with provided name and greeting"
- "Empty project array displays placeholder message"
- "Navigation link scrolls to correct section ID"
- "Email button uses mailto: protocol with configured email"

### Property-Based Testing Approach

Property-based tests will verify universal properties across all inputs using a JavaScript PBT library such as **fast-check**.

**Test Configuration**:
- Each property test should run a minimum of 100 iterations
- Use generators to create random but valid configuration objects
- Each test must reference its corresponding design property with format: **Feature: creative-portfolio, Property {number}: {property_text}**

**Generator Strategies**:

*Configuration Generator*: Creates random valid site configurations with:
- Random names, greetings, and bio text
- Random color values within valid ranges (warm tones for accent)
- Random arrays of 3-4 values
- Random arrays of 1-10 projects

*Project Generator*: Creates random project objects with:
- Random titles and descriptions
- Random tech stack arrays (1-6 technologies)
- Valid image URLs or placeholders

*Viewport Generator*: Creates random viewport dimensions:
- Mobile: 320-767px
- Tablet: 768-1024px
- Desktop: 1025-1920px

**Property Test Examples**:

*Property 1 Test*: Generate random configurations, render hero section, verify all four required elements exist in DOM.

*Property 2 Test*: Generate random configurations, render all sections, verify no element uses #FFFFFF or #000000.

*Property 11 Test*: Generate random viewport widths, render project grid, verify column count matches expected breakpoint behavior.

*Property 18 Test*: Generate random accent colors, verify HSL hue falls within warm ranges (0-60° or 80-150°).

**Testing Tools**:
- **fast-check**: Property-based testing library for JavaScript
- **jsdom** or **happy-dom**: DOM implementation for Node.js testing
- **Vitest** or **Jest**: Test runner and assertion library

### Integration Testing

Integration tests will verify that components work together correctly:
- Test that clicking navigation links scrolls to correct sections
- Verify that project data flows from configuration through to rendered cards
- Test that responsive behavior works across all sections simultaneously

### Accessibility Testing

- Use **axe-core** to automatically detect accessibility violations
- Manually test keyboard navigation (tab order, focus states)
- Verify screen reader compatibility with semantic HTML
- Test color contrast ratios programmatically

### Performance Considerations

While not part of core correctness properties, the following should be monitored:
- Page load time should be under 2 seconds on 3G connections
- Images should be optimized and lazy-loaded where appropriate
- CSS and JavaScript should be minified for production
- Consider using CSS containment for performance optimization
