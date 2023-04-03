export class DiffieHellman {
  constructor(p: number, g: number) {
    if (p % 2 === 0 && g % 2 === 0) throw new Error('throws an error if the constructor arguments are not prime');
    if (g > p) throw new Error();
  }

  public getPublicKey(privateKey: unknown): unknown {
    throw new Error('Remove this statement and implement this function');
  }

  public getSecret(theirPublicKey: unknown, myPrivateKey: unknown): unknown {
    throw new Error('Remove this statement and implement this function');
  }
}