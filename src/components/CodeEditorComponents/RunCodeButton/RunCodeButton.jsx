export const RunCodeButton = ({code,className}) => {
const uploadCode= async ()=>{

  const headerContent={'Accept': 'application/json','Content-Type': 'application/json'}

  const bodyContent=JSON.stringify({className: className, code:code, extention:'java'});
    console.log(bodyContent)
  const petition = await fetch('http://142.93.203.113:3001/api/compiler', {
    method: 'POST',
    headers: headerContent,
    body: bodyContent
  });
  const response=await petition.json();
  alert(response)
}

  return (
<button className="btn btn-primary" onClick={()=>{uploadCode()}}>Run Code</button>
  )
}
