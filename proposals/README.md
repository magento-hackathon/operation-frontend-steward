# Proposed Changes in Magento 2’s Frontend Architecture

Magento 2’s frontend architecture is a combination of new practices and those carried from Magento 1.x. Parts of this frontend architecture / design system are harmful to the present and future needs of Magento’s partners and customers.

This document proposes major architectural changes that Magento must consider to be competitive today, and most importantly extensible for the future.

These are not trivial corrections. Evaluating and adopting these practices requires not only deep understanding of the subject matter, but commitment from Magento’s leadership to prioritize modernizing the frontend.

1. Adopt a mobile-first methodology across the design system.
1. Use component-driven templates to contain the smallest possible output.
1. Embrace DRY (Don't-Repeat-Yourself) principles consistently
1. Write HTML classes for (OO-CSS) not (chained-classes CSS).
1. Use (Woven Checkout) not (Accordion + Sidebar) for OnePageCheckout.
1. Use (SVG Sprites + PNG Fallback) or (Retina PNG Sprites) not (Icon Fonts) for graphical icons.
1. Use (Sass + Compass) not (LESS) for CSS pre-processing.
1. Use (RequireJS) or (Browserify) not (HeadJS) for JS loading architecture.
1. Responsive images strategy.
1. Write comments in code, and sign comments as Magento.