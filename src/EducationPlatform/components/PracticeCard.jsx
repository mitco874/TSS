import { useNavigate } from "react-router-dom";

export const PracticeCard = ({practiceData}) => {
    const {id_practica,titulo_practica,contenido,enlace_practica}=practiceData;
    const navigate=useNavigate();

  return (
    <div style={{'background':'#F4F4F4'}} className="d-flex justify-content-between mb-5 mx-auto w-100 shadow p-3 mb-5  rounded ">
        <p><b>Id: </b>{id_practica}  <b>Clase: </b>{titulo_practica}</p>
        <button style={{'background':'#485BFF','color':"white" }} className="btn" onClick={()=>{navigate(`/compiler/${id_practica}`);}}>Revisar </button>
    </div>
  )
} 