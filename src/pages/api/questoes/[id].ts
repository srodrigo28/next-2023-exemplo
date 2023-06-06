import questoes from "../bancoDeQuestoes"
export default (req, res) => {
  const idSelecionado = +req.query.id

  const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)
  
  if(unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
    res.status(200).json(questaoSelecionada.paraObjeto()) // 1
    // 2 const obj = questaoSelecionada.responderCom(0).paraObjeto()
    // 2 res.status(200).json(obj)
  } else {
    res.status(204).send()
  }
}