export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function randomInt(max) {
  return Math.floor(Math.random() * max);
}

export function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
