export default function JangsquareRoot(Jnum, tolerance = 0) {
  if (Jnum < 0) {
    throw new Error('ERROR, JANGS. CANNOT FIND NEGATIVE.');
  }
  if (Jnum === 0) {
    return 0;
  }
  let root = 1;
  const requiredDelta = 1 / (10 ** tolerance);
  while (Math.abs(Jnum - (root ** 2)) > requiredDelta) {
    root -= ((root ** 2) - Jnum) / (2 * root);
  }
  return Math.round(root * (10 ** tolerance)) / (10 ** tolerance);
}
