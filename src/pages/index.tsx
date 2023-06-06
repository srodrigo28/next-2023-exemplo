import { useState } from "react";
import QuestaoModal from "../model/questao";
import RespostaModel from "../model/resposta";
import Questao from "./Quiz/Questao";

const questaoMock = new QuestaoModal(1, 'Melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta'),
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)

  function respotaFornecida(indice: number) {
    console.log(indice)
    setQuestao(questao.responderCom(indice))
  }
  return (
    <div style={{
      margin: 0,
      padding: 0,
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Questao
        valor={questao}
        resposataFornecida={respotaFornecida}
      />
      </div>
  )
}
