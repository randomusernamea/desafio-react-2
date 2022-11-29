import { useState } from "react";

function Lista(props){
    //Returns a p tag if the list is empty, indicating that the list is empty, else it returns the list items
    //using the list elements
    if (props.tareas.length===0){
        return (<p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>)
    }
    else{
    return (
        <ul>
            {
                //For each element of tareas it adds a li, using the values of each tarea object as a property of the li
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