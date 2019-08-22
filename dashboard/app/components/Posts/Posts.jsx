import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/post/list', {
      headers: {
        'x-access-token': sessionStorage.getItem('token'),
      },
    })
      .then(({ data: { docs } }) => {
        console.log(docs);
        setPosts(docs);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div role="main" className="posts">
      <h1>Posts</h1>
      <div className="list">
        {
          posts ? posts.map((item, index) => <div className="list-item" role="main" key={index.toString()} dangerouslySetInnerHTML={{ __html: item.body }} />) : null
        }
      </div>
    </div>
  );
};

export default Posts;
