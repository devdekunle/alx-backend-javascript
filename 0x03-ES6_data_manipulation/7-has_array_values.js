export default function hasValuesFromArray(set, array) {
  if (set instanceof Set && Array.isArray(array)) {
    let value = true;
    for (const item of array) {
      if (!set.has(item)) {
        value = false;
      }
    }
    return value;
  }
  throw new Error('arguments must be a set and an array');
}
