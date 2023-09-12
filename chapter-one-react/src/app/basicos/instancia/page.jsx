import Titulo from "@/components/Titulo";

export default function instancia() {
    return (<div className="flex flex-col items-center justify-center font-sans p-4">
        <Titulo principal="Esse título é legal" secundario="esse subtitulo tambem" />
        <Titulo principal="zezinho uhu" secundario="joaozinho uhu" small={true} />
    </div>
    )
}
