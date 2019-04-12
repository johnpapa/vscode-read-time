import { workspace } from 'vscode';

export async function openFile(language: string, content: string) {
  const options = {
    content,
    language
  };
  const doc = await workspace.openTextDocument(options);
  return doc;
}
