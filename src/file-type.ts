import { getFileTypesSetting } from './configuration';

export function matchesFileType(languageId: string) {
  const fileTypes = getFileTypesSetting();
  const matches = fileTypes.includes(languageId);
  return matches;
}
