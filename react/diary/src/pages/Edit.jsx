import React, {useContext} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import {DiaryDispatchContext} from "../App.jsx";
import useDiary from "../hooks/useDiary.jsx";
import usePageTitle from "../hooks/usePageTitle.jsx";

const Edit = () => {
    const {id} = useParams();
    const nav = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    const curDiaryItem = useDiary(id);
    usePageTitle(`${id}번 일기 수정`);

    const onClickDelete = ()=>{
        if(!confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!')) return;
        onDelete(id);
        nav('/',{replace:true});
    }

    const onSubmit = (input)=>{
        if (!confirm('일기를 정말 수정할까요?')) return;
        onUpdate(id, input.createdDate.getTime(),input.emotionId, input.content);
        nav('/',{replace: true});
    }

    return (
        <div>
            <Header
                title={'일기 수정하기'}
                leftChild={<Button text={'뒤로가기'} onClick={()=>nav(-1)} />}
                rightChild={<Button text={'삭제하기'} type={'NEGATIVE'} onClick={onClickDelete} />}
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit} />
        </div>
    );
};

export default Edit;