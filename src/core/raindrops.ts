const RULES = new Map<string, number>();
RULES.set('Pling', 3);
RULES.set('Plang', 5);
RULES.set('Plong', 7);

export function convert(num: number): string {
	let result = '';
	RULES.forEach((factor, word) => {
		if (num % factor === 0) {
			result += word;
		}
	});

	return result || num.toString();
}
