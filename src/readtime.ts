import * as readingTime from 'reading-time';
import { ReadingTimeData, IExpandedReadingTimeData } from './models';
import { getWPMSetting } from './configuration';

export function getReadingTime(textToRead: string): IExpandedReadingTimeData {
  let readingTimeData = new ReadingTimeData();
  const wordsPerMinute = getWPMSetting();
  const options = { wordsPerMinute };
  readingTimeData = readingTime(textToRead, options);
  return modifyReadingData(readingTimeData);
}

function modifyReadingData(
  readingTimeData: ReadingTimeData
): IExpandedReadingTimeData {
  const minutes = Math.round(readingTimeData.minutes);
  const text = `${minutes} minute read`;
  return { ...readingTimeData, roundedMinutes: minutes, text };
}
