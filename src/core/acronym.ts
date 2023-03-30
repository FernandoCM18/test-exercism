export function parse(phrase: string): string {
	let result = '';
	const newPhrase = phrase.replace(/([a-z])([A-Z])/g, '$1 $2');
	const arrPhrase = newPhrase.split(' ');

	arrPhrase.forEach((word) => {
		result = result.concat(word[0]);
	});

	return result.toUpperCase();
}
