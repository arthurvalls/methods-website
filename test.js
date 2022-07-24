function norm(...numbers) {

    max_val = Math.max(...numbers);
    min_val = Math.min(...numbers);
    for(var i = 0; i < numbers.length;i++){
        numbers[i] = (numbers[i] - min_val)/(max_val - min_val);
    }
    return numbers;
}




function jacobi() {
var a00 = parseInt(document.getElementById('matrix00').value);
var a01 = parseInt(document.getElementById('matrix01').value);
// var a02 = parseInt(document.getElementById('matrix02').value);

var a10 = parseInt(document.getElementById('matrix10').value);
var a11 = parseInt(document.getElementById('matrix11').value);
// var a12 = parseInt(document.getElementById('matrix12').value);

// var a20 = parseInt(document.getElementById('matrix20').value);
// var a21 = parseInt(document.getElementById('matrix21').value);
// var a22 = parseInt(document.getElementById('matrix22').value);

var A = [
    [a00, a01],
    [a10, a11]
]

var v00 = parseInt(document.getElementById('array00').value);
var v01 = parseInt(document.getElementById('array01').value);

var b = [v00, v01]

// if (b || A == NaN) {
//     alert("Insira os valores.")
//     return 0;
// }

var X = new Array();
var x = new Array();
for (var k = 0; k < b.length; k++) {
    X[k] = 0; //Math.floor((Math.random() * 10000) + 1);
}

var E = 0.00001; //Precisão
var m = parseInt(document.getElementById('iter').value);
var ni = 0; //Contador de iterações
var continuar = true;

while (continuar && ni < m) {
    for (var i = 0; i < b.length; i++) {
        soma = 0;
        for (var j = 0; j < b.length; j++) {
            if (j != i) {
                soma = soma + A[i][j] * X[j] / A[i][i];
            }
            x[i] = (b[i] / A[i][i]) - soma;
        }
    }
    if (Math.abs(norm(x) - norm(X)) < E) {
        continuar = false;
    } else {
        X = x.slice(0);
    }
    ni = ni + 1;
}

if(isNaN(X[0]) || isNaN(X[1])){
    document.getElementById('result').innerHTML = "Insira valores não nulos"
    return 0
}
else document.getElementById('result').innerHTML = "O resultado é : [" + X[0] + ", " + X[1] + "]";
}



function seidel() {

console.log("ta chegando aqui");
var a00 = parseInt(document.getElementById('matrix00').value);
var a01 = parseInt(document.getElementById('matrix01').value);
// var a02 = parseInt(document.getElementById('matrix02').value);

var a10 = parseInt(document.getElementById('matrix10').value);
var a11 = parseInt(document.getElementById('matrix11').value);
// var a12 = parseInt(document.getElementById('matrix12').value);

// var a20 = parseInt(document.getElementById('matrix20').value);
// var a21 = parseInt(document.getElementById('matrix21').value);
// var a22 = parseInt(document.getElementById('matrix22').value);

var A = [
    [a00, a01],
    [a10, a11]
]

var v00 = parseInt(document.getElementById('array00').value);
var v01 = parseInt(document.getElementById('array01').value);

var b = [v00, v01]


var X = new Array();
var x = new Array();
for (var k = 0; k < b.length; k++)
{
    X[k] = 0; //Math.floor((Math.random() * 10000) + 1);
}
var E = 0.00001; //precisao, tolerância
var m = parseInt(document.getElementById('iter').value);
var ni = 0; //contador de iterações
var continuar = true;

while (continuar && ni < m) {
    for (var i=0; i < b.length; i++) {
        soma = 0;
        for (var j = 0; j < i; j++) {
                soma = soma + A[i][j] * x[j];
        }
        for (var j = i + 1; j < b.length; j++) {
                soma = soma + A[i][j] * X[j];
        }
    x[i] = (b[i] - soma) / A[i][i];
    }
    // se | x - xo | < Tolerância
    if (Math.abs(norm(x) - norm(X)) < E) {
        continuar = false;
    } else {
        X=x.slice(0);
    }
    ni = ni + 1;
}

if(isNaN(X[0]) || isNaN(X[1])){
    document.getElementById('result').innerHTML = "Insira valores não nulos"
    return 0
}
else document.getElementById('result').innerHTML = "O resultado é : [" + X[0] + ", " + X[1] + "]";
}



