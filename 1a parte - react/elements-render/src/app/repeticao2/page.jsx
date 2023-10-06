import listaProdutos from "../../../data/listaProdutos";

export default function Repeticao2() {
    function renderizarLinhas() {
        return listaProdutos.map((produto) => (
            <tr key={produto.id}>
                <td className="border border-gray-300 p-2 text-center">{produto.id}</td>
                <td className="border border-gray-300 p-2 text-center">{produto.nome}</td>
                <td className="border border-gray-300 p-2 text-center">{produto.preco}</td>
            </tr>
        ));
    }

    return (
        <div className="min-h-screen min-w-screen flex items-start justify-center bg-gradient-to-b from-gray-200 to-black">
            <div className="text-4xl text-black font-extrabold uppercase p-4">
                <table className="border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">Código</th>
                            <th className="border border-gray-300 p-2">Nome</th>
                            <th className="border border-gray-300 p-2">Preço</th>
                        </tr>
                    </thead>
                    <tbody>{renderizarLinhas()}</tbody>
                </table>
            </div>
        </div>
    );
}
