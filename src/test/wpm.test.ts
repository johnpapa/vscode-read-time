import * as vscode from 'vscode';
import * as assert from 'assert';
import { allSetupAndTeardown } from './lib/setup-teardown-test-suite';
import { markdown } from './lib/test-data';
import { estimateReadTime } from '../commands';
import { updateWPMSetting } from '../configuration';
import { openFile } from './lib/open-file';
import { getReadingTime } from '../readtime';

export const executeCommand = vscode.commands.executeCommand;

suite('words per minute tests', () => {
  allSetupAndTeardown();

  test(`when words per minute is increased, read time decreases`, async () => {
    const doc = await openFile('markdown', markdown.long.text);
    const result1 = getReadingTime(doc.getText());
    await updateWPMSetting(400);
    const result2 = getReadingTime(doc.getText());
    assert.ok(result1.roundedMinutes > result2.roundedMinutes);
  });
});
