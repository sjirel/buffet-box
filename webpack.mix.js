// webpack.mix.js
let mix = require('laravel-mix');

// Multiple Output SCSS in styles
function mix_scss_files(folder) {
    let fs = require('fs');
    var paths = fs.readdirSync(folder);
    for (var i = 0; i < paths.length; i++) {
      if (paths[i].indexOf('.scss') > 0) {
        var file_path = folder + paths[i];
        mix
        .sass(file_path, 'assets')
        ;
      }
    }
  }
  mix_scss_files('styles/');
  
  // Multiple Input JS in Scripts
  function mix_js_files(folder) {
    let fs = require('fs');
    var paths = fs.readdirSync(folder);
    for (var i = 0; i < paths.length; i++) {
      if (paths[i].indexOf('.js') > 0) {
        var file_path = folder + paths[i];
        mix.js(file_path, 'assets');
      }
    }
  }
  mix_js_files('scripts/');