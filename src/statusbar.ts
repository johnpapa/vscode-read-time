import {
  StatusBarAlignment,
  window,
  TextDocument,
  StatusBarItem
} from 'vscode';
import { ReadingTimeData } from './models';

let _statusBarItem: StatusBarItem;

export function getStatusBarItem() {
  if (!_statusBarItem) {
    const priority = 2; // High priority since this is important in a markdown file
    _statusBarItem = window.createStatusBarItem(
      StatusBarAlignment.Right,
      priority
    );
  }
  return _statusBarItem;
}

export function clearStatusBar() {
  const statusBarItem = getStatusBarItem();

  statusBarItem.text = '';
  statusBarItem.tooltip = '';
  statusBarItem.hide();
}

export function updateStatusBar(
  document: TextDocument,
  readingTimeData: ReadingTimeData
) {
  const statusBarItem = getStatusBarItem();
  if (document.languageId === 'markdown') {
    const roundedMinutes = Math.round(readingTimeData.minutes).toString();
    statusBarItem.text = `$(book) ${roundedMinutes}`;
    statusBarItem.tooltip = readingTimeData.text;
    statusBarItem.show();
  } else {
    clearStatusBar();
  }
}
