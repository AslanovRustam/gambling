export function splitString(inputString: string): string[] {
  return Array.from(inputString);
}

export function splitStringByWord(inputString: string): string[] {
  return inputString.split(/(\s+)/);
}
