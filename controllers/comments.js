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
  },
  putComment: (req, res) => {
    const id = req.params.id;
    const {username, body} = req.body;
    const parsedId = id.parseInt(id, 10);

    try {
      const updateComment = Comment.update({
        id: parsedId,
        username,
        body
      });

      res.status(200).json(updateComment);    
    } catch (error) {
      res.status(400).json({message: error.message})
    }
  },
  
}