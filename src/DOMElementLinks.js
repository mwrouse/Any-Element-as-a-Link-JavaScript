/**
 * ====================================
 *     DOMElementsAsLinks
 * ===================================
 *
 * Author.......: Michael Rouse
 * Language.....: JavaScript
 * Date.........: March 2016
 *
 * Description..: This JavaScript library allows you to use an HTML DOM Element as a link, not just anchor tags. For those times where putting an anchor tag around something might be
 *                annoying, or impossible, for some reason...
 */
(function(){
  "use strict";

  var DOMElementsAsLinks = function(){
    // Do not break the window scope
    if (this === window)
    {
      return new DOMElementsAsLinks();
    }

    /**
     * Function.....: Register Links (Immediate Function)
     * Author.......: Michael Rouse
     * Description..: Registers all the non-anchor tag links on the page
     */
    this.register = function(){
      // Preserve 'this'
      var me = this;

      // Find all elements with a href attribute that are not <a> tags in the body
      var elements = document.querySelectorAll('body [href]:not(a)');

      // Loop through each element found
      for (var i = 0; i < elements.length; i++)
      {
        // Register the click event
        (elements[i]).addEventListener('click', function(){
          me.follow(this);
        });

        // Set the title attribute
        (elements[i]).setAttribute('title', (elements[i]).getAttribute('href'));
      }

      return this;
    };


    /**
     * Function.....: Follow Link
     * Author.......: Michael Rouse
     * Parameters...: link_element - the element that was clicked
     * Description..: This function is called when an element with a href attribute that is not a <a> or a <link> tag is clicked
     */
    this.follow = function(element){
      var url = element.getAttribute('href');

      if (url)
      {
        window.open(url, (element.getAttribute('target') || '_self'));
      }

      return this;
    };

    // Constructor, register the links
    this.register();

    return this;
  };

  // Initialize the library
  if (!window.DOMElementsAsLinks)
  {
    window.DOMElementsAsLinks = DOMElementsAsLinks;
  }
}());
