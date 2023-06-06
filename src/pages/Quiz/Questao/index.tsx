import QuestaoModal from "../../../model/questao";
import Enunciado from "../compoments/Enunciado/Enunciado";
import Resposta from "../compoments/Resposta";

import styles from './Questao.module.css'

const letra = [
    { valor: 'A', cor: '#F2C866' },
    { valor: 'B', cor: '#F266BA' },
    { valor: 'C', cor: '#85D4F2' },
    { valor: 'D', cor: '#BCE596' },
]

interface QuestaoProps{
    valor: QuestaoModal
    resposataFornecida: (indice: number) => void
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
                    letra={letra[i].valor}
                    corFundoLetra={letra[i].cor}
                    respostaFornecida={props.resposataFornecida}
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