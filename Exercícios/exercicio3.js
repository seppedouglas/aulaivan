const readline  = require("readline-sync");
var produtos = [];
var cadastrar = "y";
var teste     = "y";

while (cadastrar == "y"|| cadastrar == "Y"){

        var cont =readline.question("deseja continuar ? y ou n ")
        cadastrar = cont;

        if (cadastrar == "y"){

        var cadastrarCodigo = readline.question("Digite o codigo: ");
        var cadastrarNome   = readline.question("Digite o Nome: ");
        var cadastrarPreco  = readline.question("Digite o preco: ");   
        
        var produto = {

            codigo: cadastrarCodigo,
            nome:   cadastrarNome,
            preco:  parseFloat(cadastrarPreco),
        }

    produtos.push(produto); 

        }else if (cadastrar == "n"){

            while (teste == "y"){

             for (i = 0; i < produtos.length; i++){

                 var codigo = produtos[i].codigo
                 var nome = produtos[i].nome
                 var preco = produtos[i].preco

                 console.log(codigo ,nome ,preco );

             }

             var buscarCodigo = readline.question("Digite o codigo: ");

             for (i = 0; i < produtos.length; i++){

                var codigo = produtos[i].codigo
                
                if (codigo == buscarCodigo){

                    var preco = produtos[i].preco
                    
                    console.log("O preço deste produto e : " + preco);

                    teste = readline.question("Deseja buscar outro produto ? ");
                }


            }

        }
    }

    
}

