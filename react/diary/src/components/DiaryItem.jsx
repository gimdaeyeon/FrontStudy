import React from 'react';
import './DiaryItem.css'
import {getEmotionImage} from "../util/get-emition-image.js";
import Button from "./Button.jsx";
const DiaryItem = () => {
    const emotionId = 1;
    return (
        <div className="diaryItem">
            <div className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImage(emotionId)} alt=""/>
            </div>
            <div className="info_section">
                <div className="created_date">
                    {new Date().toLocaleDateString()}
                </div>
                <div className="content">일기 컨텐츠</div>
            </div>
            <div className="button_section">
                <Button text={"수정하기"}/>
            </div>
        </div>
    );
};

export default DiaryItem;