import produce  from 'immer';
// 불변성


// 전역으로 사용할 state
const initialState = {
  allPost : [],
  allPostsLoading : false,
  allPostsDone : false,
  allPostsError : null,
  
  addPostLoading : false,
  addPostDone : false,
  addPostError : null,
  
  removePostLoading : false,
  removePostDone : false,
  removePostError : null,
  
  updatePostLoading : false,
  updatePostDone : false,
  updatePostError : null,
  
  addCommentLoading : false,
  addCommentDone : false,
  addCommentError : null,
  
  removeCommentLoading : false,
  removeCommentDone : false,
  removeCommentError : null,
  
};

// create action
export const LOAD_ALLPOSTS_REQUEST =  'LOAD_ALLPOSTS_REQUEST';
export const LOAD_ALLPOSTS_SUCCESS =  'LOAD_ALLPOSTS_SUCCESS';
export const LOAD_ALLPOSTS_FAILURE =  'LOAD_ALLPOSTS_FAILURE';

// reducer
const reducer = (state = initialState, action)=>{
    return produce(state, (draft)=>{
        switch (action.type) {
          case LOAD_ALLPOSTS_REQUEST:
              draft.allPostsLoading = true;
              draft.allPostsDone = false;
              draft.allPostsError = null;
            break;
          case LOAD_ALLPOSTS_SUCCESS:
              draft.allPostsLoading = false;
              draft.allPostsDone = true;
              draft.allPost = action.data.concat(draft.allPost);
            break;
          case LOAD_ALLPOSTS_FAILURE:
              draft.allPostsLoading = false;
              draft.allPostsDone = false;
              draft.allPostsError = action.error;
            break;
        }
    });
};




