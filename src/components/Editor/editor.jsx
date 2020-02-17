import React from 'react';
import {Editor as DraftEditor} from 'draft-js'


const Editor = (props) => {

   return (
      <div>
         <DraftEditor 
             placeholder="Personalize seu texto do jeito que quiser"
             editorState={props.editorState}
             onChange={props.setEditorState}
         />
      </div>
   )
}

export default Editor