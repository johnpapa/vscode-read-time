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

    test('when file is not markdown, the status bar has no text', async () => {
      // Open a file
      const options = {
        content: markdown.medium,
        language: 'plaintext'
      };
      const doc = await workspace.openTextDocument(options);
      // Status bar should have no text (and thus hidden)
      const statusBarItem = getStatusBarItem();
      assert.ok(!statusBarItem.text);
    });

    test('when file is markdown, the status bar has no text', async () => {
      // Open a file
      const options = {
        content: markdown.medium,
        language: 'markdown'
      };
      const doc = await workspace.openTextDocument(options);
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

    test('when file is not markdown, the status bar has no text', async () => {
      // Open a file
      const options = {
        content: markdown.medium,
        language: 'plaintext'
      };
      const doc = await workspace.openTextDocument(options);
      // Status bar should have no text (and thus hidden)
      const statusBarItem = getStatusBarItem();
      assert.ok(!statusBarItem.text);
    });

    // TODO: status bar is never showing up under test!
    test.only('when file is markdown, the status bar has text', async () => {
      // Open a file
      const options = {
        content: markdown.medium,
        language: 'markdown'
      };
      // const uri = vscode.Uri.parse('markdown:/test-files/foo.md');
      // const doc = await workspace.openTextDocument(uri);
      const doc = await workspace.openTextDocument(options);
      // const editor = await window.showTextDocument(doc, { preview: false });
      const editor = await window.showTextDocument(doc, 1, true);
      // Status bar should have text (and thus visible)
      const statusBarItem = getStatusBarItem();
      // statusBarItem.text = 'asdasdasdasd';
      // statusBarItem.show();
      assert.ok(!!statusBarItem.text && statusBarItem.text.length);
    });
  });
});
