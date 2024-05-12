import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import React, { useRef, useState } from 'react';
import "../../styles/Compiler.css"

export function Compiler(){

    const editorRef = useRef(null); // Set reference to be able to get code
    const [code, setCode] = useState(null);


    function handleEditorDidMount(editor) {
      editorRef.current = editor;
    }
  
    function getValue() {
      setCode(editorRef.current.getValue())
    }

    return(
        <div>
          <span className='compilerNavBar'>
            <button className='play_arrow' onClick={getValue}>play_arrow</button>
            <button className='drop_down'>arrow_drop_down</button>
          </span>
            <Editor
                  height="75vh"
                  onMount={handleEditorDidMount}
              />
            <div className='codeSpace'>
              {code}
            </div>
        </div>
    )
}