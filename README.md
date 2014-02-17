# Operation Frontend Steward

*Update [2014-02-16] — Many (but not all) of the artifacts produced for Operation Frontend Steward have been migrated into this repo. We are working directly with Magento 2's product teams to ensure these concerns are addressed within the product. We are preparing a survey for partners and independent developers to provide feedback to Magento on each issue. Please read through the articles and we'll let you know when the survey is ready.*

---

### Operation Frontend Steward is a four-pronged offense to improve Magento 2's frontend

1. Define strategic overarching principles Magento 2's frontend needs to uphold (think "10 commandments").
1. Create public documentation of frontend patterns used in Magento 2.
1. Refactor outdated, ignored, and abused frontend code with standardized, lean, extensible, and future-friendly code.
1. Propose frontend architectural changes outside the Hackaton's scope to modernize Magento 2.

---

## Table of Contents

### [Project Charter](https://github.com/magento-hackathon/operation-frontend-steward/tree/master/charter) — The Origin Story

1. [Why it matters](https://github.com/magento-hackathon/operation-frontend-steward/blob/master/charter/README.md#why-it-matters)
1. [Proposed schedule of events](https://github.com/magento-hackathon/operation-frontend-steward/blob/master/charter/README.md#proposed-schedule-of-events)
1. [This project's audience](https://github.com/magento-hackathon/operation-frontend-steward/blob/master/charter/README.md#this-projects-audience)
1. [Out of scope](https://github.com/magento-hackathon/operation-frontend-steward/blob/master/charter/README.md#out-of-scope)
1. [Project info](https://github.com/magento-hackathon/operation-frontend-steward/blob/master/charter/README.md#project-info)

### [Principles](https://github.com/magento-hackathon/operation-frontend-steward/tree/master/principles) — Overarching Frontend Goals

1. [The perfect CMS does not constrain or coerce its frontend output](https://github.com/magento-hackathon/operation-frontend-steward/blob/master/principles/README.md#1-the-perfect-cms-does-not-constrain-or-coerce-its-frontend-output)
1. [The core frontend package cannot be Magento's demo](https://github.com/magento-hackathon/operation-frontend-steward/blob/master/principles/README.md#2-the-core-frontend-package-cannot-be-magentos-demo)
1. [Invest in Magento's frontend patterns. Stay lean and framework agnostic](https://github.com/magento-hackathon/operation-frontend-steward/blob/master/principles/README.md#3-invest-in-magentos-frontend-patterns-stay-lean-and-framework-agnostic)
1. [Treat frontend performance as the bottleneck it is compared to backend performance](https://github.com/magento-hackathon/operation-frontend-steward/blob/master/principles/README.md#4-treat-frontend-performance-as-the-bottleneck-it-is-compared-to-backend-performance)
1. [Use tools to evaluate and test frontend code quality](https://github.com/magento-hackathon/operation-frontend-steward/blob/master/principles/README.md#5-use-tools-to-evaluate-and-test-frontend-code-quality)
1. [Decouple HTML, CSS and JS from PHP classes](https://github.com/magento-hackathon/operation-frontend-steward/blob/master/principles/README.md#6-decouple-html-css-and-js-from-php-classes)
1. [Decouple visual (CSS) layer from the functional (JavaScript) layer](https://github.com/magento-hackathon/operation-frontend-steward/blob/master/principles/README.md#7-decouple-visual-css-layer-from-the-functional-javascript-layer)
1. [Decouple functional (JavaScript) layer from the markup (HTML)](https://github.com/magento-hackathon/operation-frontend-steward/blob/master/principles/README.md#8-decouple-functional-javascript-layer-from-the-markup-html)

### [Proposals](https://github.com/magento-hackathon/operation-frontend-steward/tree/master/proposals) — Major Technical Shifts Needed in Magento 2

1. [Mobile First](01-mobile-first.md) — Adopt a mobile-first methodology across the design system.
1. [Atomic Templates](02-atomic-templates.md) — Write templates atomically to contain the smallest possible output.
1. [DRY Principles](03-dry-principles.md) — Embrace DRY (Don't Repeat Yourself) principles consistently.
1. [Checkout UX](04-checkout-ux.md) — Use (Woven Checkout) not (Accordion + Sidebar) for OnePageCheckout.
1. [CSS Architecture](05-css-architecture.md) — Write HTML classes for (OO-CSS) not (chained-classes CSS).
1. [CSS Pre-Processors](06-css-pre-processors.md) — Use (Sass + Compass) not (LESS) for CSS pre-processing.
1. [JavaScript Architecture](07-javascript-architecture.md)
Use (RequireJS) or (Browserify) not (HeadJS) for JS loading architecture.
1. [Responsive Images](08-responsive-images.md) — Use (PictureFill) and plan for the technology to change.
1. [Retina Icons](09-retina-icons.md) — Use (SVG Sprites + PNG Fallback) or (Retina PNG Sprites) not (Icon Fonts) for icons.
1. [Comments](10-comments.md) — Write comments in code, and sign comments as Magento.

### [Issues](https://github.com/magento-hackathon/operation-frontend-steward/tree/master/issues) — Specific Code-Level Problems in Magento 2

See: https://docs.google.com/spreadsheet/ccc?key=0AgkHIW0ExJHqdGFydXNoQnNFR010MUx3V3V1S1dIbmc

### [Patterns](https://github.com/magento-hackathon/operation-frontend-steward/tree/master/patterns) — UI Components and Markup States in Magento 2

### [Code Style](https://github.com/magento-hackathon/operation-frontend-steward/tree/master/code-style) — Frontend Coding Styleguide for Magento 2

---

## Contributors

This resource was entirely community-driven, and was created during (and after) the January 2014 Magento Hackathon: http://www.mage-hackathon.de/passed/online-hackathon-worldwide-31st-jan-1st-feb.html

* David Alger @ http://www.classyllama.com
* Kris Brown @ http://www.briteskies.com
* Brendan Falkowski @ http://gravitydept.com (Project Lead)
* Erik Hansen @ http://www.classyllama.com
* Tom Robertshaw @ https://www.meanbee.com
* Kimberely Thomas @ http://www.redlightblinking.com