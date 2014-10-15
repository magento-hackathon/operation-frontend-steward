# Code Style

Teams writing code together must create standardized style guides and conventions, so personal styles do not clash. Consistency is not *hard* but it requires every developer's commitment.

This is especially critical for Magento because the product's code is primarily used externally and is frequently modified. Distributed software needs even higher standards not only for readability's sake, but because third-parties will mirror its quality or sloppiness.

Magento 2 is following PSR standards for PHP classes, which is modern and great. No such standard exists for frontend code. Browsers are designed to accept loosely defined HTML, CSS, and JavaScript for maximum interoperability. You can always do something 3 or 4 ways with varying trade-offs / benefits.

### Magento 1.x ignored the frontend

Magento 1.x did not set the bar high. Almost every template contains an inconsistency versus itself (let alone the whole codebase) which is pathetic. Virtually no refactoring was done during the 1.3 to 1.8 (current) lifecycle. In many cases frontend code was obviously written by backend developers lacking experience addressing frontend concerns: extensibility, re-usability, semantics, readability, and search optimization.

Frontend and backend programming are very different disciplines. You would not hire a frontend developer to write your database models or caching layer. Don't hire a backend developer to architect your design system's markup patterns.

### Magento 2.x needs comprehensive frontend standards

The Magento 2 wiki contains a few examples of coding practices, but they glance over fundamentals and are not comprehensive. Team members will not absorb each other's styles and self-align on a standard practice. Conventions must be discussed, documented, and enforced with code reviews.

The best resource Magento has for modern, real-world frontend practices is the development community. Magento's core team is "too close" to the code to see its flaws during implementations.

### First steps

Establishing standards and applying them is not a weekend project. [Gravity Department](http://gravitydept.com) has started documenting and iterating its frontend standards around Magento. This has helped immensely when collaborating with partner and client teams.

#### See: http://manuals.gravitydept.com

To date, there are no similar public resources in the Magento community. If you know of any, please share them.

Rather than re-typing these conventions verbatim, the relevant sections will be linked to.

#### HTML

* http://manuals.gravitydept.com/code/html/styleguide
* http://manuals.gravitydept.com/code/html/semantics
* http://manuals.gravitydept.com/code/html/conventions

#### CSS

* http://manuals.gravitydept.com/code/css/styleguide
* http://manuals.gravitydept.com/code/css/comments
* http://manuals.gravitydept.com/code/css/specificity

#### JavaScript

* http://manuals.gravitydept.com/code/js/styleguide

#### PHP

* http://manuals.gravitydept.com/code/php/styleguide
* http://manuals.gravitydept.com/code/php/comments
* http://manuals.gravitydept.com/code/php/templating

#### Magento Specifics

* http://manuals.gravitydept.com/platforms/magento/theme-fallback
* http://manuals.gravitydept.com/platforms/magento/phtml-templates
* http://manuals.gravitydept.com/platforms/magento/layout-xml
* http://manuals.gravitydept.com/platforms/magento/translation

#### Example code

This repo also contains two examples of refactored PHTML templates, which demonstrate the code-level changes being proposed.

See: https://github.com/magento-hackathon/operation-frontend-steward/tree/master/code-style/phtml

### Next steps

Ideally Magento will:

1. Adopt a community-driven perspective on which standards are valid and useful.
1. Refactor Magento 2 to remove inconsistencies and align it with standards.
1. Publicize documentation of its standards for implementors and third-parties.
