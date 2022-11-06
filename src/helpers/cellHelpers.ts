export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const matrix = (rows: number, cols: number, fill: string | number) =>
  new Array(cols).fill(fill).map(() => new Array(rows).fill(fill));
