/**
* Gravity Department
*
* @author     Brendan Falkowski (http://gravitydept.com)
* @copyright  Copyright 2014 Gravity Department
* @license    All rights reserved.
*/



// ==============================================
// jQuery Init
// ==============================================

// Avoid PrototypeJS conflicts, assign jQuery to $jQ instead of $
var $jQ = jQuery.noConflict();

// Use $jQ(document).ready() because Magento executes Prototype inline 
// and breaks if jQuery executes beforehand. Use function($) to maintain 
// normal jQuery syntax inside

$jQ(document).ready(function($){

    // ==============================================
    // Shared Vars
    // ==============================================

    // Document
    var w = $(window);
    var d = $(document);
    var body = $('body');



    // ==============================================
    // FastClick - Remove 300ms delay
    // See: https://github.com/ftlabs/fastclick
    // ==============================================

    FastClick.attach(document.body);



    // ==============================================
    // UI Pattern - Toggle
    // ==============================================

    // Used to trigger the display of extra content.
    // Default is hidden.
    
    // <div class="toggle (toggle-active)">
    //     <div class="toggle-button">Trigger</div>
    //     <div class="toggle-target">Toggleable content</div>
    // </div>
    
    // Examples:
    //  - Catalog: list filter
    //  - Catalog: product social share
    //  - Customer: account nav
    //  - FAQ
    
    var toggleButtons = $('.toggle').find('.toggle-button');
    
    toggleButtons.on('click', function (e) {
        e.preventDefault();

        $(this)
            .closest('.toggle')
            .toggleClass('toggle-active');
    });



// ============================================== 
// END: $jQ(document).ready()
});
