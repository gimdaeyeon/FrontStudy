import { HeaderList, HeaderWrapper, HeaderLogo } from "./style";

const LayOutHeader = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderLogo>
          <a href="./index.html">myBlog</a>
        </HeaderLogo>
        <HeaderList>
            <li>회원가입</li>
            <li>로그인</li>
          {/* <ul>
              <li>
                <a href="./myblog.html">마이블로그</a>
              </li>
            </ul> */}
        </HeaderList>
      </HeaderWrapper>
    </>
  );
};

export default LayOutHeader;
