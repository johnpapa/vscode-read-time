import * as vscode from 'vscode';
import { TextDocument, window, workspace } from 'vscode';
import { Commands } from './models';
import { estimateReadTime, toggleEnableHandler } from './commands';
import { Logger } from './logging';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(Commands.toggleEnable, toggleEnableHandler)
  );

  addSubscriptions(context);
}

function addSubscriptions(context: vscode.ExtensionContext) {
  context.subscriptions.push(Logger.getChannel());

  context.subscriptions.push(
    workspace.onDidChangeConfiguration(estimateReadTime)
  );

  context.subscriptions.push(
    window.onDidChangeActiveTextEditor((e: vscode.TextEditor | undefined) => {
      estimateReadTime();
    })
  );
  context.subscriptions.push(
    workspace.onDidChangeTextDocument((e: vscode.TextDocumentChangeEvent) => {
      estimateReadTime();
    })
  );
  context.subscriptions.push(
    workspace.onDidOpenTextDocument((document: TextDocument) => {
      estimateReadTime();
    })
  );
}

export function deactivate() {}
