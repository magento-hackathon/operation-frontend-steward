# Project Charter

Operation Frontend Steward is a four-pronged offense to improve Magento 2's frontend:

1. Define strategic overarching principles Magento 2's frontend needs to uphold (think "10 commandments").
1. Create public documentation of frontend patterns used in Magento 2.
1. Refactor outdated, ignored, and abused frontend code with standardized, lean, extensible, and future-friendly code.
1. Propose frontend architectural changes outside the Hackaton's scope to modernize Magento 2.

## Why it matters

This project is necessary because Magento's development is to this day dominated by backend engineering. This is observable in the neglect of modernizing Magento 1's frontend between 2009–2014, and the lateral-at-best frontend changes to date in Magento 2. With responsive design eating other mobile / multi-device strategies, the role of a highly engineered frontend codebase has never been more critcal.

What are the odds of a product rebuilt from the group up but designed desktop-first in 2014 surviving another 5 years? Take your bets.

## Proposed schedule of events

1. Make an inventory of all issues, idiosyncrasies, gotchas, obsolete, redundant, overly prescribed, and good patterns in Magento's frontend.
1. Categorize all suggestions and prioritize them.
1. Split into three groups: documentors, refactorers, and strategizers to tackle the four objectives of Operation Frontend Steward.


## This project's audience

This project is concerned with any suggestions which enable interaction designers, UX designers, frontend developers, information architects, and content strategists to do the best work possible using Magento. Those people all serve users.

## Out of Scope

There are two things this project is not:

1. Building yet another theme. Magento does not need more themes, it needs a better core frontend. The core must not be slanted for Magento's demos but rather be the most neutral base for implementors.
1. Adding responsive design / mobile support. These are not "features". Doing them well **requires** consideration of the client's unique goals and constraints, and that is predicated on having an unobtrusive frontend core as a foundation. The cart goes after the horse.

I am wholeheartedly concerned with both these things, but today I think the best way Magento can handle them is by addressing the foundational changes necessary to make them more approachable for new developers and easier to maintain for complex implementations.

## Project Info

* Submitted by: Brendan Falkowski @ http://gravitydept.com
* Project URL: https://github.com/magento-hackathon/operation-frontend-steward
* Timezone: US Eastern (GMT -5)
