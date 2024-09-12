// 학습 노트 조작과 관련된 crud API 함수 파일

import {posts} from "@/api/index";

function fetchPosts(){
    return posts.get('');
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData){
    return posts.post('',postData)
}

function deletePost(postId){
    return posts.delete(`/${postId}`);
}
function fetchPost(postId){
    return posts.get(`/${postId}`)
}

function editPost(postId,postData){
    console.log(postData)
    return posts.put(`/${postId}`,postData);
}

export {
    fetchPosts,
    createPost,
    deletePost,
    fetchPost,
    editPost,
}