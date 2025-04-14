function findPoint(
  px: number,
  py: number,
  qx: number,
  qy: number
): [number, number] {
  const rx = 2 * qx - px;
  const ry = 2 * qy - py;
  return [rx, ry];
}

const [rx, ry] = findPoint(0, 0, 1, 1);
console.log(rx, ry); // Output: 2 2
