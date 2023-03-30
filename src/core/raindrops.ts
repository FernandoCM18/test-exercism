export function convert(num: number): string {
	if (num % 3 === 0) {
		return 'Pling';
	}
	return num.toString();
}
