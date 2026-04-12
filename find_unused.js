const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (let file of list) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat.isDirectory()) {
      getFiles(file, files);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      files.push(file);
    }
  }
  return files;
}

const allJsFiles = getFiles('src');

const usedFiles = new Set(['src/main.jsx', 'src/App.jsx', 'src/components/Footer.jsx', 'src/lib/default_Tailwind.js', 'src/lib/utils.js', 'src/constants/index.js', 'src/lib/animations.js']);

allJsFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    // match relative imports like './components/X' or '@/...'
    const matches = content.match(/from\s+['"]([^'"]+)['"]/g) || [];
    const dynamicMatches = content.match(/import\s*\(['"]([^'"]+)['"]\)/g) || [];
    
    [...matches, ...dynamicMatches].forEach(match => {
        let importPath = match.match(/['"]([^'"]+)['"]/)[1];
        if (importPath.startsWith('.') || importPath.startsWith('@/')) {
           // We'll just do a very loose string matching against file path
           const baseName = importPath.split('/').pop().replace(/\.(js|jsx)$/, '');
           allJsFiles.forEach(f => {
               if (f.includes(baseName)) {
                   usedFiles.add(f);
               }
           });
        }
    });

    // Also look for component usage like <ErrorPage
    const jsxMatches = content.match(/<([A-Z][a-zA-Z0-9_]*)/g) || [];
    jsxMatches.forEach(match => {
        const componentName = match.substring(1);
        allJsFiles.forEach(f => {
            const baseName = path.basename(f, path.extname(f));
            if (baseName === componentName || f.includes(componentName)) {
                usedFiles.add(f);
            }
        });
    });
});

const unimported = allJsFiles.filter(f => !usedFiles.has(f));
console.log(unimported.join('\n'));
