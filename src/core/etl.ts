type OldScore = { [key: string]: string[] };
type NewScore = { [key: string]: number };

export function transform(old: OldScore): NewScore {
  const result: NewScore = {};
  Object.entries(old).forEach(([scores, letters]) => {
    const score = Number(scores);
    letters.forEach((letter) => {
      result[letter.toLowerCase()] = score;
    });
  });

  return result;
}
