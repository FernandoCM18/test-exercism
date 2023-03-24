export function hey(message: string): string {
	if (message.trim() === '') {
		return 'Fine. Be that way!';
	}

	if (/^[0-9,\s]+$/.exec(message) !== null) {
		return 'Whatever.';
	}

	if (message.match(/\d/) && message.endsWith('?')) {
		return 'Sure.';
	}

	if (message.endsWith('?') && message === message.toUpperCase()) {
		// eslint-disable-next-line quotes
		return "Calm down, I know what I'm doing!";
	}

	if (message === message.toUpperCase()) {
		return 'Whoa, chill out!';
	}

	if (message.endsWith('?')) {
		return 'Sure.';
	}

	return 'Whatever.';
}
