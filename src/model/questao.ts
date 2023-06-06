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
}
