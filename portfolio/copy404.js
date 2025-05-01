import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

const distFolder = resolve('./dist');
const basePath = '/Portfolio/';

async function main() {
    try {
        const indexPath = `${distFolder}/index.html`;
        const indexContent = await readFile(indexPath, 'utf-8');

        const fixedContent = indexContent.replace(
            /<base href="[^"]*">/,
            `<base href="${basePath}">`
        );

        const errorPagePath = `${distFolder}/404.html`;
        await writeFile(errorPagePath, fixedContent);

        console.log('✅ 404.html generated correctly based on:', basePath);
    } catch (err) {
        console.error('❌ Error copying 404.html:', err);
        process.exit(1);
    }
}

main();
