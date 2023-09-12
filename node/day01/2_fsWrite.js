import fs from "fs";

// const fs = require("fs"); //nodeJs 기본 지원 라이브러리(모듈) 설치 필요x
const fsPromise = fs.promises;

const data = "아 배고프다. Hello NodeJS";

fs.writeFile("./text1.txt", data, "utf-8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("파일이 정상적으로 저장되었습니다");
  }
});

fsPromise
  .writeFile("./text2.txt", data, "utf-8")
  .then(() => {
    console.log("파일이 정상적으로 저장되었습니다");
  })
  .catch((error) => {
    console.log(error);
  });
  

  try {
    fs.writeFileSync('./text3.txt', data, 'utf-8');
  } catch (error) {
  console.log(error);
}

