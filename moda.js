function calcularModa(lista)
{
    const listaCount={};
    for(let i=0;i<lista.length;i++)
    {
        const elemento=lista[i];
        if(listaCount[elemento]){listaCount[elemento]+=1;
        }else
        {
        listaCount[elemento]=1;
        }
    }
        const listaArray=Object.entries(listaCount);
        const listaOrdenada=ordenarListaBidimensional(listaArray,1)
        const listaMaxNumber=listaOrdenada[listaOrdenada.length-1];
        const moda=listaMaxNumber[0];return moda;}

function ordenarListaBidimensional(listaDesordenada,i)
{
    function ordenarListaSort(valorAcumulado,nuevoValor)
    {
        return valorAcumulado[i]-nuevoValor[i];
    }
const lista=listaDesordenada.sort(ordenarListaSort);
return lista;}