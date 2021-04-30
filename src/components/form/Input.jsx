import React, { useState } from "react";

export default (props) => {

    const [nome, setNome] = useState('Pedro') 
    
    // useState retorna um valor e uma função que altera o valor

    return (
        <>
            <h3 style={{ color:'violet'}} >{nome}</h3>
            <input type="text" value={nome}
            onChange={e => setNome(e.target.value)}/>
        </>
    )
}

// onChange - função - evento passa p setNome (evento aponta p valor)

// readOnly

// setNome = altera nome