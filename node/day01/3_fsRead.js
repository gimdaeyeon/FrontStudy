import fs from 'fs';
const fsPromise = fs.fsPromises;

let text = null

try {
  text = fs.readFileSync('./text1.txt', 'utf-8');
  console.log(text);
} catch (error) {
  console.log('파일 읽기 실패');
}finally{
  console.log('결과 값과 상관없이 실행');
}

// 실행 후 결과값을, data = 성공 || undefined, err = 실패
fs.readFile('./text2.txt', 'utf-8', (err,data)=>{
  if(data){
    console.log(data);
  }else{
    console.log(err);
  }
});

// fsPromise
//     .readFile('./day01.txt', 'utf-8') // 실행 후
//     .then((result)=>console.log(result)) // 성공 후 실행 할 내용
//     .catch((error)=>{
//       console.log(error);// 실패 시 실행 할 내용
//     });
    

