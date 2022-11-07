import { OptionsSelector } from "../OptionsSelector/OptionsSelector";
import { RunCodeButton } from "../RunCodeButton/RunCodeButton";
import {useSelect} from "../../../hooks/useSelect"
import { useFetch } from "../../../hooks/useFetch";
import AceEditor from "react-ace";
import { useState } from "react";

export const EditorGrid = ({code,className}) => {
  const defaultLanguage='java';
  const codeURL='';
  const {language,onSelectChange}=useSelect(defaultLanguage);
  const {contain}=useFetch(codeURL);
  const {data,isLoading,hasError}=contain;
  const [programCode,setProgramCode]=useState(code);

  const onCodeChangue=(newValue)=>{
    setProgramCode(newValue)
  }

  return (
    <div>
        <div className="row">
            <div className="col col-7"><OptionsSelector defaultValue={language} onSelectChange={onSelectChange}/></div>
            <div className="col col-5 align-self-end" ><RunCodeButton code={programCode} className={className}/></div>
        </div>

      <AceEditor mode={language}
                theme="dracula"
                name="UNIQUE_ID_OF_DIV"
                fontSize={14}
                value={programCode}
                onChange={onCodeChangue}
                setOptions={{
                  enableLiveAutocompletion: true,
                  showLineNumbers: true,
                  }}
                editorProps={{ $blockScrolling: true }}
                style={{height:"50vh",width:'95%'}}/>

    </div>
  )
}

EditorGrid.defaultProps={
  code:"",
  className:""
}
