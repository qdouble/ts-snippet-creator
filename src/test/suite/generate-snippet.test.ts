import * as assert from 'assert';
import { readFileSync } from 'fs';
import * as path from 'path';
import { formatTStoSnippetString } from '../../util/format-ts-to-snippet-string';
import { generateSnippet } from '../../util/generate-snippet';

suite('generateSnippet =>', () => {
  test('should be generate snippet given filename and snippet body', () => {
    const file = readFileSync(__filename, 'utf8');
    const filename = path.basename(__filename);

    const result = generateSnippet(filename, formatTStoSnippetString(file));
    console.log({ filename });
    console.log(result);

    assert.strictEqual(typeof result, 'string');
    assert.strictEqual(result.includes('filename'), true);
  });
});
