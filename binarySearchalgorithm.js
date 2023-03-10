function binaraySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === arr[middleIndex]) {
            return middleIndex
        }
        if (target < middleIndex) {
            rightIndex = middleIndex - 1;
        }
        if (target > middleIndex) {
            leftIndex = middleIndex + 1;
        }
    }
    return -1
}
console.log(binaraySearch([1, 2, 5, 8, 10], 1))