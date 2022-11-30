import Lista from '../Lista/lista';
import Agregar from '../Agregar/agregar';
import {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import ListaComp from '../ListaComp/listaComp'


function Main(){
    const [tareas, setTareas] = useState([]);
    const [completadas, setCompletadas] = useState([]);
    

    /*function agregarTarea(tarea){
        setTareas([...tareas, tarea]);
    }*/
    function agregarTarea(tarea){
        
        let a = [...tareas, tarea];
        console.log(a);
        const tareasOrdenadas = a.sort((a,b)=>{
            if (a.fechaLimite > b.fechaLimite){
                return 1;
            }
            if (a.fechaLimite < b.fechaLimite)
            {return -1;}
            return 0;
        }
        
            
        )
        console.log(a);
        setTareas(tareasOrdenadas);
    }
    //Hay alguna forma mejor que un sort de insertar esto en el lugar correcto?
    //

    function agregarCompletada(tarea){
        console.log(tarea);
        setCompletadas([...completadas, tarea]);
        borrarTarea(tarea.key);
    }
    function borrarTarea(e){
        //Returns all elements with a different key, since hopefully they are unique
        //this will return the same list, except with 1 element.
        let listaNueva = tareas.filter((tarea)=>{
            return tarea.key !== e;
        })
        setTareas(listaNueva);
    }



    return (
        <main>
            <h1>Lista de tareas!</h1>
            
            <Routes>
                <Route path="/" element={
                    <>
                        <Agregar agregarFunction={agregarTarea}/>
                        <h3>Tareas</h3>
                        <Lista borrarFunction={borrarTarea} tareas={tareas} completarTarea={agregarCompletada}/>
                    </>
                }/>
                <Route path="/Completadas" element={
                    <ListaComp tareas={completadas}/>
                }/>
            </Routes>
            
            <p className="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
        </main>
    );
}


export default Main