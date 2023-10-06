import React from 'react';
import * as S from '../sytle'; 

const SignInFrom = () => {
  return (
    <S.Form>
              <S.InputBox><label>이메일</label><input/></S.InputBox>
              <S.InputBox><label>비밀번호</label><input/></S.InputBox>
              <button>로그인</button>
          </S.Form>
  );
};

export default SignInFrom;




