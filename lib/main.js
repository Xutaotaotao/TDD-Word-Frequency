function format(word, count) {
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
        if (entry){
            entry.count++;
        }else {
            array.push({word:word,count:1})
        }
    });
    return array;
}

/**
 * Created by 徐涛焘 on 11/23/2017.
 */
function main(words) {
    if(words !== ''){
        let wordArray = words.split(' ');
        if (wordArray.length === 3){
            let groupedWords = group(wordArray);
            return format(groupedWords[0].word,groupedWords[0].count) +
                '\r\n' +
                format(groupedWords[1].word,groupedWords[1].count);
        }
        return wordArray.map((w) => format(w,1)).join('\r\n');
    }
    return '';
}
module.exports = main;