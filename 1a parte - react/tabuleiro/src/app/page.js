import Image from 'next/image'
import estilos from './home.module.css'
import Subdivisao from './tabuleiro/page'
import Linha from './components/Linha'


export default function Home() {
  return (
    <div className={estilos.container}>
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
    </div>
  )
}
