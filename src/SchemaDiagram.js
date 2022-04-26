import React from "react";
import { useState } from "react";
import schema1 from "./Resources/schema1.png"
import schema2 from "./Resources/schema2.png"
import schema3 from "./Resources/schema3.png"
import schema4 from "./Resources/schema4.png"
import schema5 from "./Resources/schema5.png"
import ServiceAndGovernSchema from "./serviceAndGovernSchema";

function SchemaDiagram ({selectedSchema, handleRenderChange}) {

    function getSchema(selectedSchema){
        if (selectedSchema == 1){
            return (schema1)
        }
        if (selectedSchema == 2){
            return (schema2)
        }
        if (selectedSchema == 3){
            return (schema3)
        }
        if (selectedSchema == 4){
            return (schema4)
        }
        if (selectedSchema == 5){
            return (<ServiceAndGovernSchema></ServiceAndGovernSchema>)
        }

    }

     return (
        <div>
            <button onClick={() => handleRenderChange("Main Diagram")}>Back</button>
            {/* <img src={getSchema(selectedSchema)}></img> */}
            <div>{getSchema(selectedSchema)}</div>
        </div>
        
    )

}

export default SchemaDiagram;