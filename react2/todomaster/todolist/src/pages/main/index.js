import { styled } from 'styled-components';
import SignInForm from './components/SignIn/SignIn';
import SignUpForm from './components/SignUp/Signup';
import { flexCenter } from '../../styles/global';
import { useState } from 'react';

const MainPage = ()=>{

  let [isFormLogin, setIsFormLogin] = useState(true);

  const onClickFormHeader = (e)=>{
     const {innerText} = e.target;
     console.log(innerText);
     if(innerText === 'LOGIN'){
      return setIsFormLogin(true);
     }else{
      setIsFormLogin(false);
     }
  }
  
  const handleClickFormHeader = (e)=>{

  }


    return (
      <S.Container>
          <S.Header>
              <div onClick={onClickFormHeader}>LOGIN</div>
              <div onClick={onClickFormHeader}>SIGN</div>
          </S.Header>
          {isFormLogin?<SignInForm/>:<SignUpForm/>}
      </S.Container>
    );

}
export default MainPage;

const Container = styled.div`
    width: 100%;
    height: calc(100vh-60px);
   ${flexCenter}
    flex-direction: column;
`;

const Header = styled.div`
    width: 360px;
    height: 48px;
    display: flex;
    background-color: pink;
`;

const S ={
  Container,
  Header
}