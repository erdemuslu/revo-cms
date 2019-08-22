import React, { useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import showdown from 'showdown';
import axios from 'axios';

const Editor = () => {
  const [editorState, setEditorState] = useState('...');

  const handleSave = () => {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(editorState);

    console.log(html);

    axios.post('/post/save', {
      body: html,
      authorName: sessionStorage.getItem('email'),
    }, {
      headers: {
        'x-access-token': sessionStorage.getItem('token'),
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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

export default Editor;
