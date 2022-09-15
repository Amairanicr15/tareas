import { FaTimes } from 'react-icons/fa'

const Tarea = ({ tarea, onDelete }) => {
  return (
    <div className='tarea' >
        <h3>{tarea.texto}<FaTimes onClick={() => onDelete(tarea.id)} style={{color:'red', cursor:'pointer'}}/></h3>
        <h3>{tarea.fecha}</h3>
    </div>
  )
}

export default Tarea