const fs = require('fs');
const path = require('path');
const md5File = require('md5-file');

let assets = {};
let scss = [];

function walkSync(dir, filelist = {}) {

  fs.readdirSync(dir).forEach(file => {

    const dirFile = path.join(dir, file);
    const relativePath = dirFile.replace('src', '');

    const fileStats = fs.statSync(dirFile);

    if (fileStats.isDirectory()) {
      walkSync(dirFile, filelist)
    } else {
      const md5hash = md5File.sync(dirFile);
      const assetObject = {
        path: relativePath + '?' + md5hash
      };
      assets[relativePath] = assetObject.path;
      let fileFiltered = relativePath.replace(/\s|[/.]/g, "-").replace('assets-', '');
      scss.push(`$asset-${fileFiltered}: "${assetObject.path}";`);
    }

  });
  return filelist;
}

walkSync('./src/assets/');

fs.writeFileSync('./src/assets.json', JSON.stringify(assets), 'utf8');
fs.writeFileSync('./src/assets.scss', scss.join("\n"), 'utf8');
