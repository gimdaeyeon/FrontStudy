import React from 'react';
import * as S from '../sytle'; 

const SignUpForm = () => {
  return (
    <S.Form>
              <S.InputBox><label>이메일</label><input/></S.InputBox>
              <S.InputBox><label>비밀번호</label><input/></S.InputBox>
              <S.InputBox><label>비밀번호 확인</label><input/></S.InputBox>
              <button>회원가입</button>
          </S.Form>
  );
};

export default SignUpForm;




