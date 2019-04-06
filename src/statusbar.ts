import {
  StatusBarAlignment,
  window,
  TextDocument,
  StatusBarItem
} from 'vscode';

let statusBarItem: StatusBarItem;

export function clearStatusBar() {
  createStatusBar();

  statusBarItem.text = '';
  statusBarItem.hide();
}

export function updateStatusBar(document: TextDocument, text: string) {
  createStatusBar();
  if (document.languageId === 'markdown') {
    statusBarItem.text = `$(book) ${text}`;
    statusBarItem.show();
  } else {
    clearStatusBar();
  }
}

function createStatusBar() {
  if (!statusBarItem) {
    statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
  }
}
