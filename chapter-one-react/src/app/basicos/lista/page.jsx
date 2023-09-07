//preciso do span
//preciso do numero que vai multiplicar pelo numero de span

function addlista(numero) {
    lista = []
    for (let num = 1; num <= numero; num++) {
        const span = <span>{num}{num < numero ? "," : ""}</span>
        lista.push(span)
    }

    return lista
}
export default function lista() {
    const retorna = addlista(10)
    return (
        <div className="flex flex-col justify-center items-center text-4xl">
            {retorna}
        </div>
    )
}