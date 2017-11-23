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

        let count = 1;
        return format(words, 1);
    }
    return '';
}
module.exports = main;