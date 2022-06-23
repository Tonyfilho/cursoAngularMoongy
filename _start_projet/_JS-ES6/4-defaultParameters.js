// ES5
function xpto(x, y, z){
    x = x === undefined ? 1 : x ;
    y = y || 5; // or
    z = z || 10;  // or    (&& - AND)
}
xpto();

// es6
function xpto(x = 1 , y = 5, z = x + y){
    console.log(x, y, z);
}

xpto();