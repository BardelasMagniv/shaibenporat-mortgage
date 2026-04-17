---
name: ui-ux-pro-max
description: >
  Comprehensive UI/UX design intelligence for building professional interfaces.
  Covers 67 styles, 161 color palettes, 57 font pairings, 99 UX guidelines,
  and 25 chart types across 15+ technology stacks.
---

# UI UX Pro Max

An AI-powered design skill that provides design intelligence for building professional UI/UX across web and mobile platforms.

Based on [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill).

---

## When to Apply

Use this skill when the task involves **UI structure, visual design, interaction patterns, or UX quality**.

### Must Use

- Designing new pages (Landing Page, Dashboard, Admin, SaaS, Mobile App)
- Creating or refactoring UI components (buttons, modals, forms, tables, charts)
- Choosing color schemes, typography, spacing, or layout systems
- Reviewing UI code for UX, accessibility, or visual consistency
- Implementing navigation, animations, or responsive behavior
- Making product-level design decisions (style, hierarchy, branding)

### Skip

- Pure backend logic, API/database design
- Infrastructure or DevOps work
- Non-visual scripts or automation

**Rule of thumb**: If the task changes how something **looks, feels, moves, or is interacted with**, apply this skill.

---

## Workflow

### Step 1: Analyze Requirements

Extract from the user request:

- **Product type**: SaaS, e-commerce, portfolio, healthcare, fintech, beauty/spa, etc. (161 categories supported)
- **Target audience**: Consumer, B2B, age group, usage context
- **Style keywords**: minimal, dark mode, glassmorphism, brutalism, playful, premium, etc.
- **Tech stack**: React, Next.js, Vue, Nuxt, Svelte, Astro, Angular, Laravel, SwiftUI, React Native, Flutter, HTML+Tailwind, shadcn/ui, Jetpack Compose

### Step 2: Generate Design System

For every new UI task, generate a complete design system before writing code. Include:

1. **Pattern** — Page structure (Hero-Centric, Feature-Grid, Social Proof, etc.)
2. **Style** — Visual language (from 67 available styles)
3. **Colors** — Industry-appropriate palette (Primary, Secondary, CTA, Background, Text)
4. **Typography** — Font pairing with mood and Google Fonts import
5. **Key Effects** — Animations, shadows, transitions
6. **Anti-Patterns** — What NOT to do for this industry/product

#### Design System Decision Rules

| Product Category | Recommended Pattern | Style Priority | Anti-Patterns |
|---|---|---|---|
| SaaS / B2B | Feature-Grid + Social Proof | Clean, Minimal, Professional | Overly playful, neon colors |
| Fintech / Banking | Trust-First + Security Signals | Corporate, Structured | AI purple/pink gradients, casual fonts |
| Healthcare / Medical | Calm + Accessibility-First | Clean, Soft UI | Dark themes, aggressive CTAs |
| E-commerce | Product-Hero + Urgency | Bold, Conversion-Focused | Cluttered layouts, slow animations |
| Beauty / Spa / Wellness | Hero-Centric + Social Proof | Soft UI, Elegant | Bright neon, harsh animations, dark mode |
| Portfolio / Agency | Visual-First + Case Studies | Creative, Editorial | Generic templates, stock imagery |
| Restaurant / Food | Menu-First + Ambiance | Warm, Appetizing | Cold corporate styles |
| Gaming / Entertainment | Immersive + Community | Dark, Vibrant, Bold | Corporate minimal, muted palettes |
| Education / LMS | Content-First + Progress | Friendly, Structured | Complex navigation, dense layouts |
| Real Estate | Property-Hero + Map | Premium, Clean | Cluttered listings, small images |

### Step 3: Implement with Stack Best Practices

Apply stack-specific guidelines:

