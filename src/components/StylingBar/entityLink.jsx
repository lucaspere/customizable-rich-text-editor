import React from 'react';
import { EditorState, RichUtils } from 'draft-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EntityLink = ({ editorState, setEditorState }) => {

   const onPromptForLink = (e) => {
      e.preventDefault();

      const selection = editorState.getSelection();

      if (!selection.isCollapsed()) {

         const contentState = editorState.getCurrentContent();
         const startKey = selection.getStartKey();
         const startOffset = selection.getStartOffset();
         const blockWithLinkAtBeginin = contentState.getBlockForKey(startKey);
         const linkKey = blockWithLinkAtBeginin.getEntityAt(startOffset);

         let url = window.prompt("insira o link");

         if (linkKey) {
            const linkInstance = contentState.getEntity(linkKey);
            url = linkInstance.getData().url;
         }

         const contentStateWithEntity = contentState.createEntity("LINK", "MUTABLE", { url });

         const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

         const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });

         setEditorState(RichUtils.toggleLink(newEditorState, selection, entityKey));
      }
   }

   return (
      <div>
         <button onClick={onPromptForLink}>
            <FontAwesomeIcon icon="link" />
         </button>
      </div>
   )
}
export default EntityLink