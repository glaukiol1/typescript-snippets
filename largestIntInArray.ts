/**
 * @description Find the largest number in Array<number>
 * @param {Array<number>} array An array that consists of at least 1 string.
 * @return {Object} This function will return a Object containing data about the largest number found.
 */

 const solve = (array: Array<number>): object => {
    let currentLargestInt: number = -1;
    let currentIndexOfInt: number = -1;
    for (let i: number = 0; i < array.length; i++) {
        if (array[i] > currentLargestInt) {
            currentIndexOfInt = i;
            currentLargestInt = array[i];
        }
    }

    return {number: currentLargestInt, index: currentIndexOfInt}
}

export default solve;
