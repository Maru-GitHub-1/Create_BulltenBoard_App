const express = require('express');
const commentsRouter = require('./routers/comments');
const app = express();

// req.bodyで操作できるようになる(https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/implement-an-api-for-the-post-todo/)
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/api/comments', commentsRouter);

module.exports = app;