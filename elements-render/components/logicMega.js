"use client"

export default function mega(qnt = 6, numeros = []) {
    qnt = +qnt
    if (qnt < 6 && qnt > 60) {
        throw "Quantidade inválida!"
    }
    //se bateu com a quantidade ele retorna a array
    if (numeros.length == qnt) {
        return numeros.sort((n1, n2) => n1 - n2)
    }
    // cria o aleatorio
    const randomNumber = parseInt(Math.random() * 60) + 1

    //chama recursivamente a função com o item a mais na array se a array ja 
    //nao inclui o randomNumber em questão
    if (!numeros.includes(randomNumber)) {
        return mega(qnt, [...numeros, randomNumber]);

        //do contrário, retorna a quantidade e os numeros
    } else {
        return mega(qnt, numeros)
    }
}
console.log(mega(6))
