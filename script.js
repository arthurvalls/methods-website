// implementação do método de Jacobi
function jacobi() {

    // atribuir input do user à variável
    var a00 = parseFloat(document.getElementById('matrix00').value);
    var a01 = parseFloat(document.getElementById('matrix01').value);


    var a10 = parseFloat(document.getElementById('matrix10').value);
    var a11 = parseFloat(document.getElementById('matrix11').value);

    var A = [
        [a00, a01],
        [a10, a11]
    ]

    // atribuir input do user à variável
    var v00 = parseFloat(document.getElementById('array00').value);
    var v01 = parseFloat(document.getElementById('array01').value);

    var b = [v00, v01]


    // caso o user não dê um valor de entrada é atribuido 0 à variável nos dois seguintes for's
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

    // inicializa arrays de x e chute inicial
    var X = new Array();
    var x = new Array();

    // for para iniciar o chute como 0 
    for (var k = 0; k < b.length; k++) {
        X[k] = 0;
    }

    // if caso o user não dê entrada no valor da iteração ou o valor seja <= 0
    var iter = parseFloat(document.getElementById('iter').value);
    if (isNaN(iter) || iter <= 0) {
        document.getElementById('result').innerHTML = "Insira um valor positivo para iterações.";
        return 0;
    }
    // contador de iterações
    var contador = 0;

    // função roda até o número de iterações definido pelo user
    while (contador < iter) {
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
        contador = contador + 1;
    }

    // caso dê erro retorna erro, caso contrário retorna resultado para o html  
    if (isNaN(X[0]) || isNaN(X[1])) {
        document.getElementById('result').innerHTML = "Erro"
        return 0
    } else document.getElementById('result').innerHTML = "O resultado com Gauss-Jacobi é : [" + X[0] + ", " + X[1] + "]";
}


// implementação do método de Seidel
function seidel() {

    // atribuir input do user à variável
    var a00 = parseFloat(document.getElementById('matrix00').value);
    var a01 = parseFloat(document.getElementById('matrix01').value);


    var a10 = parseFloat(document.getElementById('matrix10').value);
    var a11 = parseFloat(document.getElementById('matrix11').value);


    var A = [
        [a00, a01],
        [a10, a11]
    ]


    // atribuir input do user à variável
    var v00 = parseFloat(document.getElementById('array00').value);
    var v01 = parseFloat(document.getElementById('array01').value);

    var b = [v00, v01]


    // caso o user não dê um valor de entrada é atribuido 0 à variável nos dois seguintes for's
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

    // inicializa arrays de x e chute inicial
    var X = new Array();
    var x = new Array();

    // for para iniciar o chute como 0 
    for (var l = 0; l < b.length; l++) {
        X[l] = 0;
    }

    // if caso o user não dê entrada no valor da iteração ou o valor seja <= 0
    var iter = parseFloat(document.getElementById('iter').value);
    if (isNaN(iter) || iter <= 0) {
        document.getElementById('result').innerHTML = "Insira um valor positivo para iterações.";
        return 0;
    }
    // contador de iterações
    var contador = 0;

    // função roda até o número de iterações definido pelo user
    while (contador < iter) {

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
        contador = contador + 1;
    }

    // caso dê erro retorna erro, caso contrário retorna resultado para o html 
    if (isNaN(X[0]) || isNaN(X[1])) {
        document.getElementById('result').innerHTML = "Erro"
        return 0
    } else document.getElementById('result').innerHTML = "O resultado com Gauss-Seidel é : [" + X[0] + ", " + X[1] + "]";
}



// função EDO definida pelo user
function f1(x, y) {
    return parseFloat(document.getElementById('valor_a').value) * (y + (parseFloat(document.getElementById('valor_b').value)));

}



