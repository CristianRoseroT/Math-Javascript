const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');
let lista = [36,55,68,37,29,23,55,77,88,523];

btn.addEventListener('click', calcularMediana);



function esPar(){
    return !(lista % 2);
};

function esImpar(){
    return (lista.length % 2);
};



function calcularMediana(){

    
    const listaEsPar = esPar(lista);

    if(listaEsPar){

    }else{
        const medianaImpar = Math.floor(lista.length / 2) + 1;
        pResult.innerText = 'La mediana de los numeros es: ' + (lista[medianaImpar]);
    }

    
};