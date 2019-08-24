import * as path from 'path';
export const generateSnippet = (filename: string, snippetBody: string) => {
  const filenameToTitle = filename
    .replace('-', ' ')
    .replace(/\.(ts|js)/, '')
    .replace(/\./, ' ')
    .split(' ')
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(' ');

  let basename = path.basename(filename);
  if (basename.includes('.')) {
    basename = basename.slice(0, basename.indexOf('.'));
  }
  return `{"${filenameToTitle}": {
          "scope": "typescript",
          "prefix": "${basename}",
          "body": [
              ${snippetBody}
          ],
          "description": "Auto generated snippetBody created for ${filenameToTitle}"
        }}`;
};
