import { embaralhar } from "../components/functions/arrays";
import RespostaModel from "./resposta";

export default class QuestaoModal{
    #id: number
    #enunciado: string
    #respostas: RespostaModel[]
    #acertou: boolean
    // #respondida: booolean
    constructor( id: number, enunciado: string, respostas: any[], acertou = false) {
        this.#id = id;
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }
    get id() { return this.#id }
    get enunciado() { return this.#enunciado }
    get respostas() { return this.#respostas }
    get acertou() { return this.#acertou }
    get respondida() {
        for (let resposta of this.#respostas) {
            if(resposta.revelada) return true
        }
        return false
    }

    responderCom(indice: number): QuestaoModal{
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resposta, i) => {
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || resposta.certa
            return deveRevelar ? resposta.revelar() : resposta
        })
        return new QuestaoModal(this.id, this.enunciado, respostas, acertou)
    }

    embaralharRespostas(): QuestaoModal {
        let respostasEmbaralhadas = embaralhar(this.#respostas)
        return new QuestaoModal(
            this.#id,
            this.#enunciado,
            respostasEmbaralhadas,
            this.#acertou
        )
    }

    paraObjeto() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            respondida: this.respondida,
            acertou: this.#acertou,
            respostas: this.#respostas.map(resp => resp.paraObjeto()),
        }
    }

}
