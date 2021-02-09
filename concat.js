const fs = require('fs-extra');
const concat = require('concat');

(async function () {
  const files = [
    './dist/few200wc/runtime.js',
    './dist/few200wc/polyfills.js',
    './dist/few200wc/main.js'
  ];

  await fs.ensureDir('elements-dist');
  await concat(files, 'elements-dist/chat.js');
  await fs.copyFile('./dist/few200wc/styles.css', 'elements-dist/styles.css')
})();
