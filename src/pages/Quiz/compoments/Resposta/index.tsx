import RespostaModel from "../../../../model/resposta"
import styles from './Resposta.module.css'

interface RespostaPros{
    valor: RespostaModel
    indice: number
    letra: string
    corFundoLetra: string
}
export default function Resposta(props: RespostaPros) {
    const resposta = props.valor
    return (
        <div className={styles.resposta}>
            <div className={styles.conteudoResposta}>
                
                <div className={styles.frente}>
                    <div className={styles.letra}
                         style={{ backgroundColor: props.corFundoLetra }} >
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div>
                
                <div className={styles.verso}>

                </div>
            </div>
        </div>
    )
}