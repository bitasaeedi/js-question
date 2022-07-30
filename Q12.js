let arr = [1, 2, "a", "b"];
let arr2 = [];
function NumbersArray(arr) {
    for (let i in arr) {
        let flag = true;
        if (typeof (arr[i]) == 'number') {

            for (const j in arr2) {
                if (arr[i] == arr[j]) {
                    flag = false;
                }
            }

            if (flag) { arr2.push(arr[i]); }
        }
    }
    return arr2;

}
console.log(NumbersArray(arr));
