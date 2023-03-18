export function hey(message: string): string {  

  if (message.match(/^[0-9,\s]+$/)) {
    return 'Whatever.';
  }

  if (message.endsWith('?') && message === message.toUpperCase()) {
    return "Calm down, I know what I'm doing!";
  }

  if (message === message.toUpperCase()) {
    return 'Whoa, chill out!';
  };

  if (message.endsWith('?')) {
    return 'Sure.';
  }

  return 'Whatever.';
}
