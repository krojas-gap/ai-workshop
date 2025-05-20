### UI/UX Style Guide

## General Overview of the Design System

This design system follows a clean, modern aesthetic with a focus on e-commerce functionality. The interface employs a minimalist approach with strategic use of accent colors to highlight important actions and information. The overall design language prioritizes clarity, accessibility, and intuitive navigation.

The system is built on a consistent grid structure with well-defined spacing rules that create visual harmony across different screen sizes. Components are designed to be modular and reusable, ensuring consistency throughout the user experience while allowing for flexibility in different contexts.

The visual hierarchy guides users through the interface naturally, with primary actions and important information receiving visual emphasis through color, size, and positioning. The design system balances aesthetic appeal with functional clarity, creating an interface that is both visually pleasing and highly usable.

## Color Palette

### Primary Colors

- **Primary Red (`#DB4444`)**: Used for primary actions, sale tags, and important highlights
- **Black (`#000000`)**: Used for primary text, footer background, and strong visual elements
- **White (`#FFFFFF`)**: Used for backgrounds, text on dark surfaces, and to create visual space


### Secondary Colors

- **Star Rating Yellow (`#FFAD33`)**: Used for star ratings and occasional accents
- **Success Green (`#00FF66`)**: Used for "New" tags, availability indicators, and success states
- **Light Gray (`#F5F5F5`)**: Used for product backgrounds, subtle section dividers, and secondary surfaces
- **Dark Gray (`#1C1B1F`)**: Used for secondary text and icons


### Neutral Colors

- **Border Gray (`#D9D9D9`)**: Used for borders, dividers, and subtle separators
- **Text Gray (`#7D8184`)**: Used for secondary and tertiary text content
- **Background Off-White (`#FAFAFA`)**: Used for page backgrounds and subtle contrast


### Accent Colors

- **Light Blue (`#A0BCE0`)**: Used sparingly for specific UI elements and category indicators
- **Light Red (`#E07575`)**: Used for error states and destructive actions
- **Bright Red (`#FB1314`)**: Used for urgent notifications and critical information
- **Yellow (`#EEFF61`)**: Used for warnings and attention-grabbing elements
- **Dark Green (`#184A48`)**: Used for specific category indicators


## Typography

### Font Family

- **Primary Font**: Inter (Sans-serif)
- **Fallback Fonts**: Arial, Helvetica, sans-serif


### Font Sizes

- **Display (H1)**: 24px (2xl) - Used for main page headings
- **H2**: 20px (xl) - Used for section headings
- **H3**: 16px (lg) - Used for card and component headings
- **Body Regular**: 14px (base) - Used for main content text
- **Body Small**: 12px (sm) - Used for secondary information
- **Caption**: 10px (xs) - Used for labels and supplementary information


### Font Weights

- **Regular**: 400 - Used for body text and general content
- **Medium**: 500 - Used for semi-emphasized text, product names
- **Bold**: 700 - Used for headings, prices, and important information


### Line Heights

- **Tight**: 1.2 - Used for headings and short text blocks
- **Normal**: 1.5 - Used for body text and general content
- **Relaxed**: 1.8 - Used for longer paragraphs and descriptions


## UI Section Colors

### Header

- **Background**: White (`#FFFFFF`)
- **Text**: Black (`#000000`)
- **Search Background**: Light Gray (`#F5F5F5`)
- **Search Text**: Dark Gray (`#1C1B1F`)
- **Border**: Light Gray (`#D9D9D9`)


### Footer

- **Background**: Black (`#000000`)
- **Text**: White (`#FFFFFF`)
- **Secondary Text**: Gray (`#7D8184`)
- **Border**: Dark Gray (`#1C1B1F`)
- **Social Icons**: White (`#FFFFFF`)


### Sidebar (Category Navigation)

- **Background**: White (`#FFFFFF`)
- **Text**: Black (`#000000`)
- **Hover Text**: Primary Red (`#DB4444`)
- **Border**: Light Gray (`#D9D9D9`)


### Product Cards

- **Background**: White (`#FFFFFF`)
- **Product Background**: Light Gray (`#F5F5F5`)
- **Title Text**: Black (`#000000`)
- **Price Text**: Primary Red (`#DB4444`)
- **Old Price Text**: Gray (`#7D8184`)
- **Rating Stars**: Star Rating Yellow (`#FFAD33`)
- **Sale Tag**: Primary Red (`#DB4444`)
- **New Tag**: Success Green (`#00FF66`)
- **Add to Cart Button**: Black (`#000000`) with White (`#FFFFFF`) text


### Product Detail Page

