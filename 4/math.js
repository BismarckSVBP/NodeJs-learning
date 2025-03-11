function ram(a,b){
    return a+b;
}


function ravan(a,b){
    return a-b;
}

function shyam(a,b){
    return a*b;
}

function kansh(a,b){
    return a/b;
}

//here second module will overrite the first module so solve this problem we use objects instead of commented code below
// module.exports = ram;
// module.exports = ravan;


module.exports = {
    ram:ram,
    ravan,
    shyamFn:shyam,
  
}
// exports.kansh = (a,b) =>a/b;
// exports.kansh2 = (a,b) =>a%b;