export function hey(message: string): string {

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
