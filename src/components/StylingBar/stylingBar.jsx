import React from 'react';
import { RichUtils, EditorState } from 'draft-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StylingBar = ({ editorState, setEditorState }) => {

   const inline = [
      {
         name: 'bold',
         type: 'BOLD',
      }, {
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

   const block = [
      {
         name: 'heading',
         type: 'header-one',
      }, {
         name: 'quote-right',
         type: 'blockquote',
      }, {
         name: 'list-ul',
         type: 'unordered-list-item'
      }, {
         name: 'list-ol',
         type: 'ordered-list-item'
      }
   ]
   return (
      <div>
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
         <div>
            {block.map((item, idx) => (
               <button
                  onClick={() => setEditorState(RichUtils.toggleBlockType(editorState, item.type))}
                  key={`${item.name}: ${idx}`}
               >
                  <FontAwesomeIcon icon={item.name} />
               </button>
            ))}
         </div>
      </div>
   )
}

export default StylingBar