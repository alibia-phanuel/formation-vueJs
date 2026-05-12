export function shuffleArray(array) {
  return array
    .map((item) => ({ value: item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value); // ✅ on destructure bien "value"
}
