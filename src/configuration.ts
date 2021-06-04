import * as vscode from 'vscode';
import { Sections, Settings, extensionShortName } from './models';
import { Logger } from './logging';

const { workspace } = vscode;

export function getEnabledSetting() {
  return readConfiguration<boolean>(Settings.Enabled);
}

export async function updateEnabledSetting(value: boolean) {
  return await updateGlobalConfiguration(Settings.Enabled, value);
}

export function getFileTypesSetting() {
  return readConfiguration<string[]>(Settings.FileTypes);
}

export async function updateFileTypesSetting(value: string[]) {
  return await updateGlobalConfiguration(Settings.FileTypes, value);
}

export function getWPMSetting() {
  return readConfiguration<number>(Settings.WordsPerMinute);
}

export async function updateWPMSetting(value: number) {
  return await updateGlobalConfiguration(Settings.WordsPerMinute, value);
}

export function readConfiguration<T>(
  setting: Settings,
  defaultValue?: T | undefined
) {
  const value: T | undefined = workspace
    .getConfiguration(Sections.userReadTimeSection)
    .get<T | undefined>(setting, defaultValue);
  return value as T;
}

export async function updateGlobalConfiguration<T>(
  setting: Settings,
  value?: T | undefined
) {
  let config = vscode.workspace.getConfiguration();
  const section = `${extensionShortName}.${setting}`;
  Logger.info('Updating the user settings with the following changes:');
  Logger.info(`${section} = ${value}`, true);
  return await config.update(section, value, vscode.ConfigurationTarget.Global);
}
