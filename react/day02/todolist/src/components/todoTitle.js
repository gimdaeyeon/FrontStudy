import styled  from 'styled-components';

const TodoTitle = ({number}) => {



  return (
    <TitleDiv>
        <h1>
         {number>0?`남은 할 일 ${number}개`:'완료~!'}   
        </h1>
    </TitleDiv>
  );
};

const TitleDiv = styled.div`
  background-color: tomato;
  height: 100px;
  color: white;
  display: flex;
`;

export default TodoTitle;    