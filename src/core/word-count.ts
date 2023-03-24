/* eslint-disable quotes */
export function count(phrase: string): Map<string, number> {
	const wordRegex = new RegExp("[0-9A-Za-z?]+(?:'[0-9A-Za-z?]+)?", 'g');
	const words = phrase.match(wordRegex);
	const wordCount = new Map<string, number>();

	if (words === null) {
		return wordCount;
	}
	words.forEach((word) => {
		const searchWord = word.toLowerCase();
		const countValue = wordCount.get(searchWord);
		wordCount.set(searchWord, (countValue ?? 0) + 1);
	});
	return wordCount;
}