| Stack | Key Considerations |
|---|---|
| HTML + Tailwind | Utility-first classes, responsive breakpoints, `@apply` for repeated patterns |
| React / Next.js | Component composition, React.memo for lists, Suspense boundaries, CSS modules or Tailwind |
| Vue / Nuxt | Composition API, auto-imports, `<Teleport>` for modals |
| shadcn/ui | Use provided primitives, extend with Tailwind, follow Radix patterns |
| Angular | Angular Material or CDK, OnPush change detection, standalone components |
| Laravel | Blade components, Livewire for reactivity, Inertia.js for SPA |
| Svelte | Scoped styles, `use:` directives, transitions API |
| Astro | Islands architecture, partial hydration, View Transitions |
| SwiftUI | Native modifiers, `@State`/`@Binding`, SF Symbols, Dynamic Type |
| React Native | Pressable for touch, FlatList for lists, safe area handling, platform-specific code |
| Flutter | Material 3 widgets, theme extensions, `const` constructors, slivers for scrolling |
| Jetpack Compose | Material 3, remember/derivedStateOf, LazyColumn, theme tokens |

### Step 4: Pre-Delivery Validation

Run through the checklist in Section "Pre-Delivery Checklist" below before delivering any UI code.

---

## Quick Reference: UX Rules by Priority

### 1. Accessibility (CRITICAL)

- **color-contrast** — Minimum 4.5:1 for normal text, 3:1 for large text
- **focus-states** — Visible focus rings (2–4px) on all interactive elements
- **alt-text** — Descriptive alt text for meaningful images
- **aria-labels** — `aria-label` for icon-only buttons; `accessibilityLabel` in native
- **keyboard-nav** — Tab order matches visual order; full keyboard support
- **heading-hierarchy** — Sequential h1→h6, no level skip
- **color-not-only** — Don't convey info by color alone (add icon/text)
- **reduced-motion** — Respect `prefers-reduced-motion`; reduce/disable animations
- **skip-links** — "Skip to main content" for keyboard users
- **dynamic-type** — Support system text scaling; avoid truncation as text grows

### 2. Touch & Interaction (CRITICAL)

- **touch-target-size** — Min 44×44pt (iOS) / 48×48dp (Android)
- **touch-spacing** — Minimum 8px gap between touch targets
- **hover-vs-tap** — Use click/tap for primary actions; never rely on hover alone
- **loading-buttons** — Disable button during async; show spinner/progress
- **cursor-pointer** — Add `cursor: pointer` to all clickable elements (Web)
- **tap-delay** — Use `touch-action: manipulation` to reduce 300ms delay
- **haptic-feedback** — Use haptics for confirmations; avoid overuse
- **safe-area-awareness** — Keep targets away from notch, Dynamic Island, gesture bar

### 3. Performance (HIGH)

- **image-optimization** — WebP/AVIF, responsive `srcset`, lazy load non-critical
- **image-dimension** — Declare width/height or `aspect-ratio` to prevent CLS
- **font-loading** — Use `font-display: swap/optional`; preload critical fonts only
- **lazy-loading** — Lazy load non-hero components via dynamic import / route splitting
- **virtualize-lists** — Virtualize lists with 50+ items
- **progressive-loading** — Skeleton screens instead of spinners for >1s operations
- **debounce-throttle** — Debounce/throttle high-frequency events (scroll, resize, input)
- **main-thread-budget** — Keep per-frame work under ~16ms for 60fps

### 4. Style Selection (HIGH)

- **style-match** — Match style to product type using the Design System table
- **consistency** — Same style across all pages
- **no-emoji-icons** — Use SVG icons (Heroicons, Lucide, Phosphor), never emojis
- **platform-adaptive** — Respect platform idioms (iOS HIG vs Material Design)
- **dark-mode-pairing** — Design light/dark variants together
- **primary-action** — Each screen has only one primary CTA; others are visually subordinate

### 5. Layout & Responsive (HIGH)

