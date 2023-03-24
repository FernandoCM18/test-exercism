export interface DnDCharacterAbilityScores {
	strength: number;
	dexterity: number;
	constitution: number;
	intelligence: number;
	wisdom: number;
	charisma: number;
}

export class DnDCharacter {
	public strength: number;
	public dexterity: number;
	public constitution: number;
	public intelligence: number;
	public wisdom: number;
	public charisma: number;
	public hitpoints: number;

	constructor() {
		this.strength = DnDCharacter.generateAbilityScore();
		this.dexterity = DnDCharacter.generateAbilityScore();
		this.constitution = DnDCharacter.generateAbilityScore();
		this.intelligence = DnDCharacter.generateAbilityScore();
		this.wisdom = DnDCharacter.generateAbilityScore();
		this.charisma = DnDCharacter.generateAbilityScore();
		this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
	}

	public static generateAbilityScore(): number {
		const scores = [];
		for (let i = 0; i < 4; i++) {
			const score = Math.floor(Math.random() * 6) + 1;
			scores.push(score);
		}
		return this.sumTopThree(scores);
	}

	public static sumTopThree(scores: number[]): number {
		return scores
			.sort((a, b) => b - a)
			.slice(0, 3)
			.reduce((acc, curr) => acc + curr, 0);
	}

	public static getModifierFor(abilityValue: number): number {
		return Math.floor((abilityValue - 10) / 2);
	}
}
