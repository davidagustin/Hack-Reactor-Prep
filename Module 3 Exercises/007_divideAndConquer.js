function binarySearch(array, target){
    if (array.length === 0) {
        return null
    }
    let mid = Math.floor(array.length / 2)
    if (array[mid] === target) {
        return mid
    } else if (array[mid] > target){
        // go left
        return binarySearch(array.slice(0 , mid), target)
    } else if (array[mid] < target) {
        // go right
        let searchRes = binarySearch(array.slice(mid + 1), target)
        return (searchRes === null) ? null : mid + 1 + searchRes
    }
}


