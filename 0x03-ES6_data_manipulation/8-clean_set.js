export default function cleanSet(set, startString) {
  if (!set || !(set instanceof Set) || !startString || !(typeof startString === 'string')) {
    return '';
  }
  if (startString.length === 0) {
    return '';
  }
  const toArray = Array.from(set);
  const slicedArray = [];
  for (const item of toArray) {
    if (item.startsWith(startString)) {
      const newString = item.slice(startString.length, item.length);
      slicedArray.push(newString);
    }
  }
  return slicedArray.join('-');
}