// implementação do método de Euler
function euler() {

    // atribuir input do user à variável
    var xfinal = parseInt(document.getElementById('final_x').value);
    var h = parseFloat(document.getElementById('passo').value);
    var x = parseFloat(document.getElementById('x').value);
    var y = parseFloat(document.getElementById('y').value);

    // contador de iterações
    var contador = 0;

    // o programa roda até a margem de erro ser atingida
    while (xfinal - x > 0.001) {
        contador = contador + 1;

        x1 = x + h;
        y1 = y + h * f1(x, y);
        x = x1;
        y = y1;

    }


    // caso dê erro retorna erro, caso contrário retorna resultado para o html  
    if (isNaN(y)) {
        document.getElementById('result').innerHTML = "Erro no cálculo."
    }
    document.getElementById('result').innerHTML = "O resultado encontrado com Euler em " + contador + " iterações foi:\n" + y;
}


// implementação do método de Range-Kutta 2 Ordem
function range2() {

    // atribuir input do user à variável
    var xfinal = parseInt(document.getElementById('final_x').value);
    var h = parseFloat(document.getElementById('passo').value);
    var x = parseFloat(document.getElementById('x').value);
    var y = parseFloat(document.getElementById('y').value);

    // contador de iterações
    var contador = 0;

    // o programa roda até a margem de erro ser atingida
    while (xfinal - x > 0.001) {
        contador = contador + 1;

        x1 = x + h;
        y1 = y + (h / 2) * (f1(x, y) + f1(x + h, y + h * (f1(x, y))));
        x = x1;
        y = y1;

    }

    // caso dê erro retorna erro, caso contrário retorna resultado para o html 
    if (isNaN(y)) {
        document.getElementById('result').innerHTML = "Erro no cálculo.";
    }
    document.getElementById('result').innerHTML = "O resultado encontrado com Range-Kutta 2 ordem em " + contador + " iterações foi:\n" + y;

}


// implementação do método de Range-Kutta 4 Ordem
function range4() {

    // atribuir input do user à variável
    var xfinal = parseInt(document.getElementById('final_x').value);
    var h = parseFloat(document.getElementById('passo').value);
    var x = parseFloat(document.getElementById('x').value);
    var y = parseFloat(document.getElementById('y').value);

    // inicializa as variáveis do método
    var k1 = 0;
    var k2 = 0;
    var k3 = 0;
    var k4 = 0;

    // contador de iterações
    var contador = 0;

    // o programa roda até a margem de erro ser atingida
    while (xfinal - x > 0.001) {
        contador = contador + 1;

        x1 = x + h;
        k1 = h * f1(x, y);
        k2 = h * f1(x + (h / 2), y + (k1 / 2));
        k3 = h * f1(x + (h / 2), y + (k2 / 2));
        k4 = h * f1(x + h, y + k3);
        y1 = y + (k1 + (2 * k2) + (2 * k3) + k4) / 6;
        x = x1;
        y = y1;
    }

    // caso dê erro retorna erro, caso contrário retorna resultado para o html 
    if (isNaN(y)) {
        document.getElementById('result').innerHTML = "Erro no cálculo.";
    }
    document.getElementById('result').innerHTML = "O resultado encontrado com Range-Kutta 4 ordem em " + contador + " iterações foi:\n" + y;

}




// funcão polinomial entrada pelo user
function f(x) {
    return ((a_f) * (x ** 2)) + ((b_f) * x) + (c_f)
}



// implementação do método da Bissecção
function bissection() {

    // atribuir input do user à variável
    var a_f = parseFloat(document.getElementById('valor_a').value);
    var b_f = parseFloat(document.getElementById('valor_b').value);
    var c_f = parseFloat(document.getElementById('valor_c').value);

    // funcão polinomial entrada pelo user
    function f(x) {
        return (a_f) * (x ** 2) + (b_f) * x + (c_f);
    }

    // atribuir input dos intervalos do user à variável
    var intervalo1 = parseFloat(document.getElementById('intervalo1').value);
    var intervalo2 = parseFloat(document.getElementById('intervalo2').value);

    // if para checar se os sinais são opostos
    if (f(intervalo1) * f(intervalo2) >= 0) {
        document.getElementById('result').innerHTML = "Sinais não são opostos";

    }

    // contador de iterações
    var contador = 0;

    // tolerância de erro do método
    var tolerancia = 0.0001;

    // varíavel do resultado
    var x = 0;

    // o programa roda até que a margem de erro seja atingida
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

    // retorna resultado para o html
    document.getElementById('result').innerHTML = "Aproximação da raiz encontrada em " + contador + " iterações por Bissecção = " + x;
}


