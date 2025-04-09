import React, {useContext, useState} from 'react';
import './Editor.css'
import EmotionItem from "./EmotionItem.jsx";
import Button from "./Button.jsx";
import {DiaryDispatchContext} from "../App.jsx";
import {useNavigate} from "react-router-dom";

const emotionList = [
    {
        emotionId: 1,
        emotionName: '완전 좋음',
    },
    {
        emotionId: 2,
        emotionName: '좋음',
    },
    {
        emotionId: 3,
        emotionName: '그럭저럭',
    },
    {
        emotionId: 4,
        emotionName: '나쁨',
    },
    {
        emotionId: 5,
        emotionName: '끔찍함',
    },
]

const getStringedDate = (targetDate) => {
//     날짜 -> YYYY-MM-DD,
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();
    month = month.toString().padStart(2, '0');
    date = date.toString().padStart(2, '0');
    return `${year}-${month}-${date}`
}

const Editor = ({onSubmit}) => {

    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: '',
    });
    const nav = useNavigate();

    const onChangeInput = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if(name==='createdDate'){
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value,
        });
    }

    const onClickSubmitButton = ()=>{
        onSubmit(input)
    }

    return (
        <div className="editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input type="date" value={getStringedDate(input.createdDate)} name="createdDate"
                       onChange={onChangeInput}/>
            </section>
            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map(item =>
                        <EmotionItem key={item.emotionId} {...item}
                                     isSelected={item.emotionId === input.emotionId}
                                     onclick={()=>onChangeInput({
                                         target:{name:'emotionId', value: item.emotionId,}
                                     })}
                        />)
                    }
                </div>
            </section>
            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea name="content" placeholder="오늘은 어땠나요?" value={input.content} onChange={onChangeInput}/>
            </section>
            <section className="button_section">
                <Button text={'취소하기'} onClick={()=>nav(-1)}/>
                <Button text={'작성완료'} type="POSITIVE" onClick={onClickSubmitButton} />
            </section>
        </div>
    );
};

export default Editor;