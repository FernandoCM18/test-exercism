export function isPangram(text: string): boolean {
  const lowerCaseText = text.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (const letter of alphabet) {
    if (!lowerCaseText.includes(letter)) {
      return false;
    }
  }

  return true;
}
