import React from 'react';
import './EmotionItem.css'
import {getEmotionImage} from "../util/get-emition-image.js";
const EmotionItem = ({emotionId, emotionName, isSelected,onclick}) => {
    return (
        <div className={`emotionItem ${isSelected?`emotionItem_on_${emotionId}`:''}`}
             onClick={onclick}
        >
            <img className="emotion_img" src={getEmotionImage(emotionId)}  alt={emotionName}/>
            <div className="emotion_name">{emotionName}</div>
        </div>
    );
};

export default EmotionItem;