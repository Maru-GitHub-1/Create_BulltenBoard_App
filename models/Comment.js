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