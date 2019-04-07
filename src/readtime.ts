import * as readingTime from 'reading-time';
import { TextDocument } from 'vscode';
import { ReadingTimeData } from './models';

export function getReadingTime(document: TextDocument) {
  let readingTimeData = new ReadingTimeData();
  if (document.languageId === 'markdown') {
    const textToRead = document.getText();
    // TODO: if my PR gets accepted for
    // reading-time npm package,
    // we add this option and expose a setting
    // const options = {
    //   wordsPerMinute: 200
    // };
    // readingTimeData = readingTime(textToRead, options); // TODO: API for npm package is not up to date.

    readingTimeData = readingTime(textToRead);
  }
  return modifyReadingData(readingTimeData);
}

function modifyReadingData(readingTimeData: ReadingTimeData) {
  const minutes = Math.round(readingTimeData.minutes);
  const text = `${minutes} minute read`;
  return { ...readingTimeData, roundedMinutes: minutes, text };
}
