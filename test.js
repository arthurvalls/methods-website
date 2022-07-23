function norm(numbers) {

    ratio = Math.max.apply(Math, numbers) / 100;

    numbers = numbers.map(function(v) {
        return Math.round(v / ratio);
    });
}


// var Matrix = [
//     [2, 1],
//     [5, 7],
// ];


// var vetor = [11, 13];


function gaussJacobi() {
    var a00 = parseInt(document.getElementById('matrix00').value);
    var a01 = parseInt(document.getElementById('matrix01').value);
    var a10 = parseInt(document.getElementById('matrix10').value);
    var a11 = parseInt(document.getElementById('matrix11').value);

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
    var m = 500; //Numero máximo de iterações
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
    alert("O resultado é : [" + X[0] + ", " + X[1] + "]");
}