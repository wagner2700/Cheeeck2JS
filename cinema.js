// Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
// a média das idades das pessoas que responderam ótimo;
// a quantidade de pessoas que responderam regular;
// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

function Clientes (nome,idade,opiniao){
    this.nome = nome
    this.idade = idade
    this.opiniao = opiniao
}

  let  classe= {
    clientes :[] ,

    adicionarUsuários(nome,idade,opiniao){
        const cliente = new Clientes (nome,idade,opiniao)
        this.clientes.push(cliente)
    },

    otimo(){
        
        let otimo = 0
        let regular = 0
        let ruim =0
        for(let i = 0 ; i<this.clientes.length;i++){
            const cliente = this.clientes[i]
            
            
        if(cliente.opiniao == 3){
                
               otimo =otimo + 1
                
            }
            if(cliente.opiniao == 2){
                regular = regular + 1
        }
        if(cliente.opiniao == 1){
            ruim = ruim + 1
        }
    }
    console.log("otimo: " + otimo, "Regular " + regular , "Ruim : " + ruim)
    console.log("A média de otimos é " +  ((otimo/this.clientes.length ) *100).toFixed(2) + " %"  );
    console.log("A média de regular é " + ((regular / this.clientes.length)*100).toFixed(2) + "%");
    console.log("A média de ruim é " + ((ruim / this.clientes.length)*100).toFixed(2) + "%");

},



}
classe.adicionarUsuários('Wagner' , 27 , 2)
classe.adicionarUsuários('Alef' , 27 , 2)
classe.adicionarUsuários('Larissa' , 27 , 1)
classe.adicionarUsuários('Wagner' , 27 , 3)
classe.adicionarUsuários('Wagner' , 27 , 2)
classe.adicionarUsuários('Wagner' , 27 , 2)
classe.adicionarUsuários('Wagner' , 27 , 1)
classe.adicionarUsuários('Wagner' , 27 , 3)
classe.adicionarUsuários('Wagner' , 27 , 3)
classe.adicionarUsuários('Wagner' , 27 , 1)
classe.adicionarUsuários('Wagner' , 27 , 3)
classe.adicionarUsuários('Wagner' , 27 , 3)
classe.adicionarUsuários('Wagner' , 27 , 2)
classe.adicionarUsuários('Wagner' , 27 , 3)
classe.adicionarUsuários('Wagner' , 27 , 3)

classe.otimo()

console.log(classe.clientes)

