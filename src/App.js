import React from 'react';
import Button from './Component/Button/Button';
import CommentList from './Component/CommentList/CommentList'

function App() {
  const comments = [
    'aaaaaa',
    'bbbbbb',
    'cccccc'
  ];

  return (
    <div className="App">
      <Button>送信する</Button>
      <CommentList comments={comments}></CommentList>
    </div>
  );
};

export default App;
