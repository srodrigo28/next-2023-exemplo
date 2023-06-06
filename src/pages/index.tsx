import QuestaoModal from "../model/questao";
import RespostaModel from "../model/resposta";
import Questao from "./Quiz/Questao";

export default function Home() {
  const questaoTeste = new QuestaoModal(1, 'Melhor cor?', [
    RespostaModel.errada('Verde'),
    RespostaModel.errada('Vermelha'),
    RespostaModel.errada('Azul'),
    RespostaModel.certa('Preta'),
  ])
  return (
      <div>
        <Questao valor={questaoTeste}  />
      </div>
  )
}
