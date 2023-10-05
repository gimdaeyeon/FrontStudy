import React from 'react';
import { Form,InputBox } from '../sytle'; 

const SignInFrom = () => {
  return (
    <Form>
              <InputBox><label>이메일</label><input/></InputBox>
              <InputBox><label>비밀번호</label><input/></InputBox>
              <button>로그인</button>
          </Form>
  );
};

export default SignInFrom;




