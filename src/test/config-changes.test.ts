import * as vscode from 'vscode';
import * as assert from 'assert';
import { Commands, IReadTimeSettings } from '../models';
import { allSetupAndTeardown } from './lib/setup-teardown-test-suite';
import {
  updateGlobalConfiguration,
  getEnabledSetting,
  updateEnabledSetting
} from '../configuration';
import { getStatusBarItem } from '../statusbar';
import { markdown } from './lib/test-data';
import { TextEditorEdit, Position, workspace, window } from 'vscode';

export const executeCommand = vscode.commands.executeCommand;

suite('changes to configuration', () => {
  let originalValues = <IReadTimeSettings>{};
  allSetupAndTeardown(originalValues);

  suite('when Read Time is disabled', () => {
    setup(async () => {
      await updateEnabledSetting(false);
    });

    test('and we toggle it, it becomes enabled', async () => {
      await vscode.commands.executeCommand(Commands.toggleEnable);
      const result = getEnabledSetting();
      assert.ok(result);
    });

    test('and we toggle it, it becomes enabled', async () => {
      await updateEnabledSetting(true);
      const result = getEnabledSetting();
      assert.ok(result);
    });

    test('when file is not valid, the status bar has no text', async () => {
      const doc = await openFile('plaintext', markdown.medium);
      // Status bar should have no text (and thus hidden)
      const statusBarItem = getStatusBarItem();
      assert.ok(!statusBarItem.text);
    });

    test('when file is markdown, the status bar has no text', async () => {
      const doc = await openFile('markdown', markdown.medium);
      const statusBarItem = getStatusBarItem();
      assert.ok(!statusBarItem.text);
    });
  });

  suite('when Read Time is enabled', () => {
    setup(async () => {
      await updateEnabledSetting(true);
    });

    test('and we toggle it, it becomes disabled', async () => {
      await vscode.commands.executeCommand(Commands.toggleEnable);
      const result = getEnabledSetting();
      assert.ok(!result);
    });

    test('and we disable it, it becomes disabled', async () => {
      await updateEnabledSetting(false);
      const result = getEnabledSetting();
      assert.ok(!result);
    });

    test('when file is not valid, the status bar has no text', async () => {
      const doc = await openFile('plaintext', markdown.medium);
      // Status bar should have no text (and thus hidden)
      const statusBarItem = getStatusBarItem();
      assert.ok(!statusBarItem.text);
    });

    // TODO: status bar is never showing up under test!
    test.skip('when file is markdown, the status bar has text', async () => {
      const doc = await openFile('markdown', markdown.medium);
      const editor = await window.showTextDocument(doc, 1, true);
      // Status bar should have text (and thus visible)
      const statusBarItem = getStatusBarItem();
      // statusBarItem.text = 'asdasdasdasd';
      // statusBarItem.show();
      assert.ok(!!statusBarItem.text && statusBarItem.text.length);
    });

    test('when file is yaml, the status bar has no text', async () => {
      const doc = await openFile('yaml', markdown.medium);
      // Status bar should have no text (and thus hidden)
      const statusBarItem = getStatusBarItem();
      assert.ok(!statusBarItem.text);
    });
  });
});

async function openFile(language: string, content: string) {
  const options = {
    content,
    language
  };
  const doc = await workspace.openTextDocument(options);
  return doc;
}
