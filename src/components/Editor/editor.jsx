import React from 'react';
import {Editor as DraftEditor} from 'draft-js'

import './editor.css'


const Editor = (props) => {

   return (
      <div className="editor">
         <DraftEditor 
             placeholder="Personalize seu texto do jeito que quiser"
             editorState={props.editorState}
             onChange={props.setEditorState}
         />
      </div>
   )
}

export default Editor