import * as readingTime from 'reading-time';
import { TextDocument } from 'vscode';
import { ReadingTimeData } from './models';
import { getWPMSetting } from './configuration';
import { matchesFileType } from './file-type';

export function getReadingTime(document: TextDocument) {
  let readingTimeData = new ReadingTimeData();
  if (matchesFileType(document.languageId)) {
    const textToRead = document.getText();
    const wordsPerMinute = getWPMSetting();
    const options = { wordsPerMinute };
    readingTimeData = readingTime(textToRead, options);
  }
  return modifyReadingData(readingTimeData);
}

function modifyReadingData(readingTimeData: ReadingTimeData) {
  const minutes = Math.round(readingTimeData.minutes);
  const text = `${minutes} minute read`;
  return { ...readingTimeData, roundedMinutes: minutes, text };
}
