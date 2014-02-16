# Responsive Images

## Use (PictureFill) and plan for the technology to change.

Cloud Four has already written a fantastic summary of [what a responsive images solution needs](http://blog.cloudfour.com/8-guidelines-and-1-rule-for-responsive-images/) to accomplish today:

1. Use vector-based images or font icons whenever you can.
1. Encourage people to upload the highest quality source possible.
1. Provide an automatic image resizing and compression service.
1. Images can be resized to any size with URL parameters.
1. Provide automated output of your image markup.
1. Provide a way to override resized images for art direction needs.
1. Integrate image compression best practices.
1. Bonus: Detect support for WebP image format and use it.

The one and only rule for responsive images:

**Plan for the fact that whatever you implement will be deprecated.**

That last rule is critical to understand. Responsive images are not solvable today and nothing being used today is a long-term solution. We can get very close using plugins like PictureFill and the existing image resizing tools built into Magento though.

Magento should expand its image tools in the following ways:

1. Allow every single image asset in the system (product images, CMS images, category images, category thumbnails) to be processed with output filters.
1. Every output filter (dimensions, ratio, fill or stretch to dimensions, compression, file type) must be available to every asset via a class or URL parameters.
1. Create a global “responsive image markup” template and method, which accepts an object of data and parameters. By simply passing in the characteristics, implementors can then globally change the template output as more browser-based responsive images technologies become available, while the data objects stay intact.

Coupled with the Cloud Four recommendations, Magento could facilitate a very robust image output solution based on the tools it already has.

#### Further Reading

* http://blog.cloudfour.com/8-guidelines-and-1-rule-for-responsive-images/ 
* https://github.com/scottjehl/picturefill
* https://speakerdeck.com/brendanfalkowski/responsive-ecommerce-part-two?slide=114