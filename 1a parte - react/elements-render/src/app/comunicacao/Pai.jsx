import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div className="flex p-8 flex-col">
            <Filho nome="Joao" sobrenome={props.sobrenome}></Filho>
            <Filho nome="Maria" sobrenome={props.sobrenome}></Filho>
        </div>
    )
}