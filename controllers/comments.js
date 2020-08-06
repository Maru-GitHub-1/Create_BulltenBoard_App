const Comment = require('../models/Comment')

module.exports = {
  getComment: (req, res) => {
    const storedComments = Comment.findAll();

    res.status(200).json(storedComments);
  },
  postComment: (req, res) => {
    try {
      const {username, body} = req.body;
      const createComment = Comment.create({username, body});

      res.status(200).json(createComment);
    } catch  (error) {
      res.status(400).json({message: error.message})
    }
  }
  
}