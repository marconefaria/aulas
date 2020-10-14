import React from "react";

function Title({title, subtitle, children}){
    return(
        <div>
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
            {children}
        </div>
    );
}

export default Title;