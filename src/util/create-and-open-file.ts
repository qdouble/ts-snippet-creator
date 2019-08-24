import { writeFileSync } from 'fs';
import * as vscode from 'vscode';

export const createAndOpenFile = async (filepath: string, data: any, format = 'utf8') => {
  writeFileSync(filepath, data, format);

  const openPath = vscode.Uri.file(filepath);
  const doc = await vscode.workspace.openTextDocument(openPath);
  await vscode.window.showTextDocument(doc);
  vscode.commands.executeCommand('editor.action.formatDocument');
};
