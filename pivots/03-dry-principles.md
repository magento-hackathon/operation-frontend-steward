# DRY Principles

## Embrace DRY (Don't Repeat Yourself) principles consistently.

Magento 1 and 2 have many instances where template files are indiscriminately copied between modules and slightly modified to suit the needs of that module. While it's arguable this allows for more loosely coupled modules, not being DRY creates several problems:

1. Duplicating templates creates a headache for anyone implementing Magento. They need to re-write the same customizations in multiple locations and scrutinize each instance for minor differences.
1. Often the existence of duplicated templates is not obvious. Developers may mistakenly not repeat their customizations in each duplicate and only discover their mistake when an obscure feature or config edge case appears (often in production).
1. Duplicating templates in Magento's core makes long-term maintenance more difficult and error prone.
1. Each duplication instance makes merging customizations more tedious during upgrades.
1. In Magento 1.x, there are multiple instances of changes in core templates not being ported in duplicate templates by the core team. This inconsistency makes customization even more error-prone.

### Example from Magento 2

The ```bundle``` and ```downloadable``` modules are a key example of this problem. They contain several modified versions of templates from the ```checkout``` module.

For example, the row render templates for the cart, checkout review, and order/invoice/credit-memo/shipment are all near duplicates of the renderers in the ```checkout``` module. 

A comparison of these two files in ```Magento 2, dev63``` reveals a myriad of trivial changes (spacing, extra line breaks, additional classes), but there are only a few actual differences between the two files.

```
app/code/Magento/Downloadable/view/frontend/checkout/cart/item/default.phtml
app/code/Magento/Checkout/view/frontend/cart/item/default.phtml
```

The trivial changes demonstrate the importance of the not having duplicate content in template files, and the actual differences should be isolated and conditionally displayed. 

### Improvement

If the ```bundle``` and ```downloadable``` modules need to add a few lines to the ```checkout``` cart renderer, do not duplicate the entire renderer template.

Just modify the ```checkout``` cart renderer with a fragment template that conditionally renders based on the product type. 

For non-core modules, a third-party could make use of a generic layout container into which new blocks could be inserted. Magento should not use them though, all core templates should be explicitly inserted for clarity.