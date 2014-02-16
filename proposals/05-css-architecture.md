# CSS Architecture

## Write HTML classes for (OO-CSS) not (chained-classes CSS).

The class naming pattern adopted in Magento 2 is not a modern or extensible practice.

Magento 2 has started requires all class names on HTML elements to consist of single-words, which are then chained in CSS selectors. The rationale is “Requires stronger architecture behind all visual styling. Enforces re-use of CSS classes instead of creating custom / unique CSS classes each time.”

See Magento 2 Wiki, Section A.1.2 https://wiki.magento.com/display/MAGE2DOC/Magento+Code+Demarcation+Standard

There are significant architectural issues with authoring classes and selectors this way in a complex design system:

1. Chaining classes is less performant. Rendering engines read selectors from right to left, so the renderer must consider applying any style matched to the “product” class to over half the elements in the markup. This rendering calculation must be completed before any dimensional calculation can take place, and that means that visually the page does not stop rendering until the operation is complete.

2. Using single-word class names to chain selectors increases likelihood of accidental collisions with other modules and especially third-party code. Example: many modules could use a selector like “.description” or “.name” because they are so broad / general. Even with specific scoping in other modules, and styles applied to that global selector will be inherited by all other uses of the class. This leads to more attribute than are necessary in scoped selectors to override the cascaded attributes. The result is harder to maintain, increased bloat, and lower extensibility. It is harmful to be excessively generic with class names.

3. Chaining classes in a selector rapidly increases the specificity of that selector. This makes variations on an element more difficult to override and contributes to specificity escalation killing the cascading nature of CSS:

* Classes are chained together to override a base class.
* Parent classes are added to override the chained class.
* Direct descendent selectors are added, which undesirably bind the selector to the markup structure.
* An ID is added to the selector to overpower all the chained and familial specificity.
* Finally, to override the ID it becomes necessary to use !important or inline styles.

That specificity war doesn’t need to start if the base classes are engineered to take advantage of CSS’ natural inheritance and cascade.

4. From a workflow perspective, it’s often necessary to find all uses of a particular class value within a project. With chained selectors having class values like “products list items”, you can search for “products list” but not “products items”. A better class value would be “products-list products-items” (although this is redundant) because it would allow you to search on either term. The classes “products” or “list” or “items” are too generic to search for globally within a project.

### Example (from Magento 2 markup)

The examples presented in the Magento 2 Wiki (A.1.2) do not accurately reflect how classes are used to build extensible design systems.

#### Example HTML from Magento 2

*File: /app/code/Magento/Catalog/view/frontend/product/list.phtml*

```php
<ol class=”products list items”>
    <li class=”item product”>
        <div class=”product photo”>...</div>

        <div class=”product details”>
            <div class=”product name”>...</div>

            <div class=”product description”>
                ...
                <a class="action more">Learn More</a>
            </div>

            <div class=”product actions”>
                <button class="action tocart">Add To Cart</button>
            </div>
        </div>
    </li>
</ol>
```

The following CSS selectors (with specificity) are the minimal chain possible to select each element without collisions between other modules based on the Magento 2 markup:

```
20 - .products.list {}
30 - .products.list .item {}
40 - .products.list .product.photo {}
40 - .products.list .product.details {}
40 - .products.list .product.name {}
40 - .products.list .product.description {}
60 - .products.list .product.description .action.more {}
40 - .products.list .product.actions {}
40 - .products.list .action.tocart {}
```

In this very simple example, additional flaws in chaining classes are obvious:

1. There is no distinction between classes which are used as block descriptors, element descriptors, or element modifiers. A well written class value should infer the appropriate CSS selector to minimally and uniquely identify that element set.

2. Element-named classes are so broad they will never have styling applied to them globally. This makes them redundant and only only serving to scope the content-based class name (which unnecessarily raised specificity).

* The “product” class will never be usable independently because of its indiscriminate use on list items, image wrappers, text wrappers, and action wrappers.
* The “list” class could applies to any type of list (and therefore none).
* The “action” class could applies to elements which may be styled as text links, image links, or buttons depending on the implementation’s needs.

3. Developers have too many options to write selectors for this component. Four of six have identical specificity, which means that the last selector declared in the CSS source order will have precedence. Selector applicability should never depend on source order in a properly architected design system:

```
.products.list li
.products.list .product
.products.list .item
.products.items li
.products.items .product
.products.items .item
```

### Improvement rewritten with OO-CSS

Using OO-CSS principles, here is the same markup:

```php
<ol class=”products-list”>
    <li class=”item”>
        <div class=”product-photo”>...</div>

        <div class=”product-details”>
            <div class=”product-name”>...</div>

            <div class=”product-description”>
                ...
                <a class="more-link">Learn More</a>
            </div>

            <div class=”product-actions”>
                <button class="button add-to-cart">Add To Cart</button>
            </div>
        </div>
    </li>
</ol>
```

And the improved CSS selectors (with specificity):

```
10 - .products-list {}
20 - .products-list .item {}
20 - .products-list .product-photo {}
20 - .products-list .product-details {}
20 - .products-list .product-name {}
20 - .products-list .product-description {}
30 - .products-list .product-description .more-link {}
20 - .products-list .product-actions {}
20 - .products-list .add-to-cart {}
```

#### Reasons the OO-CSS approach is better:

1. All class names describe the element they are applied to. This makes

2. The average specificity is 20, and the highest specificity is 30. In every case this is half the specificity of using chained classes.

3. This markup is significantly more extensible because we can define a global style for “.product-photo” and then cleanly override it based on its component context. Taken a step further you could provide custom styles for individual items while still keeping specificity under 30 at the element level.

4. It can also inherit object-based styles for components like buttons cleanly. Note: the “.button” class is applied, but to select the button instances we don’t need to use it in a selector. Capturing only the content-based class name (.add-to-cart) utilizes the cascade but allows for variation.

#### Further reading

* http://www.stubbornella.org/content/2011/04/28/our-best-practices-are-killing-us/ 
* http://coding.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/
* https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity 
* http://csswizardry.com/2012/11/code-smells-in-css/ 