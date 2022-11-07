import { useParams } from "react-router-dom"
import { usePracticeFetch } from "../../../hooks/usePracticeFetch"
import SideBar from "../../SideBar/SideBar"
import { Console } from "../Console/Console"
import { Description } from "../Description/Description"
import { EditorGrid } from "../EditorGrid/EditorGrid"

export const PracticeCodeEditor = () => {
  const {practiceId}=useParams();
  const { contain } = usePracticeFetch(`http://142.93.203.113:3001/api/practice/${practiceId}`);
  const { data, isLoading } = contain;
  const {id,titulo_practica, contenido,enlace_practica } = data[0] || {};
  console.log(titulo_practica)
  return (
<div className="d-flex justify-content-start" >

<div style={{'background':'#333980','height':'100vh' }}><SideBar /></div>

{isLoading? (<>cargando practica</>) :     (<div style={{height:'90vh','width':'200vh'}} className='mx-5'>
      <h2 className="text-center" style={{'width':'100vh'}} > {titulo_practica} </h2>
      <section className="container" style={{height:'90vh','width':'100vh'}}>
        <div className="row">
          <div className="col-1"><Description description={"descripcion"}/></div>
          <div className="col-11 " style={{height:'60vh'}}><EditorGrid code={contenido} className={titulo_practica}/></div>
        </div>
        {/* <div className="mt-2 col col-12"><Console/></div> */}
      </section>
    </div>)  }

</div>
  )
}


