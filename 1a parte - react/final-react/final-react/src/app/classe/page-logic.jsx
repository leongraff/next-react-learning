"use client"

import { useEffect, useState } from "react";
import RoundDisplay from "../components/RoundDisplay";
import mega from "../components/logicMega"

export default function MegaSena() {
    const [qtde, setQtde] = useState(6)
    const [valor, setValor] = useState([])

    useEffect(() => {
        setValor(mega())
    }, [])

    function renderNumeros() {
        return valor.map(n => <RoundDisplay key={n} numero={n} />)
    }

    function gerarNovosNumeros() {
        const novosNumeros = mega(qtde);
        setValor(novosNumeros);
    }




    return (
        <div className="flex justify-center items-center p-8 m-3 flex-col">
            <div className="flex flex-row flex-wrap justify-center items-center">
                {renderNumeros()}
            </div>
            <div className="p-8">
                <input type="number" min={6} max={20} value={qtde} onChange={(e) => setQtde(e.target.value)} className="text-black" />
                <button onClick={() => gerarNovosNumeros()}>Gerar Números</button>
            </div>
        </div>

    );
}