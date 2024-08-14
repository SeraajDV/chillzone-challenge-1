/**
 * Doubles every second integer in a list, starting from the left.
 *
 * @param {Array<number>} a - The input list of integers.
 * @return {Array<number>} A new list with every second integer doubled.
 */
function doubleEveryOther(a) {
  return a.map((e, i) => i % 2 == 0 ? e : e * 2)
}

doubleEveryOther([1, 2, 3, 4])