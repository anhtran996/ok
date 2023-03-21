function checkNumber(N){
    if(N < 1 || N > 1000) return -1;
    if(N < 10 ) return 1;
    if(N < 1000) return  Math.ceil(N/9)
}

console.log(`so lan ran nem cua duy: ${checkNumber(888)}`)
console.log(`so lan ran nem cua duy: ${checkNumber(222)}`)
console.log(`so lan ran nem cua duy: ${checkNumber(9)}`)