export function parse(phrase: string): string {
	let result = '';
	const arrPhrase = phrase.split(' ');

	arrPhrase.forEach((word) => {
		result = result.concat(word[0]);
	});

	return result.toUpperCase();
}
