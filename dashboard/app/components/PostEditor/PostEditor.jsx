import React, { useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import showdown from 'showdown';
import 'easymde/dist/easymde.min.css';

const PostEditor = () => {
  const [editorState, setEditorState] = useState('...');

  const handleSave = () => {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(editorState);
    console.log(html);
  };

  return (
    <div role="main" className="editor">
      <SimpleMDE
        onChange={(val) => setEditorState(val)}
        value={editorState}
      />
      <button
        type="button"
        onClick={handleSave}
        className="save-btn"
      >
        Save
      </button>
    </div>
  );
};

export default PostEditor;
