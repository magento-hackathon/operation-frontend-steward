# Pivots in Magento 2's Frontend Architecture

Magento 2's frontend architecture is a combination of new practices and those carried from Magento 1.x. Parts of this frontend architecture / design system are harmful to the present and future needs of Magento's partners and customers.

This document proposes major architectural changes that Magento must consider to be competitive today, and most importantly extensible for the future.

These are not trivial corrections. Evaluating and adopting these practices requires not only deep understanding of the subject matter, but commitment from Magento's leadership to prioritize modernizing the frontend.

## [1. Mobile First](01-mobile-first.md)
Adopt a mobile-first methodology across the design system.

## [2. Atomic Templates](02-atomic-templates.md)
Write templates atomically to contain the smallest possible output.

## [3. DRY Principles](03-dry-principles.md)
Embrace DRY (Don't Repeat Yourself) principles consistently.

## [4. Checkout UX](04-checkout-ux.md)
Use (Woven Checkout) not (Accordion + Sidebar) for OnePageCheckout.

## [5. CSS Architecture](05-css-architecture.md)
Write HTML classes for (OO-CSS) not (chained-classes CSS).

## [6. CSS Pre-Processors](06-css-pre-processors.md)
Use (Sass + Compass) not (LESS) for CSS pre-processing.

## [7. JavaScript Architecture](07-javascript-architecture.md)
Use (RequireJS) or (Browserify) not (HeadJS) for JS loading architecture.

## [8. Responsive Images](08-responsive-images.md)
Use (PictureFill) and plan for the technology to change.

## [9. Retina Icons](09-retina-icons.md)
Use (SVG Sprites + PNG Fallback) or (Retina PNG Sprites) not (Icon Fonts) for icons.

## [10. Comments](10-comments.md)
Write comments in code, and sign comments as Magento.