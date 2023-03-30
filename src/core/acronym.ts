export function parse(phrase: string): string {
	let result = '';
	const newPhrase = phrase.replace(/([-a-z-])([-A-Z-])/g, '$1 $2');
	const arrPhrase = newPhrase.split(' ');

	arrPhrase.forEach((word) => {
		const wordWhithoutHyphen = word.replace('-', '');
		result = result.concat(wordWhithoutHyphen[0]);
	});

	return result.toUpperCase();
}
