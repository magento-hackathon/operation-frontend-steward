# Checkout UX

## Use (Woven Checkout) not (Accordion + Sidebar) for OnePageCheckout.

Magento’s OPC splits the interaction into two components:

* Accordion of checkout steps
* Progress sidebar

As this structure is heavily tied to JS behavior, changing it requires accepting a significant maintenance burden and introduces conflicts with third-party code.

Redesigning OPC from a mobile-first perspective presents a better solution: woven checkout. As each OPC step is completed its form is collapsed and replaced by the progress summary for that step. This is ideal for multiple reasons:

1. **Natural Hierarchy** — the editing interface erodes as the progress interface expands. It’s a logical tide exchanging input for feedback.
1. **Proximity** — there’s no interface gap between input, reviewing, and editing. For each step, all the interaction modes occupy the same physical space. This connectedness makes the interface more intuitive and consistent.
1. **Device Friendly** — Scales up from mobile to desktop without drastic layout transformations.

In Magento 1.8 / 1.13 the OPC progress sidebar was rewritten to pull each progress state from a separate AJAX request. It should be possible to implement woven checkout without significantly re-architecting OPC.

The pattern should be adopted in the core because third-parties building checkout extensions need to have a standard to build to.

#### References

* https://speakerdeck.com/brendanfalkowski/responsive-ecommerce-part-two?slide=187