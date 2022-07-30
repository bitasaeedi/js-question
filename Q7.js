let arr = [1, 2, 3, 4, 5];

function MyMap(arr, f) {
    let l = [];
    for (let i = 0; i < arr.length; i++) {
        l[i] = f(arr[i]);

    }
    return l;
}
console.log(MyMap(arr, function (a) { return a * 2; }));

function myFilter(arr, f) {
    let l = [];
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i])) {
            l.push(arr[i]);
        }
    }
    return l;
}
console.log(myFilter(arr, function (a) { return a > 3; }));

function myReduce(arr, f, c) {

   let s = arr[0] + arr[arr.length - 1] + 2 * c;
    for (let i = 0; i < arr.length - 1; i++) {
        s += f(arr[i], arr[i + 1]);
    }
    return s / 2;

}
console.log(myReduce(arr, function (a, b) { return (a + b); },0));
