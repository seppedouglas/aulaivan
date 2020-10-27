function somaExibe (valor1,valor2){
    var maior = 0;
    var soma = valor1 + valor2;

    if(valor1 > valor2){
        maior = valor1
    } else {
        maior = valor2
    }

    exibir(maior,soma);

    return maior;
}

function exibir(x,y){

    return console.log("O maior valaor exibido é " + x + " e a soma : " + y );
}

function celsiosFahrenheit (celsios){
    var f = ( 1.8 * celsios ) + 32

    return console.log (f +"º Fahrenheit");
}

function calcRaiz (x){
    var numero = x;
    var num1 = 0;
    var num2 = 0;

    for (var i = 0; i < numero; i++){
        num1++
        num2++

        if (num1 * num2 == numero){
            var ok = num1;
            
        }   
    } 

    return ok;         
}

function exibirConceito (nota1,nota2,nota3){
    var n1 = nota1;
    var n2 = nota2;
    var n3 = nota3;
    var me = (n1 + n2 + n3 )/3;
    var ma = (n1 + (n2*2) + (n3*3) + me)/7

    verificaConceito(ma);
}

function verificaConceito (ma){

    var nota = 0;

    if (ma >= 9 ){

        nota = console.log("NOTA A");
    }else if (ma >= 7.5 && ma < 9 ){

        nota = console.log("NOTA B");
    }else if (ma >= 6 && ma < 7.5 ){

        nota = console.log("NOTA C");
    }else if (ma >= 4 && ma < 6 ){

        nota = console.log("NOTA D");
    }else if (ma < 4 ){

        nota = console.log("NOTA E");
    }

return nota ;

}

function ordenarAlfabetica(nome1,nome2){
var a = nome1.toLowerCase();
var b = nome2.toLowerCase()

var arr1      = a.split('');
var arr2      = b.split('');

var ordenar1  = arr1.sort();
var ordenar2  = arr2.sort();

var ordem1 = console.log(ordenar1.toString());
var ordem2 = console.log(ordenar2.toString());

return ordem1,ordem2;

}

function posicaoCaracter (caracter,palavra){

    var x = palavra;

    var y = caracter.toLowerCase();

    var arr = palavra.toLowerCase().split('');

        for (var i = 0; i < x.length ; i++ ){

            if (arr[i] == y){
                console.log(i);
            }
        }
}

function comprimentoString (texto) {

    var arr = texto.split('');
    var i   = 0;

        while ( arr[i] != undefined ){
            i++
                if (arr[i] == undefined){
                    break
                }
        }

        return console.log(i);
        
}

function imprimaSeForA (texto){

    var x   = texto.toLowerCase();
    var arr = x.split('')

        if (arr[0] == "a"){
            
            console.log(texto);
        }else {

            console.log("Não começa com 'a' ");
        }
}

function imprimaLetras (texto){

    var x   = texto.toLowerCase();
    var arr = x.split('')

        for (var i = 0; i < 4 ; i++){
            console.log(arr[i])
        }
}

function contadorUm (texto){
    
    var arr      = texto.split('');
    var contador = 0;

        for (var i = 0; i < arr.length ; i++){

            if (arr[i] == "1"){
                contador++;
            }
        }

        return console.log(contador);

}

function trocar0por1 (texto){

    var arr = texto.split('');

        for( var i = 0; i < texto.length ; i++){
            
            if ( arr[i] == "0"){
                
                arr[i] = "1";
            }
        }

    console.log(arr.join([]));
}

function imprimirInverso (texto){

    var arr = texto.split('')
    var x   = texto.length;
    var y   = [];

        while ( x != 0 ){
            x--;
            y.push(arr[x]);
        }

        return console.log(y.join([]))
}

function verificarPalindromo (texto){

    var arr         = texto.split('')
    var final       = texto.length
    var comparacoes = (final - 1) / 2 ;

    
       for ( var i = 0; i < comparacoes; i++){



       }
 

}

//verificarPalindromo("DouglaD")
//imprimirInverso("Abacaxi")
//trocar0por1("1231010001552")
//contadorUm("1021031111")
//imprimaLetras("Douglas")
//imprimaSeForA("Douglas")
//comprimentoString("Douglas");
//posicaoCaracter("E","douglas")
//somaExibe(10,2);
//celsiosFahrenheit(10);
console.log(calcRaiz(25));
//exibirConceito(1,1,1); 
//ordenarAlfabetica("DOUGLAS","IVAN");
