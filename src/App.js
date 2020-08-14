import React from 'react';
import CommentList from './Component/CommentList/CommentList'
import Form from './Component/Form/Form'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: ['初期コメント']
    };

    this.addComment = this.addComment.bind(this);
  }

  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    });
  }

  render() {
    return(
      <div className="App">
        <Form onSubmit={body => this.addComment(body)} />
        <CommentList comments={this.state.comments}></CommentList>
      </div>
    )
  };
}
export default App;