- **viewport-meta** — `width=device-width, initial-scale=1` (never disable zoom)
- **mobile-first** — Design mobile-first, then scale up
- **breakpoint-consistency** — Systematic breakpoints: 375 / 768 / 1024 / 1440
- **readable-font-size** — Minimum 16px body text on mobile
- **horizontal-scroll** — No horizontal scroll on mobile
- **spacing-scale** — Use 4pt/8dp incremental spacing system
- **container-width** — Consistent max-width on desktop (max-w-6xl / 7xl)
- **z-index-management** — Define layered z-index scale (0 / 10 / 20 / 40 / 100 / 1000)

### 6. Typography & Color (MEDIUM)

- **line-height** — 1.5–1.75 for body text
- **line-length** — 65–75 characters per line
- **font-pairing** — Match heading/body font personalities
- **font-scale** — Consistent type scale (12, 14, 16, 18, 24, 32)
- **color-semantic** — Define semantic tokens (primary, secondary, error, surface)
- **color-dark-mode** — Dark mode uses desaturated/lighter tonal variants, not inverted
- **weight-hierarchy** — Bold headings (600–700), Regular body (400), Medium labels (500)
- **number-tabular** — Tabular figures for data columns, prices, timers

### 7. Animation (MEDIUM)

- **duration-timing** — 150–300ms for micro-interactions; complex ≤400ms; never >500ms
- **transform-performance** — Use `transform`/`opacity` only; avoid animating width/height
- **easing** — `ease-out` for entering, `ease-in` for exiting; never linear for UI
- **motion-meaning** — Every animation must express cause-effect, not decoration
- **spring-physics** — Prefer spring/physics-based curves for natural feel
- **exit-faster-than-enter** — Exit ~60–70% of enter duration
- **stagger-sequence** — Stagger list items by 30–50ms; avoid all-at-once
- **interruptible** — User gesture cancels in-progress animation immediately

### 8. Forms & Feedback (MEDIUM)

- **input-labels** — Visible label per input (never placeholder-only)
- **error-placement** — Show error below the related field
- **inline-validation** — Validate on blur, not on keystroke
- **required-indicators** — Mark required fields (asterisk)
- **empty-states** — Helpful message and action when no content
- **confirmation-dialogs** — Confirm before destructive actions
- **progressive-disclosure** — Reveal complex options progressively
- **error-clarity** — Error messages state cause + how to fix

### 9. Navigation (HIGH)

- **bottom-nav-limit** — Max 5 items with labels + icons
- **back-behavior** — Predictable, consistent; preserve scroll/state
- **deep-linking** — All key screens reachable via URL/deep link
- **nav-state-active** — Current location visually highlighted
- **modal-escape** — Clear close/dismiss affordance; swipe-down on mobile
- **adaptive-navigation** — Large screens: sidebar; small screens: bottom/top nav
- **state-preservation** — Navigating back restores scroll, filters, input

### 10. Charts & Data (LOW)

- **chart-type** — Match chart to data (trend→line, comparison→bar, proportion→pie)
- **color-guidance** — Accessible palettes; avoid red/green only
- **legend-visible** — Always show legend near the chart
- **tooltip-on-interact** — Tooltips on hover (web) or tap (mobile)
- **responsive-chart** — Reflow or simplify on small screens
- **no-pie-overuse** — Avoid pie/donut for >5 categories; use bar chart

---

## Common Rules for Professional UI

### Icons & Visual Elements

| Rule | Do | Avoid |
|---|---|---|
| No emoji as icons | SVG icons (Phosphor, Heroicons, Lucide) | Emojis (🎨 🚀 ⚙️) for nav/settings/controls |
| Consistent icon sizing | Design tokens (icon-sm, icon-md=24pt, icon-lg) | Random sizes (20/24/28pt mixed) |
| Stroke consistency | Same stroke width within visual layer | Mixing thick and thin arbitrarily |
| Filled vs outline | One icon style per hierarchy level | Mixing filled and outline at same level |
| Touch target | Min 44×44pt interactive area (use hitSlop) | Small icons without expanded tap area |

