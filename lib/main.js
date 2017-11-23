function format(word, count) {
    return word +
        ' ' +
        count;
}
/**
 * Created by 徐涛焘 on 11/23/2017.
 */
function main(words) {
    if(words != ''){
        let wordArray = words.split(' ');
        if (words.indexOf(' ') > -1){
            return wordArray.map((w) => format(w,1)).join('\r\n');
        }
        return format(wordArray[0], 1);
    }
    return '';
}
module.exports = main;