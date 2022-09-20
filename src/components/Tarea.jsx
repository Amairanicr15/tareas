import { FaTimes } from 'react-icons/fa'

const Tarea = ({ tarea, onDelete, onToggle }) => {
  return (
    <div className={`tarea ${tarea.terminada ? 'terminada' : ''}`}  onDoubleClick={()=> onToggle(tarea.id)}>
        <h3>{tarea.texto}<FaTimes onClick={() => onDelete(tarea.id)} style={{color:'red', cursor:'pointer'}}/></h3>
        <h3>{tarea.fecha}</h3>
    </div>
  )
}

export default Tarea

//Es equivalente a la linea 5
//if(tarea.terminada == true) {'terminada'} else {''}