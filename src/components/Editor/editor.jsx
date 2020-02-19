import React from 'react';
import { Editor as DraftEditor, RichUtils } from 'draft-js'

import './editor.css'
import StylingBar from '../StylingBar/stylingBar';


const Editor = ({ editorState, setEditorState }) => {

   const handleKeyCommand = (command, editorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command)

      if (newState) {
         setEditorState(newState)

         return 'handled';
      }

      return 'not-handled'
   }

   return (
      <div className="editor">
         <DraftEditor
            placeholder="Personalize seu texto do jeito que quiser"
            editorState={editorState}
            onChange={setEditorState}
            handleKeyCommand={handleKeyCommand}
         />
      </div>
   )
}

export default Editor