### Interaction

| Rule | Do | Avoid |
|---|---|---|
| Tap feedback | Pressed feedback (ripple/opacity/elevation) within 80–150ms | No visual response on tap |
| Animation timing | 150–300ms with platform-native easing | Instant transitions or >500ms |
| Disabled states | Reduced opacity (0.38–0.5) + cursor change + semantic attr | Controls that look tappable but do nothing |
| Gesture conflict | One primary gesture per region | Overlapping gestures causing accidents |

### Light/Dark Mode

| Rule | Do | Avoid |
|---|---|---|
| Text contrast (light) | Body text ≥4.5:1 against light surfaces | Low-contrast gray body text |
| Text contrast (dark) | Primary ≥4.5:1, secondary ≥3:1 on dark surfaces | Text blending into background |
| Token-driven theming | Semantic color tokens mapped per theme | Hardcoded per-screen hex values |
| Scrim legibility | Modal scrim 40–60% black | Weak scrim leaving background competing |

### Layout & Spacing

| Rule | Do | Avoid |
|---|---|---|
| Safe-area compliance | Respect top/bottom safe areas for fixed elements | UI under notch, status bar, gesture area |
| 8dp spacing rhythm | Consistent 4/8dp system for padding/gaps | Random spacing with no rhythm |
| Readable text measure | Reasonable max-width on large devices | Edge-to-edge paragraphs on tablets |
| Scroll coexistence | Bottom/top insets so lists clear fixed bars | Content obscured by sticky headers/footers |

---

## Pre-Delivery Checklist

Before delivering UI code, verify every item:

### Visual Quality
- [ ] No emojis used as icons — all icons are SVG from a consistent family
- [ ] Official brand assets used with correct proportions
- [ ] Pressed states don't shift layout bounds or cause jitter
- [ ] Semantic theme tokens used consistently (no hardcoded hex)

### Interaction
- [ ] All tappable elements have pressed feedback (ripple/opacity/elevation)
- [ ] Touch targets ≥44×44pt (iOS) / ≥48×48dp (Android)
- [ ] Micro-interactions 150–300ms with native easing
- [ ] Disabled states are visually clear and non-interactive
- [ ] Screen reader focus order matches visual order
- [ ] No gesture conflicts (tap/drag/back-swipe)

### Contrast & Theming
- [ ] Primary text contrast ≥4.5:1 in both light and dark mode
- [ ] Secondary text contrast ≥3:1 in both modes
- [ ] Borders/dividers visible in both modes
- [ ] Modal scrim opacity sufficient (40–60% black)
- [ ] Both themes tested (not inferred from one)

### Layout
- [ ] Safe areas respected for headers, tab bars, bottom CTAs
- [ ] Scroll content not hidden behind fixed/sticky bars
- [ ] Verified on small phone, large phone, tablet (portrait + landscape)
- [ ] Horizontal gutters adapt by device size
- [ ] 4/8dp spacing rhythm maintained
- [ ] Long text readable on large devices

### Accessibility
- [ ] All meaningful images/icons have accessibility labels
- [ ] Form fields have labels, hints, and clear error messages
- [ ] Color is not the sole indicator of state
- [ ] `prefers-reduced-motion` respected without layout breakage
- [ ] Dynamic text size supported

### Responsive
- [ ] Tested at 375px, 768px, 1024px, 1440px
- [ ] `cursor: pointer` on all clickable elements (web)
- [ ] Hover states with smooth transitions (150–300ms)
- [ ] Light mode text contrast ≥4.5:1
- [ ] Focus states visible for keyboard navigation

---

## Example Prompts

```
Build a landing page for my SaaS product
Create a dashboard for healthcare analytics
Design a portfolio website with dark mode
Make a mobile app UI for e-commerce with React Native
Build a fintech banking app with dark theme
Review this page for UX issues and accessibility
```
