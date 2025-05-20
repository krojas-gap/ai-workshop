# E-Commerce Frontend PoC Specification

## Overview
- Nuxt 3 application for browsing and viewing electronic products.
- Products are organized by regular categories (no subcategories).
- Data is sourced from static JSON files (one file per product) in the `/data` folder.
- Minimalist UI using Tailwind CSS.
- No mobile responsiveness or accessibility requirements for this PoC.

## Layout
- **Header:**
  - Logo
  - Search bar (filters by name/description within selected category)
  - Shopping cart icon (shows product count, opens side drawer)
  - Account option (navigates to placeholder page)
- **Left Side Menu:**
  - List of available categories (filters products on Home page)
- **Footer:**
  - Copyright
  - "My Account" (navigates to placeholder page)
  - "Support" (mailto link, placeholder email)

## Pages
- **Home Page:**
  - Lists all products, grouped by category.
  - Category filter in side menu.
  - Real-time search bar filters products by name/description within selected category.
- **Product Detail Page:**
  - URL: `/product/:id`
  - Large main image
  - Image carousel on the left for additional images
  - Name, price, available colors, description, specs (as two-column table), quantity selector
  - At the bottom: other products (related or random)
- **My Account Page:**
  - Placeholder page
- **Support:**
  - Footer link is a mailto with placeholder email

## Product Data
- Each product is represented by a JSON file in `/data`.
- Product attributes (all optional):
  - `name`
  - `price`
  - `image` (main image)
  - `images` (array for carousel)
  - `description`
  - `specs` (object or array for table)
  - `colours` (array)
  - `quantity`
  - `category`

## Components & Features
- **Product Card:** shows name, price, image, and brief description.
- **Category Filter:** filters products on Home page.
- **Search Bar:** real-time filtering by name/description within selected category.
- **Cart Drawer:** opens from header icon, shows product name, quantity, price.
- **Specs Table:** two-column layout (spec name, value) on Home and Detail pages.
- **Navigation:** clicking a product navigates to `/product/:id`.

## Edge Cases
- No explicit handling for empty states, errors, or loading indicators (keep minimal for PoC).

---

This document defines the complete requirements and structure for the Nuxt e-commerce PoC frontend. All implementation should conform to these specifications.
