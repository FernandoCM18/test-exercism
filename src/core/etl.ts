export function transform(old: { [key: string]: string[] }) {
	const [letter] = old[1][0];
	const [value] = Object.keys(old);
	const result = {
		[letter.toLowerCase()]: parseInt(value),
	};
	return result;
}
