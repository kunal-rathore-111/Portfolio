const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('src/assets/icons/technologies');
for (const file of files) {
  if (file.endsWith('.jsx')) {
    const fullPath = path.join('src/assets/icons/technologies', file);
    let content = fs.readFileSync(fullPath, 'utf8');
    content = content.replace(/,\s*color(?:\s*=\s*['"][^'"]*['"])?/g, '').replace(/\{\s*color(?:\s*=\s*['"][^'"]*['"])?\s*,/g, '{').replace(/\{\s*color(?:\s*=\s*['"][^'"]*['"])?\s*\}/g, '{}');
    fs.writeFileSync(fullPath, content);
  }
}
