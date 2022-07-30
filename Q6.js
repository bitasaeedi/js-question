function MyEvery(arr, f) {

    for (const i in arr) {
        if (!f(arr[i])) {
            return false;
        }
    }
    return true;
}
console.log(MyEvery([1, 3, 2, 6], function (i) { return i >= 1 }));
