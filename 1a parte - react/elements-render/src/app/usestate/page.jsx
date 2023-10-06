"use client"

import { useState } from "react";

// usestate traz dois parametros, um que é o parametro alterado e outro que é a função que o altera



export default function usando() {

    const [x, alterarX] = useState(0);
    const [y, alterarY] = useState(0);

    function retornaEixo(evento) {
        alterarX(evento.clientX)
        alterarY(evento.clientY)

    }

    //onmousemove é o evento que chama retornaeixo


    return (
        <div onMouseMove={retornaEixo} className="bg-white h-[100vh] flex flex-col text-4xl justify-center items-center">
            <span>eixo x: {x}</span>
            <span>eixo y: {y}</span>
        </div>
    );
}