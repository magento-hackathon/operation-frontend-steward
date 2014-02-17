# Retina Icons

## Use (SVG Sprites + PNG Fallback) or (Retina PNG Sprites) not (Icon Fonts) for icons.

Icon Fonts are used heavily in Magento 2 to render what are traditionally image-based graphics with resolution independence.

At least 370 million people use (new and old) mobile browsers that don't support web fonts. Most methods for including icon fonts don't work with screen-readers or require specific markup patterns to be accessible. While it is possible to provide fallbacks and workarounds for unsupported browsers, the complicated history of this feature means many edge cases are still undetected.

There are equally performant solutions for serving graphical icons at multiple resolutions, and they have more consistent and predictable fallback mechanisms.

The most universal approach is generating PNG assets at multiple resolutions, and combining them into a sprite sheet which is served at the appropriate resolution using media queries. All browsers (modern + very old) can utilize this method without impacting performance. The only downside is the assets are not truly resolution independent.

Going one step further, for browsers that support SVG (modern browsers, IE9+, Android 3+) we can serve resolution independent SVGs and generation of PNGs as a fallback.

#### Further Reading

* http://filamentgroup.com/lab/bulletproof_icon_fonts/
* http://dbushell.com/2012/04/03/svg-use-it-already/ 
* http://filamentgroup.com/lab/grunticon/
* http://filamentgroup.com/lab/grumpicon_workflow/ 
* http://css-tricks.com/svg-fallbacks/
* http://toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script/ 