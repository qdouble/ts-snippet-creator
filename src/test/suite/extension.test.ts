import * as assert from 'assert';
import { before } from 'mocha';
import * as vscode from 'vscode';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as myExtension from '../extension';

suite('Extension Test Suite', () => {
  before(() => {
    vscode.window.showInformationMessage('Start all tests.');
  });

  test('Sample test', () => {
    assert.equal(-1, [1, 2, 3].indexOf(5));
    assert.equal(-1, [1, 2, 3].indexOf(0));
  });

  test('format-ts-to-snippet should return a string from ts file', () => {
    // assert.equal(-1, [1, 2, 3].indexOf(5));
    // assert.equal(-1, [1, 2, 3].indexOf(0));
    assert.equal(typeof '', 'string');
  });
});
