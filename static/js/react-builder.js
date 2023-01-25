(function () {
  var reactFiles = 'static/js/main.1fd7d33a.js';
  var reactFiles = reactFiles.split(',');
  var reactFilesSize = reactFiles.length;
  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  if(isIE11) {
    var IEscriptTag = document.createElement('script');
    IEscriptTag.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.12.1/polyfill.min.js'
    );
    document.body.appendChild(IEscriptTag);
  }

  for (var i = 0; i < reactFilesSize; i++) {
    var scriptTag = document.createElement('script');
    scriptTag.setAttribute(
      'src', 'https://shterev.github.io/ftcalc/' + reactFiles[i]
    );
    document.body.appendChild(scriptTag);
  }
})();
