import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Viewer from "../components/Viewer.jsx";
import useDiary from "../hooks/useDiary.jsx";
import {getStringedDate} from "../util/get-stringed-date.js";
import usePageTitle from "../hooks/usePageTitle.jsx";

const Diary = () => {
    const {id} = useParams();
    const nav = useNavigate();
    const curDiaryItem = useDiary(id);
    usePageTitle(`${id}번 일기`);
    if (!curDiaryItem) {
        return <div>데이터 로딩중...!</div>;
    }

    const title = getStringedDate(new Date(curDiaryItem.createdDate));

    return (
        <div>
            <Header title={`${title} 기록`}
                    leftChild={<Button text={'< 뒤로 가기'} onClick={() => nav(-1)}/>}
                    rightChild={<Button text={'수정하기'} onClick={() => nav(`/edit/${id}`)}/>}
            />
            <Viewer {...curDiaryItem} />
        </div>
    );
};

export default Diary;