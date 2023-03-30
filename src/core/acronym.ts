export function parse(phrase: string): string {
	const removeHyphens = (word: string) => word.replace('-', '');
	const splitPhrase = (phrase: string) => phrase.replace(/([-a-z-])([-A-Z-])/g, '$1 $2').split(' ');
	const getFirstLetters = (word: string[]) =>
		word.reduce((result, word) => result.concat(removeHyphens(word)[0], ''), '');

	const upperCase = (word: string) => word.toUpperCase();

	return upperCase(getFirstLetters(splitPhrase(phrase)));
}
