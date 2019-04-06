import * as vscode from 'vscode';
import { TextDocument, window, workspace } from 'vscode';
import { Commands } from './models';
import { estimateReadTimeHandler } from './commands';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      Commands.estimateReadTime,
      estimateReadTimeHandler
    )
  );

  window.onDidChangeActiveTextEditor((e: vscode.TextEditor | undefined) => {
    console.log('onDidChangeActiveTextEditor');
    estimateReadTimeHandler();
  });
  workspace.onDidChangeTextDocument((e: vscode.TextDocumentChangeEvent) => {
    console.log('onDidChangeActiveTextEditor');
    estimateReadTimeHandler();
  });
  workspace.onDidOpenTextDocument((document: TextDocument) => {
    console.log('onDidChangeActiveTextEditor');
    estimateReadTimeHandler();
  });
}

export function deactivate() {}
