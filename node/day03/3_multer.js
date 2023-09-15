import express from "express";
import morgan from "morgan";
import multer from "multer";

import fs from "fs";
import path from "path";

const app = express();
app.set("port", 3000);

const __dirname = path.resolve();
app.use(morgan("dev"), express.json(), express.urlencoded({ extended: false }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/", express.static(path.join(__dirname, "public")));

//
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      //도착지 설정 done(error, 폴더명)
      done(null, "uploads");
    },
    filename(req, file, done) {
      // 파일 이름의 확장자명
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      // 확장자를 제외한 파일명 + 현재 시간 +  확장자명
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  // 기준은 byte 5MB
});

try {
  fs.readdirSync('uploads');
} catch (error) {
  fs.mkdirSync('uploads/');
}

app.post('/upload', upload.single('image'),(req,res)=>{
  console.log(req.file);

  // DB에 파일 경로 저장하는 로직
  // 성공했다는 메시지
  // 게시글 조회할 때 해당 경로를 DB에서 찾아서 보낸다

  const data = {
    state : 'success',
    data: {
      src : `/uploads/${req.file.filename}`,
    },
  };

  res.status(200).json(data);


});

/*
upload.single 파일 1개만
upload.field 파일이 여러개일 때
  한 input type file에 파일이 여러개일 때와
  여러개의 input type file이 존재할 때


*/


app.post('/uploads', upload.fields([{name:'image1'}, {name:'image2'}]),
  (req,res)=>{
    console.log(req.files);
  }); 



app.listen(app.get("port"), () => {
  console.log(`${app.get("port")}번 포트에서 실행 중`);
});
