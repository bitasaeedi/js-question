let arr = ["may", "april", "september", "august"];
n=arr.length;
function SortByLength(arr){
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j].length > arr[j + 1].length ) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(SortByLength(arr));