import React from 'react';
import './DiaryItem.css'
import {getEmotionImage} from "../util/get-emition-image.js";
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";
const DiaryItem = ({id,emotionId,createdDate, content}) => {
    const nav = useNavigate();
    return (
        <div className="diaryItem">
            <div onClick={()=>nav(`/diary/${id}`)}
                className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImage(emotionId)} alt=""/>
            </div>
            <div onClick={()=>nav(`/diary/${id}`)}
                className="info_section">
                <div className="created_date">
                    {new Date(createdDate).toLocaleDateString()}
                </div>
                <div className="content">{content}</div>
            </div>
            <div className="button_section">
                <Button onClick={()=>nav(`/edit/${id}`)} text={"수정하기"}/>
            </div>
        </div>
    );
};

export default DiaryItem;