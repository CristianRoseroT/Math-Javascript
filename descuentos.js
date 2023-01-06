const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');


btn.addEventListener('click', calcularPrecioConDescuento);

//const arrayUObjeto = undefined;

// const couponObj = {
//     'Cristian_king':30,
//     '3456789': 25,
//     '123':15,

// };

const couponsList=[];
couponsList.push({
    name: 'Cristian_king',
    discount: 30,
});

couponsList.push({
    name: 'Cristian_Pro',
    discount: 25,
});

couponsList.push({
    name: 'Cristian_Death',
    discount: 15,
});

function calcularPrecioConDescuento(){
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!price || !coupon){
        pResult.innerText = 'LLENA PORFA EL CALENDARIO, GRACIAS';
        return;
    }
    let discount;

    function isCouponInArray(couponElement){ // {name, discount}
       return couponElement.name == coupon;
    }
    const couponInArray = couponsList.find(isCouponInArray);

    if(couponInArray){
        discount = couponInArray.discount;

    }else{
        pResult.innerText = 'El cupón no es valido';
        return;
    }

    console.log({
        coupon,
        discount,
        couponInArray,
        couponsList,
    });

    // if(couponObj[coupon]){
    //     discount = couponObj[coupon];


    // }else{
    //     pResult.innerText = 'El cupón no es valido';
    //     return;
    // }

    const newPrice = (price *(100-discount))/100;
    pResult.innerText = 'El nuevo precio con desceunto es $' + newPrice;
}