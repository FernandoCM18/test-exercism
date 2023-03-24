/* eslint-disable quotes */
export function count(phrase: string): Map<string, number> {
	const words = phrase.toLowerCase().split(/[\s,]+/);
	const wordCount = new Map<string, number>();

	if (words) {
		words.forEach((word) => {
			const wordWhithoutSpecialCharacters = word.replace(/[^\w\s']/gi, '');
			const wordWhitApostrophes = wordWhithoutSpecialCharacters.replace(/^'|'$/g, '');
			const count = wordCount.get(wordWhitApostrophes) || 0;
			wordCount.set(wordWhitApostrophes, count + 1);
		});
	}

	return wordCount;
}
