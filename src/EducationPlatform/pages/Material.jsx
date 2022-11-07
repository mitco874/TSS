
import { useParams } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { usePracticeFetch } from "../../hooks/usePracticeFetch";
import { PracticeCard } from "../components/PracticeCard";

export const Material = () => {
  const { chapterId } = useParams();
  const { contain } = usePracticeFetch(`http://142.93.203.113:3001/api/chapters/${chapterId}/practice`);
  const { data, isLoading } = contain;
  const { id_capitulo, practicas } = data;
  return (
    <div className="d-flex" >
      <div style={{'background':'#333980','height':'100vh' }}><SideBar /></div>
      <div className="mx-3">
        <h2>practica del tema: {id_capitulo}</h2>
        <br />
        {isLoading}
        {
          isLoading ? (<p>No se encontraron prácticas</p>) :
            (<>{practicas.map((practica) => (<PracticeCard key={practica.id_practica} practiceData={practica} />))}</>)

        }
      </div>
    </div>


  );
};


