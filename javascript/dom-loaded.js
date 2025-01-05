// Detect when the DOM is loaded on a page

// This fires as soon as the HTML is fully loaded and parsed, but before external resources (like images, stylesheets, and subframes) are loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is fully loaded and parsed");
  });


// This fires when the entire page (including images and stylesheets) is loaded
window.addEventListener("load", () => {
    console.log("Entire page (including images, CSS, etc.) is fully loaded");
  });


// This fires when specific elements (like an image) are loaded
const img = document.querySelector("img");

img.addEventListener("load", () => {
  console.log("Image has fully loaded");
});


// To handle load events asynchronously, use Promises
const domReady = new Promise(resolve => {
document.addEventListener("DOMContentLoaded", resolve);
});
  
const pageLoaded = new Promise(resolve => {
    window.addEventListener("load", resolve);
});
  
// Practical use:
domReady.then(() => console.log("DOM is ready"));
pageLoaded.then(() => console.log("Page is fully loaded"));
  