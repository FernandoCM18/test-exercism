export class Triangle {
	constructor(public a: number, public b: number, public c: number) {}

	get isEquilateral() {
		return this.a === this.b && this.b === this.c ? true : false;
	}

	get isIsosceles() {
		throw new Error('Remove this statement and implement this function');
	}

	get isScalene() {
		throw new Error('Remove this statement and implement this function');
	}
}
