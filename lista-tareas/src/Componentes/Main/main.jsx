import Lista from '../Lista/lista';
import Agregar from '../Agregar/agregar';
import {useState} from 'react';


function Main(){
    const [tareas, setTareas] = useState([]);
    const [indexes, setIndexes] = useState([]);
    const [clases, setClases] = useState([]);
    

    function agregarTarea(tarea){
        setTareas([...tareas, tarea]);
    }
    function borrarTarea(e){
        console.log(e)

        let listaNueva = tareas.filter((tarea)=>{
            return tarea.key !== e;
        })
        setTareas(listaNueva);
    }



    return (
        <main>
            <h1>Lista de tareas!</h1>
            <Agregar agregarFunction={agregarTarea}/>
            <h3>Tareas</h3>
            <Lista borrarFunction={borrarTarea} tareas={tareas}/>
            
            <p className="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
        </main>
    );
}


export default Main