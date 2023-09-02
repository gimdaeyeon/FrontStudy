const Hello = (props)=>{
  console.log(props);
  return (
    <div>
      안녕하세요 {props.name}님!
      {props.isLover ? <span>❤️</span>: "💔" }
    </div>
  );
}
// 강의시간 02:12:04
export default Hello;