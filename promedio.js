const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');
const btn2 = document.querySelector('#calcularReduce');
const pResult2 = document.querySelector('#result2');

btn.addEventListener('click', promedio);
btn2.addEventListener('click', calcularPromedioConReduce)

const nums = [3,5,6,7,9];
const lista = [36,55,68,37,29,23,55,77,88,523];


function promedio(){

    let sum = 0;

    for (num of nums){
        sum = sum + num;
    }
    const prom = sum / nums.length;
    pResult.innerText = 'El promedio de los numeros es: ' + prom;

}

function calcularPromedioConReduce(){
    // function SumarTodosLosElementos(valorAcumulado, nuevoValor){
    //     return valorAcumulado + nuevoValor;
    // };
    //Esta es una manera de hacer una arrow function que es = () => {}
    const SumarTodosLosElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;

    
    const sumaLista = lista.reduce(SumarTodosLosElementos);

    const promedio = sumaLista / lista.length;

    pResult2.innerText = 'El promedio de los numeros es: ' + promedio;
    
}

