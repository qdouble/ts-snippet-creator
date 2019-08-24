import * as assert from 'assert';
import { readFileSync } from 'fs';
import * as path from 'path';
import { formatTStoSnippetString } from '../../util/format-ts-to-snippet-string';

suite('formatTSToSnippet =>', () => {
  test('should be able to transform self to code snippet', () => {
    const filepath = path.resolve(__dirname, __filename);
    const file = readFileSync(filepath, 'utf8');

    const result = formatTStoSnippetString(file);

    assert.strictEqual(typeof result, 'string');
    assert.strictEqual(result.length > 0, true);
  });
});
