export default function Filho(props) {
    return (
        <div className="flex flex-row text-4xl text-white font-bold font-sans">
            <div className="p-2">
                <h1>{props.nome}</h1>
            </div>
            <div className="p-2">
                <h1>{props.sobrenome}</h1>
            </div>
        </div>
    )
}