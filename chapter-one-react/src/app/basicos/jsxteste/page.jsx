var numeros = [24, 33, 4, 511, 533, 612, 7165];
var titletest = <h1>isso é um teste de chamada</h1>

export default function jsxteste2() {
    const variavel = 'texto variavel'

    return (
        <div className="flex items-center text-4xl justify-center p-8 flex-col">
            hello man isso é um {variavel}
            <h1 className="text-4xl">o maior numero é {Math.max(...numeros)}, blz?</h1>
            <h1 className="text-4xl">está na média? resposta: {media()}</h1>
            <br></br>
            <br></br>
            {titletest}
        </div>
    )
}

var min = 5;
var max = 5000;

function media(valor, min, max) {
    var math = Math.max(...numeros);
    if (math > 5 && math < 5000) {
        return ("sim, esta na media");
    } else {
        return ("não esta na media");
    }
}

//ao passar numeros para math.max como array é necessário usar um operador de propagação, ok




