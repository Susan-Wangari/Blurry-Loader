# Blurry-Loader
Blurry Loader

A simple, customizable blurry loading indicator made with JavaScript.
Installation

Include the blurry-loader.js file in your HTML file:

<script src="/path/to/blurry-loader.js"></script>

Usage

To use the blurry loader, create a new instance of the BlurryLoader class and pass in a reference to the element that should contain the loading indicator:

const loader = new BlurryLoader(document.getElementById('loader-container'));

You can then start the loading animation by calling the start() method:

loader.start();

To stop the loading animation, call the stop() method:

loader.stop();

Customization

You can customize the appearance of the blurry loader by passing in options to the BlurryLoader constructor. Available options include:

    size: The size of the loading indicator in pixels (default: 50)
    color: The color of the loading indicator (default: #333)
    blur: The amount of blur applied to the loading indicator (default: 5)

For example:

const loader = new BlurryLoader(document.getElementById('loader-container'), {
  size: 100,
  color: '#f00',
  blur: 10
});
