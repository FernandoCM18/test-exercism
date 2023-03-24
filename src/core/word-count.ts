export function count(phrase: string): Map<string, number> {
	const words = phrase.toLowerCase().split(/[\s,]+/);
	const wordCount = new Map<string, number>();

	if (words) {
		words.forEach((word) => {
			const count = wordCount.get(word) || 0;
			wordCount.set(word, count + 1);
		});
	}

	return wordCount;
}
