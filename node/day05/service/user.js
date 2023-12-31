import bcrypt from 'bcrypt';
import User from '../models/user.js';
import passport from 'passport';


export default class UserService{

  static async signUp(req,res,next){
      try {
        console.log(req.body);

        // findOne 검색된 최상단 데이터 한가지 가지고 온다(객체형태)
        // findAll 검색된 데이터 모두 가지고 온다(배열형태)
        const exUser = await User.findOne({
              where:{
                  email : req.body.email,
              },
        });

        if(exUser){
            return res.status(403).send('이미 사용중인 이메일입니다.');
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12)
        // 단방향 암호화
        
        // create 데이터 저장(sql의 insert)
        await User.create({
            email : req.body.email,
            password : hashedPassword,
        });
        res.status(200).send('ok');
      } catch (err) {
        console.error(err);
        next(err)
      }
  }

  static async login(req, res, next){
    // 인증, 실행("키", "값")
      passport.authenticate('local',(err, user,message)=>{
          if(err){
            console.log(err);
            return next(err);
          }

          if(message){
              return res.status(401).send(message);
          }

          //login 실행 함수, passport에서 주입
          return req.login(user, async (loginErr)=>{
              if(loginErr){
                console.error(err);
                return next(err);
              }

              const fullUser = await User.findOne({
                where : {id:user.id},
                attributes:{
                  exclude:['password'],
                },
              });
              return res.status(200).json(fullUser);
          });

      })(req,res,next);

  }




}





