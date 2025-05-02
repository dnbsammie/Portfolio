import { writeFile } from 'fs/promises';
import { resolve } from 'path';

const distFolder = resolve('./dist');

const custom404Content = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script type="text/javascript">
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
    Redirecting...
  </body>
</html>`;

async function main() {
    try {
        const errorPagePath = `${distFolder}/404.html`;
        await writeFile(errorPagePath, custom404Content);
        console.log('✅ Custom 404.html generated correctly');
    } catch (err) {
        console.error('❌ Error generating 404.html:', err);
        process.exit(1);
    }
}

main();