import { Commands, getExtension, IReadTimeSettings } from '../../models';
import { getEnabledSetting, updateEnabledSetting } from '../../configuration';
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
  // Set the test values
  await updateEnabledSetting(true);
  return extension;
}

export async function teardownTestSuite(originalValues: IReadTimeSettings) {
  // put back the original peacock user settings
  await updateEnabledSetting(originalValues.enabled);
}
