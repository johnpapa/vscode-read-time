import * as vscode from 'vscode';
import { getReadingTime } from './readtime';
import { updateStatusBar, clearStatusBar } from './statusbar';
import { updateEnabledSetting, getEnabledSetting } from './configuration';
import { Logger } from './logging';
import { matchesFileType } from './file-type';

export function estimateReadTime() {
  const isEnabled = getEnabledSetting();
  if (!isEnabled) {
    clearStatusBar();
    return;
  }
  let editor = getCurrentTextEditor();
  if (!editor) {
    return;
  }
  const { document } = editor;
  if (matchesFileType(document.languageId)) {
    const readingTimeData = getReadingTime(document);
    updateStatusBar(document, readingTimeData);
    Logger.info(
      `Estimated ${readingTimeData.minutes} minutes (${
        readingTimeData.roundedMinutes
      } rounded) read time of ${document.fileName} at ${new Date().toString()}`
    );
  } else {
    clearStatusBar();
  }
}

export async function toggleEnableHandler() {
  const isEnabled = getEnabledSetting();
  const newState = !isEnabled;
  await updateEnabledSetting(newState);
  if (!newState) {
    clearStatusBar();
  }
}

function getCurrentTextEditor() {
  let editor = vscode.window.activeTextEditor;
  if (!editor) {
    clearStatusBar();
    return;
  }
  return editor;
}
