# JavaScript Architecture

## Use (RequireJS) or (Browserify) not (HeadJS) for JS loading architecture

Magento 1.x has significant performance constraints because of its JavaScript architecture. This bottleneck causes the majority of perceived poor performance from the frontend. The problem is deep:

1. Magento loads all scripts in the ```<head>```, which is blocking — meaning the page cannot begin rendering until all scripts are loaded and executed.
1. Concurrent connections are limited per domain, so there is a limit to how many assets defined inline can be downloaded in parallel.
1. Libraries were chosen as core dependencies which are bloated relative to their actual utilization with Magento. Example: all scriptaculous libraries.
1. Templates are riddled with inline JS, which require libraries execute beforehand.
1. The minification/concatenation process does not bundle intelligently. Example: adding a single script to a page requires all JS on the page to be re-downloaded. The more than triples the bandwidth need to complete a 5-page purchase path.
1. Bundled JS is too large to be cached on older and low-end devices, so it must be re-downloaded regardless.

The best approach in Magento 1.x is minifying all JS and serving each file individually. This allows the browser to cache it, but the first page load has a high HTTP request burden which can be excessive on a high-latency connection. Still this approach outperforms concatenation.

In Magento 2, Prototype has been replaced with jQuery and the script loader HeadJS has been implemented. This is an improvement in that only one script is loaded in the <head> and the rest asynchronously, but it allows the continued obsolete practice of inlining JS throughout PHTML templates. HeadJS has recently veered into Modernizr’s territory providing browser feature tests and rudimentary media query helpers. On the surface this seems relevant, but this violates the single responsibility principle. There are more powerful individual tools which can be assembled leaner than using a jack-of-all-trades plugin.

Magento needs a platform-wide restructuring of its JS architecture. Ideally it should meet these requirements:

* Develop all scripts in separate files or modules.
* Asset manager script thats load before the </body> ends.
* All scripts are loaded asynchronously.
* The loading order does not determine the execution order.
* Each script may be defined with dependencies, and will not execute until after dependencies are loaded.
* Fallback URIs are providable if a script’s host is inaccessible.
* Intelligent concatenation (or by configuration) for scripts that always load together or are loaded globally.
* Debug easily from a browser.

There are plenty of contenders in this space, but RequireJS is generally considered the most configurable and Browserify the best build tool for JS module management. Which is better depends on how opinionated the platform and diversity of build/deployment processes is. For Magento, RequireJS is a more natural fit because it runs in the browser and is very configuration heavy, which fits with how Magento uses XML for layout architecture.

#### Further Reading

* http://headjs.com/
* http://requirejs.org/
* http://bower.io/
* http://browserify.org/ 
* http://www.sitepoint.com/understanding-requirejs-for-effective-javascript-module-loading/ 
* http://blog.teamtreehouse.com/organize-your-code-with-requirejs 
* http://www.100percentjs.com/just-like-grunt-gulp-browserify-now/
* http://codeofrob.com/entries/why-i-stopped-using-amd.html 
* http://javascriptplayground.com/blog/2013/09/browserify/ 
* http://esa-matti.suuronen.org/blog/2013/03/22/journey-from-requirejs-to-browserify/ 