- **Background**: White (`#FFFFFF`)
- **Product Image Background**: Light Gray (`#F5F5F5`)
- **Title Text**: Black (`#000000`)
- **Price Text**: Black (`#000000`)
- **Description Text**: Gray (`#7D8184`)
- **Add to Cart Button**: Primary Red (`#DB4444`) with White (`#FFFFFF`) text
- **Delivery Info Background**: Light Gray (`#F5F5F5`)
- **Delivery Info Text**: Black (`#000000`) and Gray (`#7D8184`)


## Spacing and Grid System

### Base Unit

- **4px**: The foundational unit for all spacing measurements


### Spacing Scale

- **Extra Small (xs)**: 4px (1 unit)
- **Small (sm)**: 8px (2 units)
- **Medium (md)**: 16px (4 units)
- **Large (lg)**: 24px (6 units)
- **Extra Large (xl)**: 32px (8 units)
- **2xl**: 48px (12 units)
- **3xl**: 64px (16 units)


### Container Widths

- **Max Width**: 1280px
- **Content Padding**: 16px (mobile), 24px (tablet), 32px (desktop)


### Grid System

- **Columns**: 12-column grid on desktop, 8-column on tablet, 4-column on mobile
- **Gutters**: 24px between columns
- **Breakpoints**:

- **Mobile**: 0-639px
- **Tablet**: 640px-1023px
- **Desktop**: 1024px and above





### Component Spacing

- **Card Padding**: 16px
- **Section Margins**: 48px (top and bottom)
- **Form Element Spacing**: 16px between elements
- **Button Padding**: 8px 16px (small), 12px 24px (medium), 16px 32px (large)


## Components

### Buttons

#### Primary Button

- **Background**: Primary Red (`#DB4444`)
- **Text**: White (`#FFFFFF`)
- **Border Radius**: 4px
- **Padding**: 12px 24px
- **States**:

- **Hover**: Slightly darker red
- **Focus**: Outline ring
- **Disabled**: Reduced opacity (0.5)





#### Secondary Button

- **Background**: White (`#FFFFFF`)
- **Text**: Black (`#000000`)
- **Border**: 1px solid Light Gray (`#D9D9D9`)
- **Border Radius**: 4px
- **Padding**: 12px 24px
- **States**:

- **Hover**: Light Gray background (`#F5F5F5`)
- **Focus**: Outline ring
- **Disabled**: Reduced opacity (0.5)





#### Icon Button

- **Background**: Transparent
- **Icon Color**: Black (`#000000`)
- **Size**: 40px × 40px
- **States**:

- **Hover**: Light Gray background (`#F5F5F5`)
- **Focus**: Outline ring
- **Disabled**: Reduced opacity (0.5)





### Form Elements

#### Text Input

- **Background**: Light Gray (`#F5F5F5`)
- **Text**: Black (`#000000`)
- **Placeholder**: Gray (`#7D8184`)
- **Border**: None in default state
- **Border Radius**: 4px
- **Padding**: 12px 16px
- **States**:

- **Focus**: Border or outline in Primary Red (`#DB4444`)
- **Error**: Border or outline in Light Red (`#E07575`)
- **Disabled**: Reduced opacity (0.5)





#### Quantity Selector

- **Background**: White (`#FFFFFF`)
- **Border**: 1px solid Light Gray (`#D9D9D9`)
- **Text**: Black (`#000000`)
- **Button Background**: White (`#FFFFFF`)
- **Button Border**: 1px solid Light Gray (`#D9D9D9`)
- **States**:

- **Hover**: Light Gray background (`#F5F5F5`) for buttons
- **Disabled**: Reduced opacity (0.5)





#### Color Selector

- **Size**: 32px × 32px
- **Border**: 2px solid Primary Red (`#DB4444`) for selected state
- **Border Radius**: Full (circle)


### Cards

#### Product Card

- **Background**: White (`#FFFFFF`)
- **Product Image Background**: Light Gray (`#F5F5F5`)
- **Border Radius**: 8px
- **Shadow**: None
- **Padding**: 0px (container), 16px (content)
- **States**:

- **Hover**: Shows "Add to Cart" button and action icons





#### Information Card

- **Background**: Light Gray (`#F5F5F5`)
- **Text**: Black (`#000000`) and Gray (`#7D8184`)
- **Border Radius**: 8px
- **Padding**: 16px


### Navigation

#### Main Navigation

- **Background**: White (`#FFFFFF`)
- **Text**: Black (`#000000`)
- **Active Text**: Primary Red (`#DB4444`)
- **Spacing**: 32px between items


#### Breadcrumb

- **Text**: Gray (`#7D8184`)
- **Active Text**: Black (`#000000`)
- **Separator**: Forward slash (/)
- **Spacing**: 8px between items


