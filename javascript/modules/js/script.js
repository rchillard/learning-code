console.log('Script.js attempted')

import { drawSky } from './modules/bg.js'

let bodyElement = document.body;

drawSky(bodyElement);

console.log('Script.js loaded')