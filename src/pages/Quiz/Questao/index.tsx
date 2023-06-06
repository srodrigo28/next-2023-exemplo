import QuestaoModal from "../../../model/questao";

import styles from './Questao.module.css'

interface QuestaoProps{
    valor: QuestaoModal
}
export default function Questao( props: QuestaoProps ) {
    const questao = props.valor

    return (
        <div className={styles.questao}>
            <h1>Questão Inicial</h1>
        </div>
    )
}