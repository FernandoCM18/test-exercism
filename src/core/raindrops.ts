export function convert(num: number): string {
	if (num % 3 === 0) {
		return 'Pling';
	}
	if (num % 5 === 0) {
		return 'Plang';
	}
	return num.toString();
}
