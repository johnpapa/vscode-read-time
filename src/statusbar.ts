import {
  StatusBarAlignment,
  window,
  TextDocument,
  StatusBarItem
} from 'vscode';

let _statusBarItem: StatusBarItem;

export function getStatusBarItem() {
  if (!_statusBarItem) {
    _statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
  }
  return _statusBarItem;
}

export function clearStatusBar() {
  const statusBarItem = getStatusBarItem();

  statusBarItem.text = '';
  statusBarItem.hide();
}

export function updateStatusBar(document: TextDocument, text: string) {
  const statusBarItem = getStatusBarItem();
  if (document.languageId === 'markdown') {
    statusBarItem.text = `$(book) ${text}`;
    statusBarItem.show();
  } else {
    clearStatusBar();
  }
}
