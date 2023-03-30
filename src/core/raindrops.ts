export function convert(num: number): string {
	if (num % 3 === 0) {
		return 'Pling';
	}
	if (num % 5 === 0) {
		return 'Plang';
	}

	if (num % 7 === 0) {
		return 'Plong';
	}
	return num.toString();
}
