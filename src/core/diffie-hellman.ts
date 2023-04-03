export class DiffieHellman {
  constructor(public p: number, public g: number) {
    if (p % 2 === 0 && g % 2 === 0) throw new Error('throws an error if the constructor arguments are not prime');
    if (g > p) throw new Error();
  }

  public getPublicKey(privateKey: number) {
    if (privateKey < 0) throw new Error();
    if (privateKey === 0 || privateKey === 1) throw new Error();
    if ( privateKey === this.p || privateKey > this.p ) throw new Error();
    const publicKey = this.modPow(this.g, privateKey, this.p);

    return publicKey;
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    if (theirPublicKey < 0 || theirPublicKey >= this.p) throw new Error();
    const secret = this.modPow(theirPublicKey, myPrivateKey, this.p);
    return secret;
  }

  modPow(base: number, exponent: number, modulus: number): number {
    if (modulus === 1) {
      return 0;
    }
    let result = 1;
    base = base % modulus;
    while (exponent > 0) {
      if (exponent % 2 === 1) {
        result = (result * base) % modulus;
      }
      exponent = Math.floor(exponent / 2);
      base = (base * base) % modulus;
    }
    return result;
  }
}
