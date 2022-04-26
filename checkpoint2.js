
function Aluno(nome, qtdFaltas, notas) {
    this.nome = nome
    this.qtdFaltas = qtdFaltas
    this.notas = notas
    
    this.calculaMedia = function() {
        let notasTotal = this.notas.reduce((prev, curr) => prev + curr )
        
         
        console.log(
            'Nome: '+ this.nome +
            '\nqtd de Faltas: ' + this.qtdFaltas +
            '\nnotas: ' + this.notas +
            '\nmedia: ' + (notasTotal / this.notas.length).toFixed(1)  + '\n')
    }
  
}


let escola = {
    sala : [],

    adicionarAluno(nome,qtdFaltas,notas){
        const aluno = new Aluno(nome,qtdFaltas,notas)
            this.sala.push(aluno)
    }
}


let curso = {
    nomeCurso : "Dev",
    notaAprovação: 6,
    FaltasMáximas: 20,
    listaEstudante: escola.sala
    
}

function AlunoAprovadoOuNao(nome,qtdFaltas,media){
    
    if(media >=6 & qtdFaltas <=25){
        console.log(nome +" Esta Aprovado!")
    }else {
        console.log(nome + "Esta Reprovado")
    }
}





escola.adicionarAluno('Wawa' , 15 , [2,3,4])
escola.adicionarAluno('Lala' , 15 , [2,3,4])
// console.log(curso.listaEstudante)



const David   =  new Aluno('David',  9 | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])
const Erik    =  new Aluno('Erik',    (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])

David.calculaMedia()
Erik.calculaMedia()

AlunoAprovadoOuNao('wawa',5,8)