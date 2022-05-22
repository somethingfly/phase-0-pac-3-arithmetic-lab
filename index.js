function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function increment(n) {
 //   n++;
 //   return n;
     return (n += 1);
}

function decrement(n) {
 //   n--;
 //   return n;
     return (n -= 1);
}

// console.log(parseInt("2.2222",10));
// console.log(parseInt("nonsense!",10));

function makeInt(string) {
    return parseInt(string,10);
}


function preserveDecimal(string) {
    return parseFloat(string);
}