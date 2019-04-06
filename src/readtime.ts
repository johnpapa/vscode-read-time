import * as readingTime from 'reading-time';
import { TextDocument } from 'vscode';
import { ReadingTimeData } from './models';

export function getReadingTime(document: TextDocument) {
  //textToRead: string) {
  let readingTimeData = new ReadingTimeData();
  if (document.languageId === 'markdown') {
    const textToRead = document.getText();
    // const options = {
    //   wordBound: () => {},
    //   wordsPerMinute: 200
    // };
    readingTimeData = readingTime(textToRead); //, options); // TODO: API for npm package is not up to date.
  }
  return readingTimeData;
}
