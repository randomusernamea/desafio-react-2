import { useState } from "react";
import { v4 as uuidv4 } from "uuid";



function Agregar(props){
    const [texto, setTexto] = useState('');
    const [classTarea, setClassTarea] = useState('prioridad-baja');
    const onChangeTexto = (e) => {
        setTexto(e.target.value);
    }
    const onClickButton = (e) =>{
        e.preventDefault();
        props.agregarFunction({text: texto, clase: classTarea, key: uuidv4()
        })
    }
    const onChangeSelect = (e) =>{
        setClassTarea(e.target.value);
    }
    return (
        <form>
            <input id="tarea" type="text" name="tarea" onChange={onChangeTexto} placeholder="Descripción de la tarea" value={texto}></input>
            <select onChange={onChangeSelect} name="prioridad" id="prioridad">
                <option value="" disabled selected>Prioridad</option>
                <option value="prioridad-baja">baja</option>
                <option value="prioridad-media">media</option>
                <option value="prioridad-alta">alta</option>
            </select>
            <button id="agregar" onClick= {onClickButton}>Agregar!</button>
        </form>
    );
}


export default Agregar