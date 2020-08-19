class Comment {
  constructor({username, body}) {
    this._username = username;
    this._body = body;
  }

  get username() {
    return this._username;
  }

  get body() {
    return this._body;
  }

  static createCommentInstance(commentDataList) {
    return commentDataList.map(comment => {
      new Comment(comment);
    })
  };

};

export default Comment;