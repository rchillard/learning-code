// Loader file (e.g. main.js)

// Dynamically import the component
import('./web-components/background-component.js').then(() => {
    console.log('BackgroundComponent loaded dynamically!');
});
  