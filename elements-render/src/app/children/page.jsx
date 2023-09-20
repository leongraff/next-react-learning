import Item from "./Item";
import Lista from "./Lista";

export default function children(props) {
    var numero = 34;

    return (
        <div>
            <Lista teste={numero}>
                <Item conteudo="hello world" />
                <Item conteudo="hello world2" />
                <Item conteudo="hello world3" />
                <Item conteudo="hello world4" />
            </Lista>
        </div>

    )
}