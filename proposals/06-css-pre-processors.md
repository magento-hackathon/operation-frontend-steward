# CSS Pre-Processors

## Use (Sass + Compass) not (LESS) for CSS pre-processing

Using a CSS pre-processors is necessary in modern frontend development. While there are a plethora of CSS pre-processors on the market, Sass and LESS are the two that have risen to the top.

In fact, Sass and LESS are more alike than different. They both do almost everything you need:

* Partials – Modularize your source files.
* Variables – Store and apply values.
* Mixins – Classes for classes.
* Parametric Mixins – Classes to which you can pass parameters, like functions.
* Nested Rules – Classes within classes, which cut down on repetitive code.
* Operations – Math within CSS.
* Color Functions – Edit your colors.
* Namespaces – Groups of styles that can be called by references.
* Scope – Make local changes to styles.
* Programmatic evaluation – Complex expressions evaluated in CSS.
* Source Maps – See the partial/line in browser developer tools

In Magento 2, the ```magento_plushe``` theme currently uses LESS, which is an inferior CSS pre-processor to Sass. Reasons why Sass is a better choice for Magento 

### Why people choose LESS

#### A. LESS is easier to install

Simply add a JS file and any site can render LESS client-side. Of course, this is not pre-processing and even LESS doesn’t recommend this practice anymore, but the low barrier helped the project gain significant traction.

By contrast, Sass was born in Rails’ asset pipeline and compiles with Ruby. In the early days, you had to install Ruby to use Sass which many frontend people were not comfortable doing.

Today, both Sass and LESS can be compiled from the command-line, task runners like http://gruntjs.com/ or http://gulpjs.com/, or GUI applications like http://incident57.com/codekit/ or http://mhs.github.io/scout-app/.

#### B. Bootstrap uses LESS

Bootstrap is a very popular frontend framework that has helped LESS gain in popularity over the past couple of years. Many look to Bootstrap as a “best practice", but it has historically reversed course significantly on every major architectural decision:

* Began fixed width ➔ rewritten responsive in v2
* Responsiveness was implemented desktop-first ➔ rewritten mobile-first in v3
* Long-time LESS-only ➔ now officially supports Sass https://github.com/twbs/bootstrap-sass 

Outside the “I only use Bootstrap" camp there is significantly more advocation for Sass. The Bootstrap project has recognized this and now also officially supports Sass as of Bootstrap 3.1.

Said another way: Bootstrap is the only major frontend framework that still supports LESS. 

### Why Sass Is Better

90% of what Sass and Less do is comparable, but Sass ultimately does a better job in the details. These differences are not obvious with light usage or skimming the project pages, but make a significant difference in real-world development.

#### A. Sass has Compass

Compass is robust mixin library for Sass that offers CSS3 mixins, Helpers, and Sprite generators. While LESS has a number of mixin libraries, they don’t rival the robustness of Compass.

#### B. Sass has full programming logic available

If you need to write a complex mixin with multiple arguments and conditional output, Sass can do that in a construct very similar to every other scripting language. LESS has a basic looping construct, but lacks the oomph and robustness to write mixins that are truly concise to use.

#### C. Sass has the best open-source mixins

The Sass + Compass community produce more and better tested helper tools than LESS. There's [Susy](http://susy.oddbird.net/) for grids, [Breakpoint](http://breakpoint-sass.com/) for media queries, and dozens more catalogued at: http://www.sache.in/

#### D. Sass has can perform image processing via Ruby

This crucially enables Compass to perform sprite generation and image asset optimization. Since LESS compiles CSS using JS there is no comparable functionality. From a workflow perspective, this is killer. Managing sprites and multiple retina assets by hand is near impossible to do reliably and quickly on complex sites. Sass makes this dead simple.

#### E. Sass has multiple output modes

Having multiple output modes with source map support make development and debugging easier. Until two months ago LESS did not support source maps and it can only output minified or un-minified CSS. This can make it harder for new developers to get used to debugging their output.

### Who uses Sass with Magento?

Sass is already being used by a number of Magento partners (Blue Acorn, Classy Llama, Gravity Department, etc) and is critical to some of the highest profile responsive work being done with Magento for Angry Birds, Skinny Ties, and GSI Commerce (now eBay Enterprise).
#### Further reading

* http://css-tricks.com/sass-vs-less/ 
* http://www.hongkiat.com/blog/sass-vs-less/
* http://lukebrooker.com/presentations/why-i-moved-from-less-to-sass/
