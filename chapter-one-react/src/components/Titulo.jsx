"use client"

export default function Titulo(props) {
    console.log(props)
    if (props.small) {

        return (
            <>
                <p className="text-5xl">{props.principal}</p>
                <p>{props.secundario}</p>
            </>
        )
    } else {
        return (
            <>
                <h1>{props.principal}</h1>
                <h1>{props.secundario}</h1>
            </>
        )
    }
}
//controla o que vai dentro do h1 a partir do javascript