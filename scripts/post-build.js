/**
 * Post Build
 * Preloads all the chunks found in the "assets-manifest.json"
 */

const fs = require("fs");
const reactBuilderPath = './build/static/js/react-builder.js';
const reactBuilderFile = fs.readFileSync(reactBuilderPath).toString();
const manifest = JSON.parse(fs.readFileSync("./build/asset-manifest.json").toString());

let entrypoints = Object.values(manifest.entrypoints)
  .filter($ => {

    // skip known patterns
    if ($.includes('.svg')) return false;
    if ($.includes('.chunk.js.map')) return false;
    if ($.includes('.chunk.js.LICENSE')) return false;
    if ($.includes('.chunk.css.map')) return false;
    if ($.includes('.chunk.css')) return false;
    if ($.includes('index.html')) return false;
    if ($.includes('.gif')) return false;

    return true;
  })

fs.writeFileSync(reactBuilderPath, reactBuilderFile.replace('var reactFiles;', `var reactFiles = '${entrypoints}';`));
