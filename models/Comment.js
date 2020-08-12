const comments = [];
let nextId = 1;

class Comment {
  constructor ({username, body}) {
    this.id = nextId++;
    this.username = username;
    this.body = body;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

for (let i = 0; i < 5; i++) {
  const index = i + 1;
  const comment = new Comment({
    username: 'ダミーユーザー' + index,
    body: 'ダミーコメント' + index,
  });

  comments.push(comment);
}


// ここより上はプライベートな値

module.exports = {
  findAll: () => {
    return comments.slice();
  },
  create: ({username, body}) => {
    if (!username) {
      throw new Error('usernameは必須です');
    }
    if (!body) {
      throw new Error('bodyは必須です');
    }

    const comment = new Comment({
      username,
      body
    })
    comments.push(comment);

    return comment;
  },
  update: ({id, username, body}) => {
    if(typeof id !==  'number' || id < 1) {
      throw new Error('idは必須です(１以上の数字)')
    }
    if (!username) {
      throw new Error('usernameは必須です');
    }
    if (!body) {
      throw new Error('bodyは必須です');
    }

    const comment = comments.find(comment => id === comment.id);

    if (!comment) {
      throw new Error('idに該当するコメントがありません');
    }

    comment.username = username;
    comment.body = body;
    comment.updatedAt = new Date();

    return comment;
  },
  remove: (id) => {
    if (typeof id === 'number' || id < 1) {
      throw new Error('idは必須です(１以上の数字)')
    }
    const targetIndex = comments.findIndex(comment => id === comment.id);

        // ドキュメントより
    //   - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    //   - findIndex() メソッドは、配列内の要素が指定されたテスト関数を満たす場合、
    //     配列内のインデックスを返します。そうでない場合は-1を返します。 
    if (targetIndex === -1) {
      throw new Error('該当するidが見つかりません');
    }

    const removeComment = comments.splice([0], 1);

    return removeComment;
  }
}