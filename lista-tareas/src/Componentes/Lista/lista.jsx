import { useState } from "react";

function Lista(props){
    console.log(props);
    console.log(props.tareas);
    if (props.tareas.length===0){
        return (<p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>)
    }
    else{
    return (
        

        <ul>
            {
            
                props.tareas.map((tarea, index)=>{
                    return(
                        <li className={tarea.clase} onClick={() => props.borrarFunction(tarea.key)} key={tarea.key}>
                            {tarea.text}
                        </li>
                        
                    )
                })
            }
            
        </ul>
    );
        }
}


export default Lista