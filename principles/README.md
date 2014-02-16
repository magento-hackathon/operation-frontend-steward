# Principles and Standards in Magento 2's Frontend Architecture

Principles and standards are necessary to establish and maintain frontend quality in Magento 2. The lack of documentation in Magento 1.x contributed to significant variability between implementations, and constant collisions between extensions and customizations.

A top-down approach is not good enough. It is critical that Magento observes the community's experience and uses it to **define, adopt, strictly conform to, and promote** a set of frontend principles / standards.

This precedent cannot only exist in code. Magento must demonstrate how/why these principles are applied through documentation, examples, and written dialog.

This document defines what the community thinks Magento 2's frontend architecture needs to serve. There are no technical recommendations here, these are high-level goals (more “why” than “how”). These principles ensure the technical underpinnings can adapt to diverse implementation requirements and be future-friendly.

---

## 1. The perfect CMS does not constrain or coerce its frontend output.

The core frontend package must be output-agnostic. Magento must not prescribe specific visual, layout, interactive, information architecture, or content paradigms in the frontend.

This is significantly more critical for Magento’s frontend than backend. Whereas retailers appreciate and benefit from a very standardized backend, their frontend must be wholly unique to differentiate them and afford competitive advantages.

**Magento must adopt frontend output neutrality as the ultimate goal.** It must build the underlying platform, which gives implementers and retailers the freedom to meet their unique needs.

---

## 2. The core frontend package cannot be Magento's demo.

In Magento 1.x, the “base/default” package (which all themes inherited) was not neutral. There are specific frontend decisions in its code which only served Magento’s “demo” themes.

Overriding demo-slanted practices is repetitively annoying, wastes resources better applied elsewhere, and increases cost of ownership. Magento 2’s theming architecture provides for more explicit separation of the core package and theme assets, but Magento cannot passively achieve this goal.

Magento must consciously resist bending the core frontend to serve demoing Magento 2. Failing to do this weakens the whole platform, and puts the need of Magento’s demo above every customer.

**Magento must implement its demos as strictly separate themes** just as implementers do, and work to refactor the core frontend away from demo-slanted decisions.

---

## 3. Invest in Magento's frontend patterns. Stay lean and framework agnostic.

Using any off-the-shelf frontend framework is going to be a misstep. Magento needs to expand upon and document the patterns/practices it already uses rather than adopting an external framework.

Not being framework agnostic has the following consequences:

**Immediate Issues** — Binding frameworks like Bootstrap or Foundation to Magento would prescribe so much that the entire frontend would need to be rewritten for their implementation to be useful. That would both swamp the Magento 2 timeline, and entrench too much to any third-party.

**Short-term Issues** — Bootstrap (v3) and Foundation (v5) have both undergone sweeping major revisions in the space of a few years. They move significantly faster than Magento can. This virtually guarantees that by the time any external framework is implemented it will be outdated. Then Magento would be committed to it for a decade because forcing the deep framework changes on existing implementations alongside core updates will not be accepted.

**Long-term issues** — When a framework falls completely out of use, it becomes dead weight when you have to implement something else on top of it. This is exactly what happened with Prototype and jQuery in Magento 1.x The crux of modern multi-device frontend development is that it's better to be lean than thick.

#### Build Magento's Patterns

The reason frontend frameworks are good isn't solely because of their patterns, it is mainly because of the deep and robust documentation. This is what helps new developers become effective with the system quickly. Magento has tons of frontend patterns, but zero frontend documentation.

Frameworks do make it easier for companies to hire developers because of widespread familiarity, but this benefit is rooted in having clear, accessible documentation.

You can always cherry-pick specific components from third-party frameworks (they're designed for that) but replacing the frontend architecture with Bootstrap is a lot more involved than documenting the long-standing Magento patterns, which are already a good start.

Magento must document how/why/where its patterns are implemented in the core frontend, so new developers don't require the exposure of several projects before noticing the patterns exist. In doing this, Magento’s thinking about its frontend architecture will shift from themes/pages to patterns/components. This ideological change is what makes a frontend framework strengthen rapidly.

#### Further Reading

* https://github.com/magento/magento2/issues/457
* https://github.com/magento/magento2/issues/347
* https://speakerdeck.com/brendanfalkowski/responsive-ecommerce-part-two?slide=114 
* http://daverupert.com/2013/04/responsive-deliverables/ 

---

## 4. Treat frontend performance as the bottleneck it is compared to backend performance.

Performance optimization in Magento 1.x was focused on backend improvements only. Scalability, concurrency, and read/write speeds are important for delivering highly accessible web applications, but they are not what makes websites slow for users.

From the Alexa top 50,000 sites just 13% of page load time was on the backend. 87% of load time is on the frontend. Put that into concrete terms for site taking 10 seconds to load:

* 10% backend improvement = 0.13 seconds faster load
* 10% frontend improvement = 0.87 seconds faster load
* Frontend improvements have 6.7x more impact on every page load

**Magento must prioritize projects that improve frontend performance.** Performance is a design constraint, and a bad frontend undermines the perfect backend. There are dozens of small, simple tweaks with measurable performance gains. The biggest violators today are JavaScript architecture and images.

#### Further Reading

* https://speakerdeck.com/brendanfalkowski/responsive-ecommerce-part-two?slide=65 

---

## 5. Use tools to evaluate and test frontend code quality.

#### HTML 

HTML must pass the W3C Markup Validator: http://validator.w3.org/ 

Every frontend-accessible URL in Magento including markup after DOM manipulations must pass the validator using an HTML5 doctype. Many older browser’s support of web standards degrades significantly if a markup error forces the browser’s rendering engine into “quirks mode”. The importance of producing valid, consistent markup is not debatable.

#### HTML5 Document Outlining

Although a constantly moving target, since it spans the entire core frontend package, Magento must deeply understand and consider how the HTML5 Document Outlining algorithm impacts the frontend architecture:  http://html5doctor.com/outlines/ 

#### JavaScript 

JavaScript must pass the JSHint: http://jshint.com/about/ 

JSHint is a static code analysis tool (not functional or unit tests). It’s purpose is to detect errors and potential problems in JavaScript code and to enforce your team's coding conventions. It is not a substitute for code reviews or other testing, but it can significantly improve debugging time and code quality.

#### CSS 

CSS evaluation should not be a primary concern of Magento’s for several reasons:

1. Conforming to CSS’ syntax is trivial compared to most programming languages.
1. The breadth of vendor prefixes used today will not validate against the official CSS specification.
1. Use of CSS pre-processors means that authored CSS is very different than output CSS, and compilation processes have built-in quality tools.

Most importantly, CSS is always the implementation’s domain and not the core frontend. Highly customized implementations in Magento 1.x will not re-use any of the core CSS. Especially in responsive implementations, the developer’s hand is what determines nearly all CSS quality, in which case tools like CSSLint are useful for evaluation: http://csslint.net/ 

---

## 6. Decouple HTML, CSS and JS from PHP classes.

TBD

---

## 7. Decouple visual (CSS) layer from the functional (JavaScript) layer.

TBD

---

## 8. Decouple functional (JavaScript) layer from the markup (HTML).

TBD