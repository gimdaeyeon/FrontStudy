
const express = require('express');
const router = express.Router();
const {Post,User, Momment, Reply} = require('../models');

router.get('/', async(req, res, next)=>{
  try {
    const where = {};
    const posts = await Post.findAll({
      where,
      limit : 10,
      order :[
        ['createdAt', 'DESC'],
        [Comment, "createdAt", 'DESC'],
      ],
      include : [
        {
          model : User,
          attributes : ['id', 'name'],
        },
        {
          model : Comment,
          include : [
            {
              model : User,
              attributes : ['id', 'name'],
            },
            {
              model : Reply,
              include : [
                {
                  model : User,
                  attributes : ['id', 'name'],
                },
              ],
            },
          ],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
      console.log(error);
      next(error);
  }
});





router.post('/',isLoggedin,PostService.create);
router.put('/',isLoggedin ,PostService.update);
router.get('/all',PostService.readAll);
router.delete('/:postId',isLoggedin,PostService.delete);


export default router;
