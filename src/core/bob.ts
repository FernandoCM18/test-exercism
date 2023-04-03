enum ANSWERS {
	SURE = 'Sure.',
	WHOA = 'Whoa, chill out!',
	// eslint-disable-next-line quotes
	CALM = "Calm down, I know what I'm doing!",
	FINE = 'Fine. Be that way!',
	WHATEVER = 'Whatever.',
}

export function hey(message: string): string {
  const isSilence = message.trim() === '';
  const isNumeric = /^[0-9,\s]+$/.test(message);
  const isQuestion = message.trim().endsWith('?');
  const isShouting = message === message.toUpperCase() && /[A-Za-z]/.test(message);
  const isShoutingQuestion = isShouting && isQuestion;

  if (isSilence) return ANSWERS.FINE;
  if (isNumeric) return ANSWERS.WHATEVER;
  if (isShoutingQuestion) return ANSWERS.CALM;
  if (isQuestion) return ANSWERS.SURE;
  if (isShouting) return ANSWERS.WHOA;

  return ANSWERS.WHATEVER;
}
