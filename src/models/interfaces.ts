export interface ISettingsIndexer {
  [key: string]: any;
}

export interface ICommand {
  title: string;
  command: string;
  category: string;
}

export interface IConfiguration {
  type: string;
  title: string;
  properties: any;
}

export interface IReadTimeSettings {
  enabled: boolean;
  fileTypes: string[];
  wordsPerMinute: number;
}

export interface IExpandedReadingTimeData {
  roundedMinutes: number;
  text: string;
  time: number;
  words: number;
  minutes: number;
}
