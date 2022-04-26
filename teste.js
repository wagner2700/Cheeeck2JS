// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:	
// a maior e a menor altura do grupo;
// a média de altura das mulheres;
// o número de homens.


function Pessoa (nome, altura,sexo) {
    this.nome = nome
    this.altura = altura
    this.sexo = sexo
}
// }

// const p1 = new Pessoa('Larissa' , 163 , 'F')
// const p2 = new Pessoa ('Wagner1' , 1.80 , 'M')
// const p3 = new Pessoa('Vera' , 1.6 , 'F')
// const p4 = new Pessoa ('Fran' , 1.7 , 'M')


let grupo = { 
     pessoas : [],
        adicionarPessoa(nome,altura,sexo) {
    const pessoa = new Pessoa (nome,altura,sexo)
        this.pessoas.push(pessoa)
        

},

maiorEMenorAltura() { 
    let maiorPessoa = this.pessoas[0];
    let menorPessoa = this.pessoas[0];

    for(let i = 1 ; i < this.pessoas.length ; i++){ 
    const pessoa = this.pessoas[i];
    
    if(pessoa.altura > maiorPessoa.altura) {
        maiorPessoa = pessoa;
     }  

    if(pessoa.altura < menorPessoa.altura) {
            menorPessoa = pessoa;
    }
    
}
console.log(maiorPessoa,menorPessoa);

}


}


grupo.adicionarPessoa('Larissa',1.6,'F')
grupo.adicionarPessoa('Larissa',1.7,'F')
grupo.adicionarPessoa('Larissa',1.9,'F')
grupo.adicionarPessoa('Larissa',1.5,'F')
console.log(grupo.pessoas)

grupo.maiorEMenorAltura()