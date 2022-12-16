console.group('Cuadrado')

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
})

function calcularCuadrado(lado){
    return{
        perimetro: lado *4,
        area: lado * lado,
    };
}
console.groupEnd('Cuadrado')

console.group('Triangulo')
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;

const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura){
    return{
        perimetro: lado1 + lado2 + base,
        area: (base * altura) /2,
    };
}

function calcularAlturaTriangulo(lado1 , base){
    if(lado1 == base){
        console.log('Este no puede ser un triangulo isoseles')
    }else{
        //h = raizcuadrada(lado1**2 - (b**2)/4)
        return Math.sqrt((lado1 ** 2)- ((base**2))/4);
    }
}

function calcularTrianguloEscaleno(lado1, lado2, lado3){
    if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
        const S = (lado1+lado2+lado3)/2;
        return Math.trunc(2/ lado1 * Math.trunc(S*(S-lado1)*(S-lado2)*(S-lado3)));
    }
    return false;

}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
})
console.groupEnd('Triangulo')



console.group('Circle')


const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1416;

const circunferencia = diametroCirculo * Math.PI;
const areaCirculo = (radioCirculo ** 2) * Math.PI;

console.log ({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
})

function calcularCirculo(radio){
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);
    
    return{
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI.toFixed(5),
    }
}


console.groupEnd('Circle')

const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btnAccionar = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');



btnAccionar.addEventListener("click", calcularTotalPrecio);

function calcularTotalPrecio(){
    const precio = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!precio || !coupon){
        pResult.innerText = 'No hay datos, agrega un resultado';
        return;
    }

    let descuento;
    if (coupon == 'cristian_es_rey'){
        descuento = 30;
    }else if (coupon == 'no_le_digas_a_nadie' ){
        descuento = 25;
    }else{
        pResult.innerText= 'El cupón no es valido, lo siento perrito';
        return;
    }
    
    const nuevoPrecio = (precio * (100-descuento))/100;

    pResult.innerText = 'El nuevo precio con descuento es $' + nuevoPrecio;




}
