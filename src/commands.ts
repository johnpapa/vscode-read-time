import * as vscode from 'vscode';
import { getReadingTime } from './readtime';
import { updateStatusBar, clearStatusBar } from './statusbar';
import { updateEnabledSetting, getEnabledSetting } from './configuration';
import { Logger } from './logging';
import { matchesFileType } from './file-type';

export function estimateReadTime() {
  const isEnabled = getEnabledSetting();
  let minutes = 0;
  if (!isEnabled) {
    clearStatusBar();
    return minutes;
  }
  let editor = getCurrentTextEditor();
  if (!editor) {
    return minutes;
  }
  const { document } = editor;
  const textToRead = document.getText();

  if (matchesFileType(document.languageId)) {
    const readingTimeData = getReadingTime(textToRead);
    updateStatusBar(document, readingTimeData);
    minutes = readingTimeData.minutes;
    Logger.info(
      `Estimated ${readingTimeData.minutes} minutes (${
        readingTimeData.roundedMinutes
      } rounded) read time of ${document.fileName} at ${new Date().toString()}`
    );
  } else {
    clearStatusBar();
  }
  return minutes;
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
