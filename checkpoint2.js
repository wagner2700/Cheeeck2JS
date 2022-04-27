
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
    notaAprovação: 8,
    faltasMaxima: 20,
    listaEstudante: escola.sala,
    


alunoAprovadoOuNao : function(nome,qtdFaltas,media){
    let notaAprovação = this.notaAprovação
    let faltaMaxima = this.faltasMaxima
    if(media >= notaAprovação & qtdFaltas < faltaMaxima){
        console.log(nome +" Esta Aprovado!!")
    } 
    else if (qtdFaltas == faltaMaxima & media >= (notaAprovação * 1.1)) {
        console.log(`${nome} Quase reprovou Mas passou !`)
    }
    else if (qtdFaltas > faltaMaxima | media < notaAprovação)
    {
        console.log(`${nome}Esta Reprovado`)
    }
},

salaAprova : function(){ 
    
    for(i=0 ; i < this.listaEstudante.length ; i++){
          
        if(this.listaEstudante[i] > 0) {
                console.log(   "Aprovado")
            }
            else {
                console.log( 'Reprovado !')
            }
    }
}
}




escola.adicionarAluno('Wawa' , 15 , [2,9,9])
escola.adicionarAluno('Lala' , 15 , [2,9,9])
// console.log(curso.listaEstudante)



const David   =  new Aluno('David',  10, [6,8,9,6])
const Erik    =  new Aluno('Erik', 20, [8,9,6,9])

David.calculaMedia()
Erik.calculaMedia()

// curso.alunoAprovadoOuNao('wawa',19,8.8)
curso.salaAprova()