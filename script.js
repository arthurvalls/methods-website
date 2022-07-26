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

    for (var h1 = 0; h1 < A.length; h1++) {
        for (var h = 0; h < A.length; h++) {
            if (isNaN(A[h1][h])) {

                A[h1][h] = 0;



            }
        }
    }
    for (var t = 0; t < b.length; t++) {
        if (isNaN(b[t])) {
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
    if (isNaN(m) || m <= 0) {
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

    if (isNaN(X[0]) || isNaN(X[1])) {
        document.getElementById('result').innerHTML = "Insira valores não nulos"
        return 0
    } else document.getElementById('result').innerHTML = "O resultado com Gauss-Jacobi é : [" + X[0] + ", " + X[1] + "]";
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



    for (var q = 0; q < A.length; q++) {
        for (var w = 0; w < A.length; w++) {
            if (isNaN(A[q][w])) {
                A[q][w] = 0;



            }
        }
    }
    for (var g = 0; g < b.length; g++) {
        if (isNaN(b[g])) {
            b[g] = 0;

        }
    }

    var X = new Array();
    var x = new Array();
    for (var l = 0; l < b.length; l++) {
        X[l] = 0; //Math.floor((Math.random() * 10000) + 1);
    }

    var m = parseFloat(document.getElementById('iter').value);
    if (isNaN(m) || m <= 0) {
        document.getElementById('result').innerHTML = "Insira um valor positivo para iterações.";
        return 0;
    }
    var ni = 0; //contador de iterações


    while (ni < m) {
        for (var i = 0; i < b.length; i++) {
            soma = 0;
            for (var j = 0; j < i; j++) {
                soma = soma + A[i][j] * x[j];
            }
            for (var j = i + 1; j < b.length; j++) {
                soma = soma + A[i][j] * X[j];
            }
            x[i] = (b[i] - soma) / A[i][i];
        }


        X = x.slice(0);
        ni = ni + 1;
    }

    if (isNaN(X[0]) || isNaN(X[1])) {
        document.getElementById('result').innerHTML = "Erro"
        return 0
    } else document.getElementById('result').innerHTML = "O resultado com Gauss-Seidel é : [" + X[0] + ", " + X[1] + "]";
}



function f(x, y) {
    return parseFloat(document.getElementById('intervalo1').value) * (y + (parseFloat(document.getElementById('valor_b').value)));

}




function euler() {

    var xfinal = parseInt(document.getElementById('final_x').value);
    var h = parseFloat(document.getElementById('passo').value);
    var x = parseFloat(document.getElementById('x').value);
    var y = parseFloat(document.getElementById('y').value);
    var contador = 0;

    while (xfinal - x > 0.001) {
        contador = contador + 1;

        x1 = x + h;
        y1 = y + h * f(x, y);
        x = x1;
        y = y1;

    }

    if (isNaN(y)) {
        document.getElementById('result').innerHTML = "Erro no cálculo."
    }
    document.getElementById('result').innerHTML = "O resultado encontrado com Euler em " + contador + " iterações foi:\n" + y;
}


function range2() {

    var xfinal = parseInt(document.getElementById('final_x').value);
    var h = parseFloat(document.getElementById('passo').value);
    var x = parseFloat(document.getElementById('x').value);
    var y = parseFloat(document.getElementById('y').value);
    var contador = 0;

    while (xfinal - x > 0.001) {
        contador = contador + 1;

        x1 = x + h;
        y1 = y + (h / 2) * (f(x, y) + f(x + h, y + h * (f(x, y))));
        x = x1;
        y = y1;

    }

    if (isNaN(y)) {
        document.getElementById('result').innerHTML = "Erro no cálculo.";
    }
    document.getElementById('result').innerHTML = "O resultado encontrado com Range-Kutta 2 ordem em " + contador + " iterações foi:\n" + y;

}


function range4() {

    var xfinal = parseInt(document.getElementById('final_x').value);
    var h = parseFloat(document.getElementById('passo').value);
    var x = parseFloat(document.getElementById('x').value);
    var y = parseFloat(document.getElementById('y').value);
    var k1 = 0;
    var k2 = 0;
    var k3 = 0;
    var k4 = 0;
    var contador = 0;

    while (xfinal - x > 0.001) {
        contador = contador + 1;

        x1 = x + h;
        k1 = h * f(x, y);
        k2 = h * f(x + (h / 2), y + (k1 / 2));
        k3 = h * f(x + (h / 2), y + (k2 / 2));
        k4 = h * f(x + h, y + k3);
        y1 = y + (k1 + (2 * k2) + (2 * k3) + k4) / 6;
        x = x1;
        y = y1;
    }

    if (isNaN(y)) {
        document.getElementById('result').innerHTML = "Erro no cálculo.";
    }
    document.getElementById('result').innerHTML = "O resultado encontrado com Range-Kutta 4 ordem em " + contador + " iterações foi:\n" + y;

}


var a_f = parseFloat(document.getElementById('valor_a').value);
var b_f = parseFloat(document.getElementById('valor_b').value);
var c_f = parseFloat(document.getElementById('valor_c').value);


function f(x) {
    return ((a_f) * (x ** 2)) + ((b_f) * x) + (c_f)
}




function bissection() {

    var a_f = parseFloat(document.getElementById('valor_a').value);
    var b_f = parseFloat(document.getElementById('valor_b').value);
    var c_f = parseFloat(document.getElementById('valor_c').value);

    function f(x) {
        return (a_f) * (x ** 2) + (b_f) * x + (c_f);
    }

    var intervalo1 = parseFloat(document.getElementById('intervalo1').value);
    var intervalo2 = parseFloat(document.getElementById('intervalo2').value);
    if (f(intervalo1) * f(intervalo2) >= 0) {
        document.getElementById('result').innerHTML = "Sinais não são opostos";

    }
    var contador = 0;
    var tolerancia = 0.00000001;
    var x = 0;
    while ((intervalo2 - intervalo1) / 2 >= tolerancia) {
        contador = contador + 1;
        x = intervalo1 + (intervalo2 - intervalo1) / 2;
        if (f(x) == 0) {
            document.getElementById('result').innerHTML = "Raiz exata encontrada em " + contador + " iterações por Bissecção = " + x;
            return 0;
        }

        if (f(x) * f(intervalo1) > 0) {
            intervalo1 = x;

        } else {
            intervalo2 = x;
        }
    }

    document.getElementById('result').innerHTML = "Aproximação da raiz encontrada em " + contador + " iterações por Bissecção = " + x;
}


function false_position() {

    var a_f = parseFloat(document.getElementById('valor_a').value);
    var b_f = parseFloat(document.getElementById('valor_b').value);
    var c_f = parseFloat(document.getElementById('valor_c').value);

    function f(x) {
        return (a_f) * (x ** 2) + (b_f) * x + (c_f);
    }

    var intervalo1 = parseFloat(document.getElementById('intervalo1').value);
    var intervalo2 = parseFloat(document.getElementById('intervalo2').value);
    if (f(intervalo1) * f(intervalo2) >= 0) {
        document.getElementById('result').innerHTML = "Sinais não são opostos";

    }
    var contador = 0;
    var tolerancia = 0.01;
    var x = 0;
    while ((intervalo2 - intervalo1) >= tolerancia) {
        x = intervalo1 - f(intervalo1) * (intervalo2 - intervalo1) / (f(intervalo2) - f(intervalo1));
        contador = contador + 1;
        if (f(x) == 0) {
            document.getElementById('result').innerHTML = "Raiz exata encontrada em " + contador + " iterações por Falsa-Posição = " + x;
            return 0;
        }
        if (f(x) * f(intervalo1) > 0) {
            intervalo1 = x;

        } else {
            intervalo2 = x;
        }
        if (Math.abs(f(x)) < tolerancia) {
            break;
        }
    }
    document.getElementById('result').innerHTML = "Aproximação da raiz encontrada em " + contador + " iterações por Falsa-Posição = " + x;
}


function secant() {


    var a_f = parseFloat(document.getElementById('valor_a').value);
    var b_f = parseFloat(document.getElementById('valor_b').value);
    var c_f = parseFloat(document.getElementById('valor_c').value);

    function f(x) {
        return (a_f) * (x ** 2) + (b_f) * x + (c_f);
    }

    var intervalo1 = parseFloat(document.getElementById('intervalo1').value);
    var intervalo2 = parseFloat(document.getElementById('intervalo2').value);
    if (f(intervalo1) * f(intervalo2) >= 0) {
        document.getElementById('result').innerHTML = "Sinais não são opostos";

    }
    var contador = 0;
    var tolerancia = 0.0001;
    var x = 0;
    while ((intervalo2 - intervalo1) >= tolerancia) {
        x = intervalo1 - f(intervalo1) * (intervalo2 - intervalo1) / (f(intervalo2) - f(intervalo1));
        contador = contador + 1;
        if (f(x) == 0) {
            document.getElementById('result').innerHTML = "Raiz exata encontrada em " + contador + " iterações por Secante = " + x;
            return 0;
        } else {
            intervalo2 = x;
        }
        if (Math.abs(f(x)) < tolerancia) {
            break;
        }
    }
    document.getElementById('result').innerHTML = "Aproximação da raiz encontrada em " + contador + " iterações por Secante = " + x;
}