# Comments

## Write comments in code, and sign comments as Magento.

Magento should write comments in XML an PHTML templates to make it easier for developers to understand non-obvious things like:

* Which configurations trigger different states.
* Edge cases (ex: not enough inventory to fulfill order).
* Dependencies from other modules or templates (ex: expecting form parent or global var).

In PHTML templates, comments must always be written in PHP comments using single-line syntax so users never download them, and they can easily be spanned with multi-line comments.

Signing comments by company namespace helps developers easily spot their comments from platform or third-party customizations. For example:

```php
<?php
// Magento:
// A note about this comment.
// One sentence per line.
?>
<?php if ($xyz >= $abc && $response !== null): ?>
    <?php
    // GravDept:
    // This is my company’s comment.
    // It’s obvious instantly who owns the comment without seeing the code.
    ?>
    <div>Something custom here</div>
<?php endif; ?>
```

Magento should never comment out code without explanation. This is fairly prevalent in Magento 1.x, and why/who/when/status of the comment is never clear.