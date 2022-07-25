function handleSubmit(event) {
    if(!validate()) {
      event.preventDefault();
    }
    return;
  }

function norm(...numbers) {

    max_val = Math.max(...numbers);
    min_val = Math.min(...numbers);
    for(var i = 0; i < numbers.length;i++){
        numbers[i] = (numbers[i] - min_val)/(max_val - min_val);
    }
    return numbers;
}




function jacobi() {
var a00 = parseFloat(document.getElementById('matrix00').value);
var a01 = parseFloat(document.getElementById('matrix01').value);
// var a02 = parseFloat(document.getElementById('matrix02').value);

var a10 = parseFloat(document.getElementById('matrix10').value);
var a11 = parseFloat(document.getElementById('matrix11').value);
// var a12 = parseFloat(document.getElementById('matrix12').value);

// var a20 = parseFloat(document.getElementById('matrix20').value);
// var a21 = parseFloat(document.getElementById('matrix21').value);
// var a22 = parseFloat(document.getElementById('matrix22').value);

var A = [
    [a00, a01],
    [a10, a11]
]

var v00 = parseFloat(document.getElementById('array00').value);
var v01 = parseFloat(document.getElementById('array01').value);

var b = [v00, v01]

for(var h1=0;h1<A.length;h1++){
    for(var h =0;h<A.length;h++){
        if(isNaN(A[h1][h])){

           A[h1][h] = 0;
            
           
    
        }
    }
    }
    for(var t=0;t<b.length;t++){
        if(isNaN(b[t])){
            b[t] = 0;
    
        }
    }

// if (b || A == NaN) {
//     alert("Insira os valores.")
//     return 0;
// }

var X = new Array();
var x = new Array();
for (var k = 0; k < b.length; k++) {
    X[k] = 0; //Math.floor((Math.random() * 10000) + 1);
}

var m = parseFloat(document.getElementById('iter').value);
if(isNaN(m) || m <=0){
    document.getElementById('result').innerHTML = "Insira um valor positivo para iterações.";
    return 0;
}
var ni = 0; //Contador de iterações


while (ni < m) {
    for (var i = 0; i < b.length; i++) {
        soma = 0;
        for (var j = 0; j < b.length; j++) {
            if (j != i) {
                soma = soma + A[i][j] * X[j] / A[i][i];
            }
            x[i] = (b[i] / A[i][i]) - soma;
        }
    }
   
    X = x.slice(0);
    ni = ni + 1;
}

if(isNaN(X[0]) || isNaN(X[1])){
    document.getElementById('result').innerHTML = "Insira valores não nulos"
    return 0
}
else document.getElementById('result').innerHTML = "O resultado é : [" + X[0] + ", " + X[1] + "]";
}



function seidel() {

var a00 = parseFloat(document.getElementById('matrix00').value);
var a01 = parseFloat(document.getElementById('matrix01').value);
// var a02 = parseFloat(document.getElementById('matrix02').value);

var a10 = parseFloat(document.getElementById('matrix10').value);
var a11 = parseFloat(document.getElementById('matrix11').value);
// var a12 = parseFloat(document.getElementById('matrix12').value);

// var a20 = parseFloat(document.getElementById('matrix20').value);
// var a21 = parseFloat(document.getElementById('matrix21').value);
// var a22 = parseFloat(document.getElementById('matrix22').value);

var A = [
    [a00, a01],
    [a10, a11]
]

var v00 = parseFloat(document.getElementById('array00').value);
var v01 = parseFloat(document.getElementById('array01').value);

var b = [v00, v01]



for(var h1=0;h1<A.length;h1++){
for(var h =0;h<A.length;h++){
    if(isNaN(A[h1][h])){
       A[h1][h] = 0;
        
       

    }
}
}
for(var t=0;t<b.length;t++){
    if(isNaN(b[t])){
        b[t] = 0;

    }
}

var X = new Array();
var x = new Array();
for (var k = 0; k < b.length; k++)
{
    X[k] = 0; //Math.floor((Math.random() * 10000) + 1);
}
var E = 0.00001; //precisao, tolerância
var m = parseFloat(document.getElementById('iter').value);
if(isNaN(m) || m <=0){
    document.getElementById('result').innerHTML = "Insira um valor positivo para iterações.";
    return 0;
}
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
    document.getElementById('result').innerHTML = "Erro"
    return 0
}
else document.getElementById('result').innerHTML = "O resultado é : [" + X[0] + ", " + X[1] + "]";
}



