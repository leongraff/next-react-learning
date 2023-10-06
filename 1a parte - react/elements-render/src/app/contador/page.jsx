"use client"

import { useState } from "react";

export default function contador() {
    // let count = 0;

    const [valor, alteraValor] = useState(0);

    function alterarContador(sign) {
        if (sign == '+') {
            alteraValor(valor + 1);
        } else if (sign == '-') {
            alteraValor(valor - 1)
        }
    }

    return (
        <div className="flex justify-center flex-col">
            <h1 className="uppercase flex text-4xl font-bold text-white p-8">Contador</h1>
            <div className="flex flex-row justify-start text-4xl font-bold text-white p-8">Valor: {valor}</div>
            <div className="flex flex-row justify-start text-4xl font-bold text-white m-8">
                <button className="bg-black m-3 p-5" onClick={() => alterarContador("+")}>+</button>
                <button className="bg-black m-3 p-5" onClick={() => alteraValor(valor - 1)}>-</button>
                <button className="bg-black m-3 p-5" onClick={() => alteraValor(0)}>RESET</button>
                <button className="bg-black m-3 p-5" onClick={() => alteraValor(valor + 100)}>+100</button>
                <button className="bg-black m-3 p-5" onClick={() => alteraValor(valor - 100)}>-100</button>
            </div>
        </div>
    );
}