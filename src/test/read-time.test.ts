import * as vscode from 'vscode';
import * as assert from 'assert';
import { allSetupAndTeardown } from './lib/setup-teardown-test-suite';
import { markdown } from './lib/test-data';
import { openFile } from './lib/open-file';
import { getReadingTime } from '../readtime';

export const executeCommand = vscode.commands.executeCommand;

suite('read time estimates', () => {
  allSetupAndTeardown();

  test(`when short text at default WPM, read time is ${
    markdown.short.minutes
  }`, async () => {
    const doc = await openFile('markdown', markdown.short.text);
    const result = getReadingTime(doc.getText());
    assert.equal(result.roundedMinutes, markdown.short.minutes);
  });

  test(`when medium text at default WPM, read time is ${
    markdown.medium.minutes
  }`, async () => {
    const doc = await openFile('markdown', markdown.medium.text);
    const result = getReadingTime(doc.getText());
    assert.equal(result.roundedMinutes, markdown.medium.minutes);
  });

  test(`when long text at default WPM, read time is ${
    markdown.long.minutes
  }`, async () => {
    const doc = await openFile('markdown', markdown.long.text);
    const result = getReadingTime(doc.getText());
    assert.equal(result.roundedMinutes, markdown.long.minutes);
  });
});
