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

const originalValues = <IReadTimeSettings>{};

export function allSetupAndTeardown() {
  suiteSetup(async () => {
    await setupTestSuite();
  });
  suiteTeardown(() => teardownTestSuite());
  setup(async () => {
    await executeCommand(Commands.toggleEnable);
  });
}

export async function setupTestSuite() {
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

export async function teardownTestSuite() {
  // put back the original peacock user settings
  await updateEnabledSetting(originalValues.enabled);
  await updateFileTypesSetting(originalValues.fileTypes);
  await updateWPMSetting(originalValues.wordsPerMinute);
}
