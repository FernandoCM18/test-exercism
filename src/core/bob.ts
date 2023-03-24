enum ANSWERS {
	SURE = 'Sure.',
	WHOA = 'Whoa, chill out!',
	// eslint-disable-next-line quotes
	CALM = "Calm down, I know what I'm doing!",
	FINE = 'Fine. Be that way!',
	WHATEVER = 'Whatever.',
}

export function hey(message: string): string {
	if (message.trim() === '') {
		return ANSWERS.FINE;
	}

	if (/^[0-9,\s]+$/.exec(message) !== null) {
		return ANSWERS.WHATEVER;
	}

	if (message.match(/\d/) && message.endsWith('?')) {
		return ANSWERS.SURE;
	}

	if (message.endsWith('?') && message === message.toUpperCase()) {
		// eslint-disable-next-line quotes
		return ANSWERS.CALM;
	}

	if (message === message.toUpperCase()) {
		return ANSWERS.WHOA;
	}

	if (message.trim().endsWith('?')) {
		return ANSWERS.SURE;
	}

	return ANSWERS.WHATEVER;
}
