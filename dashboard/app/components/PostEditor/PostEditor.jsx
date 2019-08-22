import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';

const PostEditor = () => {
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty(),
  );

  return (
    <div role="main" className="editor">
      <Editor
        editorState={editorState}
        onChange={setEditorState}
      />
    </div>
  );
};

export default PostEditor;
