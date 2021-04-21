/**
 * This class will include various examples of the REST operator
 * and how it is used.
 */

// SPREAD, used to unpack an array. Used on right side of declaration.
// OUTPUT: Prints "1, 2, 3, 4, 5" all as one string.
// The [3, 4, 5] were unpacked with the spread operator.
const [a, b, c] = [1, 2, ...[3, 4, 5]];
console.log(a, b, c);

// REST, used to pack 'rest' of elements into separate array. Used on left side of declaration
// OUTPUT: Prints "1, 2, 3, [4, 5, 6]".
// First 3 elements are destructured into a, b, c.
// 4, 5, 6 are packed into others using REST
const [a, b, c, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c, others);
