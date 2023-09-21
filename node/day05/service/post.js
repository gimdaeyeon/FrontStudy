import Post from "../models/post.js";
import User from "../models/user.js";

export default class PostService {
  static async create(req, res, next) {
    try {
      const post = await Post.create({
        content: req.body.content,

        userIdx: req.user.id,
      });

      // 강의시간 01:09:00
      const fullPost = await Post.findOne({
        where: { id: post.id },
        include: [
          {
            model: User,
            attributes : ['id','email']
          }
        ]
      });

      res.status(200).json(fullPost);

    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async readAll(req, res, next) {
    try {
    } catch (error) {}
  }
  static async read(req, res, next) {
    try {
    } catch (error) {}
  }
  static async update(req, res, next) {
    try {
    } catch (error) {}
  }

  static async delete(req, res, next) {
    try {
    } catch (error) {}
  }
}
