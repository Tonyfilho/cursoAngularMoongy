
// ES5

var a = 12;

function myFunction(){
    console.log("Dentro da funcao, valor do a:", a);

    var b = 13;
    console.log("Dentro da funcao, valor do b:", b);

    if (true){
        var c = 15;
    }

    console.log("Dentro da funcao, valor do c:", c);
}

myFunction();

//console.log("Dentro da funcao, valor do b:", b);