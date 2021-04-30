import React from 'react'

export default props => {

    function acao() {
        
        props.onClicar(Math.random(),'Gerado'); //gerando um valor aleatório p simbolizar a troca de infos de subcomp.
    
    }

    return (
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    );
};
    

// quando o usuário clicar vai chamar a função do componente pai