let arr1 = [1,10];
let arr2 =  [2, 3, 4, 5, 6, 7, 8, 9];
function tuckIn(arr1,arr2) {
    
    return [arr1[0],...arr2,arr1[1]];
}
console.log(tuckIn(arr1,arr2));
