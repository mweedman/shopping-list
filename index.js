/* eslint-disable indent */
'use strict';

// Use DOM Manipulation and traversal to dynamically add and remove
// HTML elementa and apply styles.

// Linking to an externally hosted library, and a locally
// hosted JavaScript file.

// Linking to your application JavaScript file form the
// index.html page.

// Using 'this' and event delegation.

// Enter new items by entering text and hitting
// "return" or clicking "add item" button

      //Reference fizzbuzz
      //adds new li element on top. .closest()?
// Add Item:
$(function(){

  $('form').on('submit', event => {
    
    event.preventDefault();

    let newItem = $(event.currentTarget).find('input').val();

    $('ul').prepend(`<li><span class="shopping-item">${newItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span>
      </button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
    
  });
});


// Check and Uncheck Items on the list by clicking
// "check" button

    // Changing text to have strikethrough effect.
    // add this class
    // .shopping-item__checked {
    //   text-decoration: line-through;
    // }
$(function(){

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
    
});


//Permanently remove items from the list.
$(function(){

  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      
      $(this).closest('li').remove();
    });

});

// Additional Parameters:
  // Must use a CDN-hosted version of jQuery
  // Put application code in file called index.js and
  //    link it in index.html
  // Be sure to put both script elements at bottom of the
  //    <body> element (best practice).
  // Do not alter the html or css other than what the
  //    linked files require.
  
// Hint: you may find it helpful to read up on and use
//    the following jQuery methods:
      // .submit() - Used
      // .preventDefault() - Used
      // .toggleClass()
      // .closest()