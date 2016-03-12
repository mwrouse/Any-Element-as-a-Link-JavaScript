/**
 * ====================================
 *     DOMElementLinks
 * ===================================
 *
 * Author.......: Michael Rouse
 * Language.....: JavaScript
 * Date.........: March 2016
 *
 * Description..: This JavaScript library allows you to use an HTML DOM Element as a link, not just anchor tags. For those times where putting an anchor tag around something might be
 *                annoying, or impossible, for some reason...
 */


/**
 * Function.....: Register Links
 * Author.......: Michael Rouse
 * Description..: Registers all the non-anchor tag links on the page
 */
function DOMElementLinks_RegisterLinks()
{
  // Find all the elements with an href tag that are not <link> or <a> tags
  var elements = document.querySelectorAll('[href]:not(a):not(link)');

  // Loop through each element found
  for (var i = 0; i < elements.length; i++)
  {
    // Register the click event
    (elements[i]).addEventListener('click', function(){
      DOMElementLinks_FollowLink(this);
    });

    // Add a title attribute to substitute the URL showing in the bottom left of a window
    (elements[i]).setAttribute('title', (elements[i]).getAttribute('href'));

  }
}


/**
 * Function.....: DOMElementLinks_FollowLink
 * Author.......: Michael Rouse
 * Parameters...: link_element - the element that was clicked
 * Description..: This function is called when an element with a href attribute that is not a <a> or a <link> tag is clicked
 */
function DOMElementLinks_FollowLink(link_element)
{
  // Pull all the attributes from the element
  var url = link_element.getAttribute('href');
  var target = link_element.getAttribute('target') || '_self';

  // Not a valid link, do not follow it
  if (!url)
  {
    return;
  }

  // Follow the link
  window.open(url, target);
}



/*
 * Register links when the page loads
 */
window.addEventListener('load', function(){
  DOMElementLinks_RegisterLinks();
});
