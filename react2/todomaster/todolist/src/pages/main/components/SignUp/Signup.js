import React from 'react';
import { Form,InputBox } from '../sytle'; 

const SignUpForm = () => {
  return (
    <Form>
              <InputBox><label>이메일</label><input/></InputBox>
              <InputBox><label>비밀번호</label><input/></InputBox>
              <InputBox><label>비밀번호 확인</label><input/></InputBox>
              <button>회원가입</button>
          </Form>
  );
};

export default SignUpForm;




