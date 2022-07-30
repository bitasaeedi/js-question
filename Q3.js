function countBs(str) {
    let n = 0;
    for (let i = 0; i < str.length; i++) {

        if (str.charAt(i) == "B") {
            ++n;
        }
    }
    return n;
}
console.log(countBs("Banana"));


function countChar(str, char) {
    let n = 0;
    for (let i = 0; i < str.length; i++) {

        if (str.charAt(i) == char) {
            ++n;
        }
    }
    return n;
}
console.log(countChar("Banana", "a"));
