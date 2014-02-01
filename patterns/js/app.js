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
    // UI Pattern - Linearize Table
    // ==============================================

    $('.linearize-table').each(function(){

        var cellLabels = [];

        // Loop through all table headers to find the labels
        $(this).find('thead th').each(function(index){
            // Only assign label if there is no data-no-label attribute on the th. Adding data-no-label will display
            // the value of each cell without it being prepended by a label, which can be useful for product name and
            // similar data types.
            cellLabels[index] = ($(this).is('[data-no-label]')) ? false : $(this).text().trim();
        });

        $(this).find('tbody tr').each(function(){
            // Looping through each td inside of each row so that the index value will match that of thead > tr > th
            $(this).children('td').each(function(index){
                var label = cellLabels[index];
                // As long as the th did not contain a data-no-label attribute, add the data-label attribute
                if (label) {
                    $(this).attr('data-label', label);
                }
            });
        });
    });


// ============================================== 
// END: $jQ(document).ready()
});
