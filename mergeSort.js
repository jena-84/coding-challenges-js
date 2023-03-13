function mergeSortAlgorithm(arr) {
    if (arr.length < 2) {
      return arr
    } else {
      let mid = Math.floor(arr.length / 2);
      let leftArr = arr.slice(0, mid)
      let rightArr = arr.slice(mid)
      return merge(mergeSortAlgorithm(leftArr), mergeSortAlgorithm(rightArr))
    }
  }
  function merge(leftArr, rightArr) {
    let result = []
    while (leftArr, rightArr) {
      if (leftArr[0] < rightArr[0]) {
        result.push(leftArr.shift())
      } else {
        result.push(rightArr.shift())
      }
    }
    return [...result, ...leftArr, ...rightArr]
  }
  
  console.log(mergeSortAlgorithm([1, -8, 4, -1, 0, 10, 9]))