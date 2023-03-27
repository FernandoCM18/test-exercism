export function reverse(message: string): string {
	const splitMessage = message.split('');
	const arrayMessage = splitMessage.reverse();
	const joinMesage = arrayMessage.join('');
	return joinMesage;
}
