import { window } from 'vscode';
import { getReadingTime } from './readtime';
import { updateStatusBar, clearStatusBar } from './statusbar';

export function estimateReadTimeHandler() {
  let editor = getCurrentTextEditor();
  if (!editor) {
    return;
  }
  const { document } = editor;
  const readingTimeData = getReadingTime(document);
  updateStatusBar(document, readingTimeData.text);
}

function getCurrentTextEditor() {
  let editor = window.activeTextEditor;
  if (!editor) {
    clearStatusBar();
    return;
  }
  return editor;
}
