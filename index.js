
function calDesconto (valor,porcentagem){

    return valor * porcentagem
}

function calcPrecoUnitarioComDesconto (precoUnitario,quantidade){

    var desconto = 0;

    if(quantidade >= 10 && quantidade < 20 ){
        desconto = calDesconto(precoUnitario,0.1);
    }
    else if(quantidade >= 20 ){
        desconto = calDesconto(precoUnitario,0.5);
    } 
    return precoUnitario - desconto
}

//console.log(calcPrecoUnitarioComDesconto(10,30));
