# Atomic Templates

## Write templates atomically to contain the smallest possible output.

Magento's layout is assembled from many PHTML templates. To newcomers, this architecture is difficult to understand because not all the parts are known. It's difficult to find templates until you learn to use template path hints.

For experienced developers working on complex frontend implementations, templates need to be even more aggressively atomic. This would improve maintainability, reduce overrides, and make the core frontend more extensible.

This is hard to describe without examples, but I'll try to keep them relatively simple. The example patterns are taken from Magento 1.x for familiarity.

### Example A: Product View

In Magento 1.x, heavily modifying the product view is a mess because the ```catalog/product/view.phtml``` template contains a significant amount of variability between product types and a great deal of logic spills out into conditionally rendering child templates. This manifests as a problem when components that should be independent like “price box(es)", “inventory status", “quantity input", or “add-to actions" render in different templates within the same parent depending on the product type.

#### Original Magento Code (excerpt)

*File: /app/design/frontend/base/default/template/catalog/product/view.phtml*

```php
<?php if (!$this->hasOptions()):?>
    <div class="add-to-box">
        <?php if($_product->isSaleable()): ?>
            <?php echo $this->getChildHtml('addtocart') ?>
            <?php if( $this->helper('wishlist')->isAllow() || $_compareUrl=$this->helper('catalog/product_compare')->getAddUrl($_product)): ?>
                <span class="or"><?php echo $this->__('OR') ?></span>
            <?php endif; ?>
        <?php endif; ?>
        <?php echo $this->getChildHtml('addto') ?>
    </div>
    <?php echo $this->getChildHtml('extra_buttons') ?>
<?php elseif (!$_product->isSaleable()): ?>
    <div class="add-to-box">
        <?php echo $this->getChildHtml('addto') ?>
    </div>
<?php endif; ?>
```

*File: /app/design/frontend/base/default/template/catalog/product/view/addto.phtml*

```php
<ul class="add-to-links">
<?php if ($this->helper('wishlist')->isAllow()) : ?>
    <li><a href="<?php echo $_wishlistSubmitUrl ?>" onclick="productAddToCartForm.submitLight(this, this.href); return false;" class="link-wishlist"><?php echo $this->__('Add to Wishlist') ?></a></li>
<?php endif; ?>
<?php
    $_compareUrl = $this->helper('catalog/product_compare')->getAddUrl($_product);
?>
<?php if($_compareUrl) : ?>
    <li><span class="separator">|</span> <a href="<?php echo $_compareUrl ?>" class="link-compare"><?php echo $this->__('Add to Compare') ?></a></li>
<?php endif; ?>
</ul>
```

#### Rewritten with Atomic Templates

Magento would be significantly more extensible if individual components were broken off into templates. Each child template would contain all the conditional logic to render that content depending on the product type — rather than the parent (```view.phtml```).

This has two major benefits:

1. The parent template (```view.phtml```) becomes a logic-less layer used purely for markup structure. You can completely re-arrange all the child templates without writing deeply nested conditionals to span gaps between product types.
1. Maintenance is drastically decreased because you only have to maintain the child templates that required modifications and the parent template (```view.phtml```).

Deconstructed into more atomic files:

```
/app/design/frontend/base/default/template/catalog/product/view.phtml
/app/design/frontend/base/default/template/catalog/product/view/add-to-cart.phtml
/app/design/frontend/base/default/template/catalog/product/view/add-to-wishlist.phtml
/app/design/frontend/base/default/template/catalog/product/view/add-to-compare.phtml
```

In this structure you could very easily rewrite (view.phtml) without accepting maintenance burden for any of the interior code as this:

```php
<div class="product-primary-action">
    <?php echo $this->getChildHtml('add-to-cart'); ?>
</div>

<div class="product-secondary-actions">
    <?php echo $this->getChildHtml('add-to-wishlist'); ?>
    <?php echo $this->getChildHtml('add-to-compare'); ?>
</div>
```

Or this equally viable markup pattern:

