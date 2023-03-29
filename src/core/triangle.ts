export class Triangle {
	constructor(public a: number, public b: number, public c: number) {}

	public isTriangle(): boolean {
		return (
			this.a > 0 &&
			this.b > 0 &&
			this.c > 0 &&
			this.a + this.b >= this.c &&
			this.b + this.c >= this.a &&
			this.a + this.c >= this.b
		);
	}

	get isEquilateral() {
		return this.isTriangle() && this.a === this.b && this.b === this.c ? true : false;
	}

	get isIsosceles() {
		throw new Error('Remove this statement and implement this function');
	}

	get isScalene() {
		throw new Error('Remove this statement and implement this function');
	}
}
