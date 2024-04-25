window.addEventListener('load', loadLibrary);

// import libraries

function loadLibrary() {
  // Add CSS links
  var cssLinks = [
    'components/button/button.css',
    'components/switch/switch.css',
    // Add more CSS links here...
  ];

  cssLinks.forEach(function(link) {
    var cssTag = document.createElement('link');
    cssTag.rel = 'stylesheet';
    cssTag.href = 'https://greenestgoat.github.io/Prism-UI/' + link;
    document.head.appendChild(cssTag);
  });

  // Add JS scripts
  var jsScripts = [
    'components/button/button.js',
    'components/switch/switch.js',
    // Add more JS scripts here...
  ];

  jsScripts.forEach(function(script) {
    var jsTag = document.createElement('script');
    jsTag.src = 'https://greenestgoat.github.io/Prism-UI/' + script;
    document.head.appendChild(jsTag);
  });
}
