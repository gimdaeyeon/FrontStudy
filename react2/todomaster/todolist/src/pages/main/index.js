import { styled } from 'styled-components';
import SignInForm from './components/SignIn/SignIn';
import SignUpForm from './components/SignUp/Signup';

const MainPage = ()=>{

  let isFormLogin = true;

  const onClickFormHeader = (e)=>{
     const {innerText} = e.target;
     if(innerText === 'LOGIN'){
      isFormLogin = true
     }else{
       isFormLogin = false;
     }
     console.log(isFormLogin);
  }
  
  const handleClickFormHeader = (e)=>{

  }


    return (
      <Container>
          <Header>
              <div onClick={onClickFormHeader}>LOGIN</div>
              <div onClick={onClickFormHeader}>SIGN</div>
          </Header>
          {isFormLogin?<SignInForm/>:<SignUpForm/>}
      </Container>
    );

}
export default MainPage;

const Container = styled.div`
    width: 100%;
    height: calc(100vh-60px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Header = styled.div`
    width: 360px;
    height: 48px;
    display: flex;
    background-color: pink;
`;

