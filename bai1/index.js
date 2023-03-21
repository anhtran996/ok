function checkArr(n, arr) {
    n = arr.length
    for(let i = 0; i < n/2; i++ ) {
        if (arr[i] !== arr[n - i - 1]) {
            return -1
        }
    }
    return 1
}

console.log(checkArr(4, [7,9,8,7]))
console.log(checkArr(5, [7,9,6,9,7]))