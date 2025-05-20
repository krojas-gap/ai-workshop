# Application Flow: Nuxt E-Commerce Frontend PoC

## 1. User Journey Map

```mermaid
flowchart TD
    A[Entry: Home Page] --> B{Select Category?}
    B -- Yes --> C[Filter Products by Category]
    B -- No --> D[View All Products]
    C --> E[Search Products]
    D --> E
    E --> F{Click Product?}
    F -- Yes --> G[View Product Detail]
    F -- No --> H[Exit or Continue Browsing]
    G --> I{Add to Cart?}
    I -- Yes --> J[Cart Drawer]
    I -- No --> H
    J --> K{Proceed to Checkout?}
    K -- No --> H
    K -- Yes --> L[Exit: Checkout (Out of Scope)]
    H --> M[Exit: Leave Site]
```

- **Entry Points:**
  - Home page (direct, search, or referral)
- **Critical Paths:**
  - Browse/filter/search products → View product detail → Add to cart
- **Exit Points:**
  - Leave site
  - Proceed to checkout (checkout flow is out of MVP scope)

---

## 2. Core Interaction Flows (MVP)

### Flow 1: Browse and Filter Products
```mermaid
sequenceDiagram
    participant U as User
    participant H as Home Page
    participant S as Side Menu
    U->>H: Loads Home Page
    H->>S: Displays categories
    U->>S: Selects a category
    S->>H: Filters product list
    U->>H: Uses search bar (optional)
    H->>H: Filters products by search term
```

### Flow 2: View Product Detail
```mermaid
sequenceDiagram
    participant U as User
    participant H as Home Page
    participant P as Product Detail Page
    U->>H: Clicks on a product card
    H->>P: Navigates to /product/:id
    P->>U: Displays product details (images, specs, etc.)
```

### Flow 3: Add to Cart and View Cart Drawer
```mermaid
sequenceDiagram
    participant U as User
    participant P as Product Detail Page
    participant C as Cart Drawer
    U->>P: Selects quantity, color (if available)
    U->>P: Clicks 'Add to Cart'
    P->>C: Opens cart drawer with product info
    C->>U: Shows product name, quantity, price
```

### Flow 4: My Account (Placeholder)
```mermaid
sequenceDiagram
    participant U as User
    participant H as Header/Footer
    participant A as My Account Page
    U->>H: Clicks 'My Account'
    H->>A: Navigates to placeholder page
    A->>U: Shows placeholder content
```

---

## 3. Error Handling Flows

- **Missing Product Data:**
  - If a product file is missing or corrupt, show a generic error message or skip rendering that product.
- **No Products in Category/Search:**
  - Display a friendly message: "No products found."
- **Cart Add Failure:**
  - If adding to cart fails (e.g., invalid quantity), show an inline error message.
- **Navigation to Nonexistent Product:**
  - Show a 404 or 'Product Not Found' message.

---

## 4. Success Metrics

- User can filter and search products by category and text.
- User can view product details for any listed product.
- User can add a product to the cart and see it in the cart drawer.
- User can access the My Account placeholder page.
- Error states are handled gracefully with user-friendly messages.

---

## Example Flow: Add to Cart (Happy Path & Error)

### Happy Path
1. User browses products and selects a category.
2. User searches for a product and clicks a product card.
3. On the Product Detail page, user selects quantity and clicks 'Add to Cart'.
4. Cart drawer opens, showing the product with correct quantity and price.

### Error Scenario
1. User tries to add a product with invalid quantity (e.g., zero or negative).
2. System displays an inline error: "Please select a valid quantity."
3. User corrects the quantity and successfully adds the product to the cart.

---

This document outlines the MVP user flows, error handling, and success criteria for the Nuxt E-Commerce Frontend PoC.