## Interactive Behaviors

### Hover States

- **Buttons**: Background color change, subtle scale or shadow effect
- **Navigation Items**: Text color change to Primary Red (`#DB4444`)
- **Product Cards**: Reveal action buttons and "Add to Cart" button
- **Links**: Text color change to Primary Red (`#DB4444`)


### Focus States

- **All Interactive Elements**: Visible focus ring in Primary Red (`#DB4444`)
- **Keyboard Navigation**: Clear visual indication of focused element


### Active States

- **Buttons**: Slightly darker color than hover state
- **Navigation Items**: Text color change and possible underline or indicator


### Disabled States

- **All Elements**: Reduced opacity (0.5)
- **Buttons**: No hover effects, cursor not-allowed


### Loading States

- **Buttons**: Loading spinner or animation
- **Page Content**: Skeleton loaders matching content structure


## Navigation Patterns and Visual Hierarchy

### Primary Navigation

- **Location**: Top header
- **Style**: Horizontal menu with equal spacing
- **Hierarchy**: Equal emphasis on main navigation items


### Secondary Navigation

- **Location**: Left sidebar (category navigation)
- **Style**: Vertical list with subtle separators
- **Hierarchy**: Equal emphasis on all categories


### Visual Hierarchy Principles

1. **Size**: Larger elements receive more attention (headings, primary buttons)
2. **Color**: Primary Red (`#DB4444`) draws attention to important actions
3. **Contrast**: High contrast for primary content, lower contrast for secondary information
4. **Spacing**: More space around important elements
5. **Typography**: Font weight and size variations to indicate importance


### Page Structure

1. **Header**: Brand identity, navigation, search, and user actions
2. **Main Content**: Primary content area with clear visual hierarchy
3. **Sidebar**: Complementary navigation or filtering options
4. **Footer**: Secondary information, links, and company details


## Applied Design Principles

### Consistency

- Consistent use of colors, typography, spacing, and components
- Predictable placement of recurring elements
- Uniform interaction patterns across the interface


### Clarity

- Clear visual hierarchy guiding users through the interface
- Unambiguous labeling and iconography
- Sufficient contrast for readability


### Feedback

- Visual feedback for all user interactions
- Clear system status indicators
- Informative error and success messages


### Efficiency

- Streamlined user flows with minimal steps
- Strategic placement of frequently used actions
- Keyboard shortcuts and accessibility considerations


### Aesthetics

- Clean, modern visual design
- Strategic use of white space
- Balanced compositions with visual rhythm


```typescriptreact project="ecommerce"
...
```

# UI/UX Style Guide

I've created an interactive style guide based on the e-commerce design system. This comprehensive guide documents all the key design elements and patterns to ensure consistency across the platform.

## Key Features of the Style Guide

### Color Palette

- **Primary Colors**: Red (`#DB4444`), Black (`#000000`), White (`#FFFFFF`)
- **Secondary Colors**: Star Rating Yellow (`#FFAD33`), Success Green (`#00FF66`), Light Gray (`#F5F5F5`)
- **Neutral Colors**: Border Gray (`#D9D9D9`), Text Gray (`#7D8184`), Background Off-White (`#FAFAFA`)
- **Accent Colors**: Light Blue (`#A0BCE0`), Light Red (`#E07575`), Bright Red (`#FB1314`), Yellow (`#EEFF61`)


### Typography System

- **Font Family**: Inter with Arial/Helvetica fallbacks
- **Font Sizes**: Ranging from 10px (captions) to 24px (headings)
- **Font Weights**: Regular (400), Medium (500), Bold (700)
- **Line Heights**: Tight (1.2), Normal (1.5), Relaxed (1.8)


### UI Section Colors

The guide documents specific color usage for each major UI section:

- **Header**: White background with black text
- **Footer**: Black background with white text
- **Sidebar**: White background with black text and red hover states
- **Product Cards**: Light gray product backgrounds with strategic color accents
- **Product Detail Page**: White background with carefully balanced text hierarchy


### Components

The style guide includes visual examples and specifications for:

- **Buttons**: Primary, Secondary, and Icon buttons with all states
- **Form Elements**: Text inputs, quantity selectors, and color selectors
- **Cards**: Product cards and information cards with detailed styling


### Spacing and Grid System

- **Base Unit**: 4px as the foundation
- **Spacing Scale**: From 4px (xs) to 64px (3xl)
- **Grid System**: 12-column desktop, 8-column tablet, 4-column mobile


The interactive style guide allows designers and developers to easily reference and implement the design system, ensuring visual consistency across the e-commerce platform.