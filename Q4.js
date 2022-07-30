let a = [1, 5, 74, 24,29,50];
let c = a.length - 1;
function reverseArray(a) {
    let b = [];

    for (let i = 0; i < a.length; i++) {
        b[i] = a[c--];
    }
    return b;
}
console.log(reverseArray(a));

c = a.length - 1;
function reverseArrayInPlace(a) {
    let z;
    for (let i = 0; i < a.length / 2; i++) {
        z = a[i];
        a[i] = a[c];
        a[c--] = z;
    }
    return (a);
}
console.log(reverseArrayInPlace(a));