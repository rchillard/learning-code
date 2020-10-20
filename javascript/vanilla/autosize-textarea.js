// https://blog.jim-nielsen.com/2020/automatically-resize-a-textarea-on-user-input/

import autosize from "https://unpkg.com/autosize@4.0.2/src/autosize.js";

// Autosize anything in the DOM on page load
Array.from(document.querySelectorAll("textarea[autosize]"))
  .forEach(autosize);

// Setup observer to autosize anything after page load
new MutationObserver(mutations => {
  Array.from(mutations).forEach(mutation => {
    Array.from(mutation.addedNodes).forEach(node => {
      if (node.matches("textarea[autosize]")) {
        autosize(node);
      }
    });
  });
}).observe(document.body, { childList: true });