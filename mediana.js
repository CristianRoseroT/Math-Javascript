function esPar(lista) {
  return !(lista.length % 2);
}
function esImpar(lista) {
  return lista.length % 2;
}

function calcularMediana(listaDesordenada) {
  const lista = ordenarLista(listaDesordenada);
  const listaEsPar = esPar(lista);

  if (listaEsPar) {
    const MitadListaPar = lista[(lista.length / 2)-1];
    const Mitad2ListaPar = lista[lista.length / 2];

    const listaMitades = [MitadListaPar, Mitad2ListaPar];
    
    calcularPromedio(listaMitades);
    } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexMitadListaImpar];
    console.log(indexMitadListaImpar);
    console.log(medianaListaImpar);
    return medianaListaImpar;
  }
}

function calcularPromedio(lista) {
    function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaLista = lista.reduce(sumarTodosElementos);  
  const promedio = sumaLista / lista.length;
  console.log(promedio);
  return promedio;
}

function ordenarLista(listaDesordenada){
  function ordenarListaSort(valorAcumulado, nuevoValor){

    // if(valorAcumulado < nuevoValor){
    //   return -1;
    // }else if (valorAcumulado == nuevoValor) {
    //   return 0;
    // }else if (valorAcumulado > nuevoValor){
    //   return 1;
    // }
    return valorAcumulado - nuevoValor;

  }
  const lista = listaDesordenada.sort((a,b) => a-b);
  return lista
}