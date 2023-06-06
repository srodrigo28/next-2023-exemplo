import RespostaModel from "../../../../model/resposta"
import styles from './Resposta.module.css'

interface RespostaPros{
    valor: RespostaModel
    indice: number
    letra: string
    corLetra: string
}
export default function Resposta(props: RespostaPros) {
    const resposta = props.valor
    return (
        <div className={styles.resposta}>
            <div className={styles.counteudo}>
                <div className={styles.frente}>
                    <div className="letra">
                        {props.letra}
                    </div>
                    <div className="valor">
                        {resposta.valor}
                    </div>
                </div>
                <div className={styles.verso}>

                </div>
            </div>
        </div>
    )
}