'use client'

var valor; // Variável global para armazenar o valor

function acao1() {
    console.log("helllooo")
}

function pegaValue(e) {
    valor = e.target.value; // Armazena o valor na variável global
    console.log(valor);
}

function pegarEvento() {
    alert(valor); // Acessa o valor da variável global
}

export default function click() {
    return (
        <div>
            <button onClick={acao1} className="h-12 p-6 m-2  bg-white flex items-center">Click</button>
            <input id='xx' type="text" onChange={pegaValue}></input>
            <button onClick={pegarEvento} className="h-12 p-6 m-2  bg-white flex items-center">Click2</button>
        </div>
    )
}

