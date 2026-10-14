import { mkdir, copyFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const outputDir = 'dist';

await mkdir(outputDir, { recursive: true });

const files = await readdir('.');

for (const file of files) {
  if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js')) {
    if (file !== 'package.json') {
      await copyFile(file, join(outputDir, file));
    }
  }
}

console.log('Build completed successfully!');
console.log('Files copied to dist/');
