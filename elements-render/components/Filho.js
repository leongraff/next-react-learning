"use client"

export default function Filho(props) {

    //console.log(props.funcao)

    return (
        <div>
            <h1 className="text-4xl text-white font-bold">Filho alterado</h1>
            <button className='bg-white' onClick={props.funcao}>falar com o pai #1</button>
            <button className='bg-white' onClick={() => props.funcao("passei no enem!")}>falar com o pai #2</button>
        </div >
    );
}