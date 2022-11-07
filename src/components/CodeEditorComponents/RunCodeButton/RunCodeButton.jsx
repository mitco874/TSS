export const RunCodeButton = ({code,className}) => {
const uploadCode= async ()=>{
  console.log(className)
  console.log(code)
  const headerContent={
    'Content-Type': 'application/json'}
  const bodyContent={'className': className, 'code':code, 'extention':'java'};
  
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
