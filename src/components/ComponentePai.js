import React from "react";
import ComponenteFilho from "./ComponenteFilho";

function ComponentePai(props) {
    return (
        <div>
            <h2>{props.terceira}</h2>
            <ComponenteFilho  
                quinta={"Essa props será renderizada no ComponenteFilho.js"}
                sexta={props.quarta}
            />
        </div>
    )
}

export default ComponentePai