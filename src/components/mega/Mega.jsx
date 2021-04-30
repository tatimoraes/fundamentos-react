import React, { useState } from 'react';

export default (props) => {

    const [numeros, setNumeros] = useState(Array(props.qtdNumero).fill(0)) //Declaração...

    function gerarNumeroNaoContido(array) {
        const min = 1
        const max = 60
        const novoNumero = parseInt( Math.random() * (max - min)) + min
        return array.includes(novoNumero) 
            ? gerarNumeroNaoContido(array) : novoNumero
    }
    
    
    function gerarNumeros () {
        const novoArray = Array(props.qtdNumero)
        .fill(0)
        .reduce( (a, e) => {
            const novoNumero = gerarNumeroNaoContido(a)
            console.log(a, e, novoNumero)
            return  [...a, gerarNumeroNaoContido(a)]

        }, []) //base javascript
        .sort((a, b) => a - b)
        setNumeros(novoArray)
    }

    return (
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4> 
            <button onClick={gerarNumeros}>Gerar Número da Sorte</button>
        </>
    );
};


// o h4 recebe o numeros que em seu estado atual é preenchido com 0 
// onClick - quando clica recebe a função gerarNumeros
// A função aponta para a numeros e atualiza (setNumeros) 
// fill método que preenche
// join método que recebe um parâmetro separador ("")
// A função parseInt() analisa um argumento string e retorna um inteiro na base especificada.
// reduce 
// sort
