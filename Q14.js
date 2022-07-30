function makePlusFunction(a) {
   
    return  function plus(b) {
        return a + b;
    };
}

console.log(makePlusFunction(4));