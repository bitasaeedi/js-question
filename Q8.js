let num = [22,8,6,3,4];
let n = num.length;
function sort(arr) {
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return [arr[0],arr[n-1]]
}

console.log(sort(num));
