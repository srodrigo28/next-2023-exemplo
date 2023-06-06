import QuestaoModal from "../../../model/questao";
import Enunciado from "../compoments/Enunciado/Enunciado";
import Resposta from "../compoments/Resposta";

import styles from './Questao.module.css'

interface QuestaoProps{
    valor: QuestaoModal
}

export default function Questao( props: QuestaoProps ) {
    const questao = props.valor

    function renderizarResposta() {
        return questao.respostas.map((resposta, i) => {
            return (
                <Resposta
                    key={i}
                    valor={resposta}
                    indice={i}
                    letra="A"
                    corFundoLetra="#F2C866"
            />
            )
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            {renderizarResposta()}
        </div>
    )
}