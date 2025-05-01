import { readFile, writeFile, copyFile } from 'fs/promises';
import { resolve } from 'path';

const distFolder = resolve('./dist');
const publicFolder = resolve('./public');
const basePath = '/Portfolio';

async function main() {
    try {
        const indexPath = `${distFolder}/index.html`;
        const indexContent = await readFile(indexPath, 'utf-8');

        const fallbackScript = `
<script>
    (function() {
        var validPaths = [${basePath === '/' ? '' : `'${basePath}', `}'${basePath}/'];
        var currentPath = window.location.pathname;
        var isKnownRoute = validPaths.some(function(path) {
            return currentPath.startsWith(path);
        });
        if (!isKnownRoute) {
            document.head.innerHTML += '<link rel="stylesheet" href="./404.css">';
            document.body.innerHTML = '<div class="error-container"><h1 class="error-title">404</h1><p class="error-message">Página no encontrada</p><a class="error-link" href="${basePath}/">Volver al inicio</a></div>';
            document.title = '404 - Página no encontrada';
        }
    })();
</script>
</body>`;

        const fixedContent = indexContent
            .replace(
                /<base href="[^"]*">/,
                `<base href="${basePath}/">`
            )
            .replace('</body>', fallbackScript);

        const errorPagePath = `${distFolder}/404.html`;
        await writeFile(errorPagePath, fixedContent);

        await copyFile(`${publicFolder}/404.css`, `${distFolder}/404.css`);

        console.log('✅ 404.html and 404.css generated correctly based on:', basePath);
    } catch (err) {
        console.error('❌ Error copying 404.html:', err);
        process.exit(1);
    }
}

main();
