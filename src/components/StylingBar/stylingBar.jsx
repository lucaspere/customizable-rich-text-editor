import React from 'react';
import { RichUtils, EditorState } from 'draft-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StylingBar = ({ editorState, setEditorState }) => {

   const inline = [
      {
         name: 'bold',
         type: 'BOLD',
      },{
         name: 'code',
         type: 'CODE'
      }, {
         name: 'underline',
         type: 'UNDERLINE',
      }, {
         name: 'italic',
         type: 'ITALIC'
      }
   ]
   return (
      <div>
         {inline.map((item, idx) => (
            <button
               onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, item.type))}
               key={`${item.name}: ${idx}`}
            >
               <FontAwesomeIcon icon={item.name} />
            </button>
         ))}
      </div>
   )
}

export default StylingBar