// implementação do método da Falsa-Posição
function false_position() {

    // atribuir input do user à variável
    var a_f = parseFloat(document.getElementById('valor_a').value);
    var b_f = parseFloat(document.getElementById('valor_b').value);
    var c_f = parseFloat(document.getElementById('valor_c').value);

    // funcão polinomial entrada pelo user
    function f(x) {
        return (a_f) * (x ** 2) + (b_f) * x + (c_f);
    }

    // atribuir input dos intervalos do user à variável
    var intervalo1 = parseFloat(document.getElementById('intervalo1').value);
    var intervalo2 = parseFloat(document.getElementById('intervalo2').value);


    // if para checar se os sinais são opostos
    if (f(intervalo1) * f(intervalo2) >= 0) {
        document.getElementById('result').innerHTML = "Sinais não são opostos";

    }

    // contador de iterações
    var contador = 0;

    // tolerância de erro do método
    var tolerancia = 0.0001;

    // variável do resultado
    var x = 0;

    // o programa roda até que a margem de erro seja atingida
    while ((intervalo2 - intervalo1) >= tolerancia) {

        x = (intervalo1 * f(intervalo2) - intervalo2 * f(intervalo1)) / (f(intervalo2) - f(intervalo1));

        contador = contador + 1;
        if (f(x) == 0) {
            document.getElementById('result').innerHTML = "Raiz exata encontrada em " + contador + " iterações por Falsa-Posição = " + x;
            return 0;
        }
        x = intervalo1 - f(intervalo1) * (intervalo2 - intervalo1) / (f(intervalo2) - f(intervalo1));
        if (f(x) * f(intervalo1) > 0) {
            intervalo1 = x;

        } else {
            intervalo2 = x;
        }
        if (Math.abs(f(x)) < tolerancia) {
            break;
        }
    }

    // retorna resultado para o html 
    document.getElementById('result').innerHTML = "Aproximação da raiz encontrada em " + contador + " iterações por Falsa-Posição = " + x;
}

// implementação do método das Secantes
function secant() {

    // atribuir input do user à variável
    var a_f = parseFloat(document.getElementById('valor_a').value);
    var b_f = parseFloat(document.getElementById('valor_b').value);
    var c_f = parseFloat(document.getElementById('valor_c').value);

    // funcão polinomial entrada pelo user
    function f(x) {
        return (a_f) * (x ** 2) + (b_f) * x + (c_f);
    }

    // atribuir input dos intervalos do user à variável
    var intervalo1 = parseFloat(document.getElementById('intervalo1').value);
    var intervalo2 = parseFloat(document.getElementById('intervalo2').value);

    // if para checar se os sinais são opostos
    if (f(intervalo1) * f(intervalo2) >= 0) {
        document.getElementById('result').innerHTML = "Sinais não são opostos";

    }

    // contador de iterações
    var contador = 0;

    // tolerância de erro do método
    var tolerancia = 0.0001;

    // variável do resultado
    var x = 0;

    // o programa roda até que a margem de erro seja atingida
    while ((intervalo2 - intervalo1) >= tolerancia) {

        x = intervalo1 - f(intervalo1) * (intervalo2 - intervalo1) / (f(intervalo2) - f(intervalo1));

        contador = contador + 1;

        if (f(x) == 0) {
            document.getElementById('result').innerHTML = "Raiz exata encontrada em " + contador + " iterações por Secante = " + x;
            return 0;
        } else {
            // principal diferença entre o método da falsa-posição, o intervalo a não é atualizado
            intervalo2 = x;
        }
        if (Math.abs(f(x)) < tolerancia) {
            break;
        }
    }

    // retorna resultado para o html 
    document.getElementById('result').innerHTML = "Aproximação da raiz encontrada em " + contador + " iterações por Secante = " + x;
}