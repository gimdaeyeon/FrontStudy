export const Private ="";


// 토큰 로컬 스토리지 저장
// 토큰 값으로 무엇을 판단할 수 있을까? = 로그인한 사용자다
// 로그인 되어있는 사람만 페이지에 접근
// 로그인 안된 사람은 자동으로 로그인 페이지로 가지도록

/*
  const PrivateRoute = ()=>{
      const auth = useRef(TokenService.getToken(process.env.REACT_APP_TOKEN as string));
      return auth.current?<Outlet/> : <Navigate to="/Login" />;

      Outlet, Navigate => react-router-dom 
  }
  
  export default Private


*/