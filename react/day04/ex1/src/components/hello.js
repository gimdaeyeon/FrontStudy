
const Hello = ({color,name,isLover})=>{
  return (
    <div style = {color && {color:color}}>
      안녕하세요 {name}님!
      {isLover ? <span>❤️</span>: "💔" }
      <span style = {{color : "red", fontSize : "50px"} }>반갑습니다</span>
    </div>
  );
}
// 강의시간 02:12:04
export default Hello;