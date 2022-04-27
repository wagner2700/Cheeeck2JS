let alunos = []


function Aluno(nome, qtdFaltas, notas) {
  this.nome = nome
  this.qtdFaltas = qtdFaltas
  this.notas = notas
  
  // passo 2
  this.calculaMedia = function() {
      let aluno = {}
      let notasTotal = this.notas.reduce((prev, curr) => prev + curr )

      aluno.nome = this.nome
      aluno.media = (notasTotal / this.notas.length) | 0
      aluno.faltas = this.qtdFaltas
      aluno.notas = this.notas

      return aluno
  }

  this.faltas = function() {
      return this.qtdFaltas++
  }
}

const David   =  new Aluno('Wagner' , 10, [6,8,7,9])
const Erik    =  new Aluno('Joao'   , 4, [9,8,8,9])
const Gabriel =  new Aluno('Luiz'   , 0, [6,8,7,9])
const Luis    =  new Aluno('Jose'   , 9, [2,3,1,0])
const Mahiny  =  new Aluno('Maria'  , 7, [6,5,8,9])
const Wagner  =  new Aluno('Larssa' , 15, [4,8,9,10])

// passo 3
let curso = {
  nome: 'Dev',
  faltasMax: 20,
  notaAprovacao: 6,
  listaEstudantes: [
      David, Erik, Gabriel,
      Luis, Mahiny, Wagner
  ],
  // Passo 4
  novoAluno: function() {
      this.listaEstudantes.push(new Aluno('Lala', 7, [7,5,3,8]))
  },
  // Passo 5
  aprovado: function(aluno) {
      let faltas = aluno.qtdFaltas
      let notas = aluno.notas
      let media =(notas.reduce((prev, curr) => prev + curr) / notas.length)

      if (
          faltas <= this.faltasMax &&
          media  >= this.notaAprovacao
      ) {
          return true
      }
      return false
  },
  verificaAprovacao: function() {
      this.listaEstudantes.forEach(aluno => {
          if (this.aprovado(aluno)) {
              aluno.aprovado = true
          } else {
              aluno.aprovado = false
          }
      })
      console.table(this.listaEstudantes, ['nome', 'aprovado'])
  }
}

console.table([
  David.calculaMedia(),
  Erik.calculaMedia(),
  Gabriel.calculaMedia(),
  Luis.calculaMedia(),
  Mahiny.calculaMedia(),
  Wagner.calculaMedia()
], ['nome', 'notas', 'media', 'faltas'])

curso.verificaAprovacao()


curso.novoAluno()

console.log(curso.listaEstudantes)