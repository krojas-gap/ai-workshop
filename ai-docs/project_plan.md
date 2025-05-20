# Project Plan: Nuxt E-Commerce Frontend PoC

This document provides a detailed, step-by-step blueprint for building the Nuxt e-commerce frontend PoC as specified in `spec.md`. Each phase is broken down into small, iterative, and safe steps, with prompts for code-generation LLMs to implement each part. All steps are incremental and ensure no orphaned or unintegrated code.

---

## 1. Project Foundation

### 1.1. Initialize Project Structure
```
- Ensure Nuxt 3 project is set up with Tailwind CSS installed and configured.
- Create `/data` directory for static product JSON files.
- Create `/ai-docs` directory for documentation.
```

### 1.2. Basic Layout Scaffolding
```
- Set up the main layout with Header, Left Side Menu, and Footer components.
- Use Nuxt's layout system to wire these components together.
```

---

## 2. Data & Models

### 2.1. Product Data Model
```
- Define the product data structure (name, price, image, images, description, specs, colours, quantity, category).
- Create a few sample product JSON files in `/data`.
```

### 2.2. Category Extraction Utility
```
- Implement a utility to extract unique categories from product data.
```

---

## 3. Core Components

### 3.1. Product Card Component
```
- Create a reusable Product Card component displaying name, price, image, and brief description.
```

### 3.2. Category Filter Component
```
- Build a component to list and select categories, emitting selection events.
```

### 3.3. Search Bar Component
```
- Implement a search bar that filters products by name/description within the selected category.
```

### 3.4. Specs Table Component
```
- Create a two-column table component for displaying product specs.
```

---

## 4. Pages & Routing

### 4.1. Home Page
```
- Display all products grouped by category.
- Integrate category filter and search bar.
- Render Product Cards for each product.
```

### 4.2. Product Detail Page
```
- Set up dynamic route `/product/:id`.
- Display large main image, image carousel, name, price, colours, description, specs table, quantity selector.
- Show other products at the bottom.
```

### 4.3. My Account Page
```
- Create a placeholder page for My Account.
```

---

## 5. Cart Functionality

### 5.1. Cart State Management
```
- Set up a simple cart state (using Pinia or Nuxt composables).
```

### 5.2. Cart Drawer Component
```
- Implement a side drawer for the cart, showing product name, quantity, and price.
- Wire up the cart icon in the header to open the drawer.
```

---

## 6. Footer & Support

### 6.1. Footer Component
```
- Add links for My Account (route) and Support (mailto placeholder).
```

---

## 7. Integration & Polish

### 7.1. Wire Everything Together
```
- Ensure all components are integrated into the main layout and pages.
- Test navigation, filtering, search, and cart flows.
```

### 7.2. Minimal Styling & Review
```
- Apply minimalist Tailwind styling for a clean look.
- Review for any missing integration or orphaned code.
```

---

# Prompts for Code-Generation LLM

## Prompt 1: Project Foundation
```
Set up a Nuxt 3 project with Tailwind CSS. Create `/data` and `/ai-docs` directories. Ensure the project builds and runs successfully.
```

## Prompt 2: Layout Scaffolding
```
Create Header, Left Side Menu, and Footer components. Use Nuxt's layout system to include these in the main layout. Add placeholder content for each.
```

## Prompt 3: Product Data Model & Samples
```
Define the product data structure as per the spec. Create 2-3 sample product JSON files in `/data` with varied attributes.
```

## Prompt 4: Category Utility
```
Implement a utility function to extract unique categories from all product JSON files in `/data`.
```

## Prompt 5: Product Card Component
```
Create a Product Card component that displays a product's name, price, image, and brief description. Use Tailwind for styling.
```

## Prompt 6: Category Filter Component
```
Build a Category Filter component that lists all categories and emits the selected category. Integrate with the main layout.
```

## Prompt 7: Search Bar Component
```
Implement a Search Bar component that filters products by name/description within the selected category. Integrate with the main layout.
```

## Prompt 8: Specs Table Component
```
Create a Specs Table component that displays product specs as a two-column table (spec name, value).
```

## Prompt 9: Home Page Integration
```
On the Home page, display all products grouped by category. Integrate the Category Filter, Search Bar, and Product Card components. Ensure filtering and search work together.
```

## Prompt 10: Product Detail Page
```
Set up the `/product/:id` route. Display the large main image, image carousel, name, price, colours, description, specs table, and quantity selector. Show other products at the bottom.
```

## Prompt 11: My Account Page
```
Create a placeholder My Account page and link it from the header and footer.
```

## Prompt 12: Cart State Management
```
Set up a simple cart state using Pinia or Nuxt composables. Implement add, remove, and update quantity actions.
```

## Prompt 13: Cart Drawer Component
```
Create a Cart Drawer component that opens from the header icon. Display product name, quantity, and price for each item in the cart.
```

## Prompt 14: Footer Component
```
Add My Account (route) and Support (mailto) links to the Footer component.
```

## Prompt 15: Final Integration & Polish
```
Wire all components together in the main layout and pages. Test navigation, filtering, search, and cart flows. Apply minimalist Tailwind styling and review for any missing integration.
```

---

This plan ensures a safe, incremental, and best-practices-driven approach to building the Nuxt e-commerce PoC, with clear prompts for each step.
