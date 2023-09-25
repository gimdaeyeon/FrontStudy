
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { LOAD_ALLPOSTS_REQUEST } from '../../reducer/post';

const HomeMain = () =>{
  const dispatch = useDispatch();
  const {allPost } = useSelector((state)=>state.allPost);

  useEffect(()=>{
    dispatch({
      type : LOAD_ALLPOSTS_REQUEST,
    })
  },[]);

  return (
    ""
    // <StyledWrap>
    //     <PostForm/>
    //     {allPost.length > 0 && allPost.map((v)=><Post key={v.id} post={v} />)}
    // </StyledWrap>
  );


};

export default HomeMain;

