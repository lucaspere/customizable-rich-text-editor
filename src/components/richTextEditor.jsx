import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
   faBold,
   faCode,
   faItalic,
   faUnderline,
   faHeading,
   faQuoteRight,
   faListUl,
   faListOl,
   faLink,
   faUnlink
} from '@fortawesome/free-solid-svg-icons';
import { EditorState, CompositeDecorator } from 'draft-js';

import Editor from './Editor/editor';
import StylingBar from './StylingBar/stylingBar';

import './richTextEditor.css';

library.add(faBold, faCode, faItalic, faUnderline, faHeading, faQuoteRight, faListUl, faListOl, faLink, faUnlink)

const Link = (props) => {
   const { url } = props.contentState.getEntity(props.entityKey).getData();
   return (
      <a href={url} style={styles.link} rel="noopener noreferrer" target="_blank">
         {props.children}
      </a>
   );
};

const RichTextEditor = () => {

   const findLinkEntities = (contentBlock, callback, contentState) => {
      contentBlock.findEntityRanges(
         (character) => {
            const entityKey = character.getEntity();
            return (
               entityKey !== null &&
               contentState.getEntity(entityKey).getType() === 'LINK'
            );
         },
         callback
      );
   }

   const decorator = new CompositeDecorator([
      {
         strategy: findLinkEntities,
         component: Link,
      },
   ]);

   const [editorState, setEditorState] = useState(
      EditorState.createEmpty(decorator)
   );

   return (
      <div>
         <StylingBar
            editorState={editorState}
            setEditorState={setEditorState}
         />
         <Editor
            editorState={editorState}
            setEditorState={setEditorState}
         />
      </div>
   )
}

const styles = {
   link: {
      cursor: 'pointer',
      color: '#3b5998',
      textDecoration: 'underline',
   },
};

export default RichTextEditor