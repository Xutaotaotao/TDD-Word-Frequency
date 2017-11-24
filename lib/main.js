/**
 * Created by 徐涛焘 on 11/23/2017.
 */
function formatWordAndCount(word, count) {
    return word +
        ' ' +
        count;
}

function group(wordArray) {
    /*reduce 方法/
    return wordArray.reduce((array,word) => {
        "use strict";
        let entry = array.find((e) => e.word === word);
        if (entry){
            entry.count++;
        }else {
            array.push({word:word,count:1})
        }
        return array;
    },[]);
    */

    // forEach方法
    let array = [];
    wordArray.forEach((word) => {
        "use strict";
        let entry = array.find((e) => e.word === word);
        if (entry) {
            entry.count++;
        } else {
            array.push({word: word, count: 1})
        }
    });
    return array;
}

function split(words) {
    return words.split(/\s+/);
}

function sort(groupedWords) {
    groupedWords.sort((x, y) => y.count - x.count);
}

function format(groupedWords) {
    return groupedWords.map((e) => formatWordAndCount(e.word, e.count)).join('\r\n');
}


function main(words) {
    if (words !== '') {
        let wordArray = split(words);
        let groupedWords = group(wordArray);
        sort(groupedWords);
        return format(groupedWords);
    }
    return '';
}

module.exports = main;