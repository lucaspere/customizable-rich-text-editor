import React from 'react';
import { RichUtils, EditorState } from 'draft-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StylingBar = ({ editorState, setEditorState }) => {

   return (
      <div>
         <button onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))}>
            <FontAwesomeIcon icon="bold" />
         </button>
      </div>
         )
}

export default StylingBar