let arr1 = [1, 2, 3, 4];
let arr2 = [0,6];
function CanNest(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        if (!(arr1[i] > arr2[0] && arr1[i] < arr2[1]) && arr2[1] >= arr2[0]) {
            return false;
        }
        else if (!(arr1[i] > arr2[1] && arr1[i] < arr2[0]) && arr2[0] > arr2[1]) {
            return false;
        }
        
    }
    return true;
}
console.log(CanNest(arr1, arr2));
