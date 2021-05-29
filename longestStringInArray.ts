/**
 * @description Find the longest String[] in a Array<string>.
 * @param {Array<string>} array An array that consists of at least 1 string.
 * @return {Object} This function will return a Object containing data about the longest string found.
 */

const solve = (array: Array<string>) => {
    let currentLongestString: string = '';
    let currentIndexOfString: number = -1;
    let currentStringSize: number = -1;
    for (let i: number = 0; i < array.length; i++) {
        if (array[i].length > currentStringSize) {
            currentStringSize = array[i].length;
            currentIndexOfString = i;
            currentLongestString = array[i];
        }
    }

    return {string: currentLongestString, index: currentIndexOfString, size: currentStringSize}
}

export default solve;
