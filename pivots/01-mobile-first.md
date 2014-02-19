# Mobile First

## Adopt a mobile-first methodology across the design system.

The world is un-debatably multi-device. Magento cannot continue building a desktop-first product, and expect to be relevant several years from now.

Magento has historically missed expectations addressing the changing device landscape through a stripped down mobile-specific site and poorly constructed native app—neither of which provided a compelling enough small screen experience to gain traction.

Responsive design has overtaken mobile-specific sites and native apps, since it is the only truly multi-device strategy that retailers can adopt. It's advantages are numerous:

1. Consistent content, behavior, and branding throughout the user's journey regardless of what device they choose (not the technology provider).
1. With universal support of web technologies, responsive design is platform-agnostic. It doesn't matter if you use Apple, Android, Microsoft, Blackberry, Linux, Firefox OS, your car, or refrigerator. If connects to the internet, it will work.
1. Significantly lower development cost and timeline compared to building a comparable multi-device experience using other approaches.
1. Significantly lower cost of ownership due to a single codebase powering all device experiences.
1. Significantly more flexible and modern development workflow. No waiting for App Store approval. No synchronization or bureaucracy between web and mobile teams. Deploy once to all users at any time, and changes are effective immediately.

Mobile-first thinking needs to permeate every aspect of the frontend architecture:

1. Elements cannot be defined by their position on a large screen. The design language used in Magento 2 needs to be overhauled. Elements should be named based on priority and hierarchy according to the user's context and path journeying through the site.
1. Magento 2 features like the Visual Design Editor are designed specifically for a world with absolute layout control, which has eroded today. In a responsive site, you cannot drag/drop elements around the page and maintain a semblance of hierarchy and a usable interface. Interactions are carefully choreographed across breakpoints.
1. Likewise building in tools in the Visual Design Editor so users can change image sizes to fixed values is dated. Responsive implementations require fluid dimensions on all elements (not just images) to transform and adapt to best fit the device.

These are just a few points illustrating how the frontend work being done currently in Magento 2 does not match what developers or retailers need from the platform today or in the future.

**Further Reading**
* https://speakerdeck.com/brendanfalkowski/responsive-ecommerce-part-two
* https://speakerdeck.com/brendanfalkowski/responsive-design-panel-where-why-and-how 
* https://speakerdeck.com/brendanfalkowski/responsive-ecommerce-design-once-sell-everywhere 