import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBold, faCode, faItalic } from '@fortawesome/free-solid-svg-icons';
import { ÈditorState, EditorState } from 'draft-js';

import './richTextEditor.css';

library.add(faBold, faCode, faItalic)

const RichTextEditor = () => {
   const [editorState, setEditorState] = useState(
      EditorState.createEmpty();
   )

   return (
      <div>
         oi
      </div>
   )
}
export default RichTextEditor