import { Commands, getExtension, IReadTimeSettings } from '../../models';
import {
  getEnabledSetting,
  updateEnabledSetting,
  getFileTypesSetting,
  getWPMSetting,
  updateFileTypesSetting,
  updateWPMSetting
} from '../../configuration';
import * as vscode from 'vscode';

export const executeCommand = vscode.commands.executeCommand;

export function allSetupAndTeardown(originalValues: IReadTimeSettings) {
  suiteSetup(async () => {
    await setupTestSuite(originalValues);
  });
  suiteTeardown(() => teardownTestSuite(originalValues));
  setup(async () => {
    await executeCommand(Commands.toggleEnable);
  });
}

export async function setupTestSuite(
  // extension: vscode.Extension<any> | undefined,
  originalValues: IReadTimeSettings
) {
  let extension = getExtension();
  // Save the original values
  originalValues.enabled = getEnabledSetting();
  originalValues.fileTypes = getFileTypesSetting();
  originalValues.wordsPerMinute = getWPMSetting();
  // Set the test values
  await updateEnabledSetting(true);
  await updateFileTypesSetting(['markdown']);
  await updateWPMSetting(200);
  return extension;
}

export async function teardownTestSuite(originalValues: IReadTimeSettings) {
  // put back the original peacock user settings
  await updateEnabledSetting(originalValues.enabled);
  await updateFileTypesSetting(originalValues.fileTypes);
  await updateWPMSetting(originalValues.wordsPerMinute);
}
