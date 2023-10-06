"use client"

export default function testeboot() {
    var z = 10
    function recursiva(n) {
        for (let i = 0; i <= n; n++) {
            console.log("*")
        }
    }
    recursiva(z);
    return (
        <div>
            teste
        </div>

    )
}

/*

        var myArray = [1296, 4, 4096, 6];
        var lastNumber = myArray[myArray.length - 1];
        lastNumber += 2;
        var firstSquare = lastNumber * lastNumber;
        var secondSquare = firstSquare * firstSquare;
        myArray.push(secondSquare);
        myArray.push(lastNumber);

        =========================

            let x = 8;
    let y = 0;
    let a = 5;

    do {
        y = x + a;
        x = x / 2;
        a = a + x + y;
        console.log(x)
        console.log(a)

    } while (x > 1);
    console.log(a)
===========================================
        function numerosIntercalados(n) {
        for (let i = 1; i <= n; i++) {
            let linha = '';
            for (let j = 1; j <= n; j++) {
                if ((i + j) % 2 === 0) {
                    linha += '0';
                } else {
                    linha += '1';
                }
            }
            console.log(linha);
        }
    }

    const n = 5; // Substitua 5 pelo número desejado
    numerosIntercalados(n);



*/