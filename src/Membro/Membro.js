import React from "react";

function Membro(props){
    return (
        <div>
            <p>{props.membro.nome}</p>
            <p>{props.membro.idade}</p>
            <p>{props.membro.altura}</p>
            <p>{props.membro.cargo}</p>
            <p>{props.membro.curso}</p>
        </div>
    );
}

export default Membro;