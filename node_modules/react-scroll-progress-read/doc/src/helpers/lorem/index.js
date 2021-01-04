/* inspired by https://github.com/fffilo/lorem-ipsum-js */
import wordsList from "./words";
/**
 * Get random number
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
export const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
/**
 * Get random words
 *
 * @param  {Number} length
 * @return {Array} array of random words
 */
export const getWords = (length) => {
    const arrayOfWords = [];
    // get random words
    while (arrayOfWords.length < length) {
        const key = Math.floor(Math.random() * wordsList.length);
        const rnd = wordsList[key];
        // if not word
        if (!rnd) {
            continue;
        }
        arrayOfWords.push(rnd);
    }
    return arrayOfWords;
};
/**
 * Generate sentence
 *
 * @param  {Number} length
 * @return {String} sentence
 */
export const getSentence = (length) => {
    // get array of word
    const words = getWords(length);
    // add comma(s) to sentence
    let index = getRandom(2, 12);
    while (index < words.length - 2) {
        words[index] += ",";
        index += getRandom(2, 12);
    }
    // uppercase first letter of first word
    words[0] = `${words[0].charAt(0).toUpperCase()}${words[0].slice(1)}`;
    return `${words.join(" ")}.`;
};
/**
 * Generate paragraph
 *
 * @param  {Number} length
 * @return {String}     paragraph
 */
export const getParagraph = (length = 60) => {
    let paragraph = "";
    // append sentences until limit is reached
    while (paragraph.slice(0, -1).split(" ").length < length) {
        paragraph += `${getSentence(getRandom(Math.random(), length))} `;
    }
    paragraph = paragraph.slice(0, -1);
    // remove words
    if (paragraph.split(" ").length > length) {
        const punct = paragraph.slice(-1);
        paragraph = paragraph
            .split(" ")
            .slice(0, length)
            .join(" ");
        paragraph = paragraph.replace(/,$/, "");
        paragraph += punct;
    }
    return paragraph;
};
//# sourceMappingURL=index.js.map