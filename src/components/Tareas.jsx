import Tarea from "./Tarea"

const Tareas = ({ tareas, onDelete }) => {

  return (
    <>
    {/* {tareas.map((tarea)=>(<h3 key={tarea.id}>{tarea.texto}</h3>))} */}
    {tareas.map((tarea) => (
        <Tarea key={tarea.id} tarea={tarea} onDelete={onDelete} />
    ))}
    </>
  )
}
//uso codigo javascript, mi arreglo se llama tareas y esta definido, agarro tareas necesito hacerle un map que me permite recorrer el array creando una copia nueva, es una función y adentro hago una funcion flecha que va a recibir y me va a retornar algo , el parametro es tarea que es el iterador, cuando hago un map a tareas, cada elemento que recorre es un objeto llamado tarea, me va a retornar en un h3 que escriba el texto de cada elemento tarea 
export default Tareas