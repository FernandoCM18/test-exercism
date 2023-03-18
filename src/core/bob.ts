export function hey(message: string): string {
  if (message === message.toUpperCase()) {
    return 'Whoa, chill out!';
  }
  return 'Whatever.';
}
