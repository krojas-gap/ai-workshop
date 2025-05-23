# Project Implementation Checklist

This checklist references all relevant documentation in `./ai-docs/*` and covers all implementation steps for the Nuxt 3 + Tailwind CSS v3 E-Commerce Frontend PoC, as defined in the project scope.

---

## Documentation Reference
- [spec.md](./spec.md): Project specification and requirements
- [project_plan.md](./project_plan.md): Step-by-step project plan and code prompts
- [app_flow.md](./app_flow.md): Application flow, user journeys, and error handling
- [design_guidelines.md](./design_guidelines.md): UI/UX style guide and design system

---

## Implementation Tasks

### 1. Project Foundation
- [x] Ensure Nuxt 3 project is set up and builds successfully
- [x] Install and configure Tailwind CSS v3
- [x] Create `/data` directory for static product JSON files
- [x] Create `/ai-docs` directory for documentation

### 2. Layout & Structure
- [x] Scaffold main layout using Nuxt's layout system
- [x] Implement Header component (logo, search bar, cart icon, account option)
- [x] Implement SideMenu component (category navigation)
- [x] Implement Footer component (copyright, My Account, Support)

### 3. Data & Models
- [x] Define product data structure (see spec.md)
- [x] Create 2-3 sample product JSON files in `/data` (now using `/mock` for PoC)
- [x] Implement utility to extract unique categories from product data
- [x] Create categories.json and products.json in `/mock` per spec

### 4. Core Components
- [x] ProductCard component (name, price, image, description)
- [x] CategoryFilter component (list and select categories)
- [x] SearchBar component (filter by name/description within category)
- [x] SpecsTable component (two-column layout)
- [x] CartDrawer component (side drawer, product name, quantity, price)
- [x] QuantitySelector component (quantity controls)
- [x] ImageCarousel component (product images)

### 5. Pages & Routing
- [x] Home Page: display all products grouped by category (basic product list done, grouping and filter/search integration pending)
- [x] Integrate category filter and search bar on Home Page
- [x] Render ProductCards for each product
- [x] Product Detail Page: `/product/:id` (main image, carousel, name, price, colours, description, specs, quantity selector, other products, clickable related products)
- [ ] My Account Page: placeholder

### 6. Cart Functionality
- [ ] Set up cart state management (Pinia or Nuxt composables)
- [ ] Implement CartDrawer (side drawer, product name, quantity, price)
- [ ] Wire up cart icon in header to open drawer

### 7. Footer & Support
- [x] Add My Account (route) and Support (mailto) links to Footer

### 8. Integration & Polish
- [x] Integrate all components into main layout and pages
- [x] Test navigation, filtering, search, and cart flows
- [x] Apply minimalist Tailwind styling
- [ ] Review for missing integration or orphaned code

### 9. Error Handling & Edge Cases
- [ ] Handle missing/corrupt product data (skip or show error)
- [ ] Show friendly message for empty category/search results
- [ ] Handle cart add failures (invalid quantity)
- [ ] Show 404 or 'Product Not Found' for invalid product routes

### 10. Review & Success Metrics
- [ ] Confirm all MVP user flows are functional (see app_flow.md)
- [ ] Ensure error states are handled gracefully
- [ ] Validate UI/UX consistency with design_guidelines.md

### 11. Code Quality & Refactoring
- [ ] Move shared utilities (e.g., price formatting) to a composable or utils file
- [ ] Refactor components to emit events for actions (e.g., product card click)
- [ ] Add comments and documentation to complex logic and components

### 12. Scalability & State
- [ ] Scaffold and implement cart state management (Pinia or Nuxt composables)

### 13. Error Handling & UX
- [ ] Add error handling for missing/corrupt product data and empty results
- [ ] Implement 404 or fallback UI for invalid product routes

### 14. Accessibility Pre-Launch Checklist
- [ ] Ensure all buttons use <button> elements and have descriptive text or aria-labels
- [ ] All form fields have associated <label> elements (visually hidden if needed)
- [ ] Modals and drawers trap focus, use role="dialog" and aria-modal="true", and restore focus on close
- [ ] All interactive elements are keyboard accessible and have visible focus indicators
- [ ] Provide a "Skip to main content" link for keyboard users
- [ ] Test navigation and content with screen readers (NVDA, VoiceOver, ChromeVox)
- [ ] Validate color contrast (4.5:1 for normal text, 3:1 for large text) using tools like axe or Lighthouse
- [ ] Do not rely on color alone to convey information (e.g., error states)
- [ ] Use ARIA roles/attributes to enhance, not replace, native semantics
- [ ] Avoid using role="button" on non-button elements; prefer native elements
- [ ] Use aria-live for dynamic updates (e.g., cart changes) if needed
- [ ] Avoid aria-hidden on visible, interactive elements

---

Check off each item as you complete it to ensure a thorough, best-practices implementation of the Nuxt 3 + Tailwind CSS v3 E-Commerce Frontend PoC.
