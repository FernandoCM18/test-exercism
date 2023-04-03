export class DiffieHellman {
  constructor(p: number, g: number) {
    if (g > p) throw new Error();
  }

  public getPublicKey(privateKey: unknown): unknown {
    throw new Error('Remove this statement and implement this function');
  }

  public getSecret(theirPublicKey: unknown, myPrivateKey: unknown): unknown {
    throw new Error('Remove this statement and implement this function');
  }
}
