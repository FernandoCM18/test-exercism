export function count(phrase: string): Map<string, number> {
	const words = phrase.toLowerCase().split(/[\s,]+/);
	const wordCount = new Map<string, number>();

	if (words) {
		words.forEach((word) => {
			const wordWhithoutSpecialCharacters = word.replace(/[^\w\s]/gi, '');
			console.log(wordWhithoutSpecialCharacters);

			const count = wordCount.get(wordWhithoutSpecialCharacters) || 0;
			wordCount.set(wordWhithoutSpecialCharacters, count + 1);
		});
	}

	return wordCount;
}