```php
<div class="product-actions">
    <?php echo $this->getChildHtml('add-to-cart'); ?>

    <ul class="alternate-actions-list">
        <li><?php echo $this->getChildHtml('add-to-wishlist'); ?></li>
        <li><?php echo $this->getChildHtml('add-to-compare'); ?></li>
    </ul>
</div>
```

By deconstructing content into atomic templates restructuring the markup becomes trivially easy.

### Example B: Cart Items Table

The cart items table is another example where a monster template creates a major maintenance burden to modify significantly. To render this table, there are two templates in play:

```
/app/design/frontend/base/default/checkout/cart.phtml
/app/design/frontend/base/default/checkout/cart/item/default.phtml
```

In a responsive site, a mobile-first approach quickly breaks the assumption that a table is the appropriate structure to begin with. But the item renderer is a blob of tax conditions and pricing output, which changes frequently in core updates (not something you want to maintain).

#### Rewritten with Atomic Templates

Adopting the following template structure would improve extensibility and reduce maintenance:

```
/app/design/frontend/base/default/checkout/cart.phtml
/app/design/frontend/base/default/checkout/cart/item/default.phtml
/app/design/frontend/base/default/checkout/cart/item/fragment/name.phtml
/app/design/frontend/base/default/checkout/cart/item/fragment/options.phtml
/app/design/frontend/base/default/checkout/cart/item/fragment/unit-price.phtml
/app/design/frontend/base/default/checkout/cart/item/fragment/remove.phtml
/app/design/frontend/base/default/checkout/cart/item/fragment/subtotal.phtml
/app/design/frontend/base/default/checkout/cart/item/fragment/quantity.phtml
/app/design/frontend/base/default/checkout/cart/item/fragment/edit.phtml
/app/design/frontend/base/default/checkout/cart/item/fragment/image.phtml
```

The item renderer is responsible solely for the structure of each “row", and the fragments contain all the content-specific logic and output. They can be re-assembled in any configuration to suit the project, whether that is a table or not.

*File: /app/design/frontend/base/default/checkout/cart/item/default.phtml*

```php
<tr>
    <td><?php echo $this->getChildHtml('image'); ?></td>

    <td>
        <?php echo $this->getChildHtml('name'); ?>
        <?php echo $this->getChildHtml('options'); ?>
        <?php echo $this->getChildHtml('edit'); ?>
    </td>

    <td><?php echo $this->getChildHtml('unit-price'); ?></td>

    <td><?php echo $this->getChildHtml('quantity'); ?></td>

    <td><?php echo $this->getChildHtml('subtotal'); ?></td>

    <td><?php echo $this->getChildHtml('remove'); ?></td>
</tr>
```

Or a completely separate pattern that's easier to transform from small screens upward:

```php
<li>
    <div class="cart-item-info">
        <?php echo $this->getChildHtml('name'); ?>
        <?php echo $this->getChildHtml('options'); ?>
        <?php echo $this->getChildHtml('image'); ?>
    </div>

    <div class="cart-item-actions">
        <?php echo $this->getChildHtml('quantity'); ?>
        <?php echo $this->getChildHtml('edit'); ?>
        <?php echo $this->getChildHtml('remove'); ?>
    </div>

    <div class="cart-item-prices">
        <?php echo $this->getChildHtml('unit-price'); ?>
        <?php echo $this->getChildHtml('subtotal'); ?>
    </div>
</li>
```

From this simple example, it's obvious how much code could be put out of the maintenance scope for implementors and how much more flexible the UI can be.

### Magento must atom-icize all templates knowing that it cannot write universally appropriate markup.

It must implement a design architecture which facilitates decomposition and reconstruction as efficiently as possible. This also minimizes that amount of code which is drawn into themes (and thus maintenance).

##### Further reading

* http://bradfrostweb.com/blog/post/atomic-web-design/ 
* http://www.slideshare.net/bradfrostweb/atomic-design
* http://vimeo.com/67476280