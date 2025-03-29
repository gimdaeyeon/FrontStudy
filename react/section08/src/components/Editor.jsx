import React, {useRef, useState} from 'react';
import './Editor.css'

const Editor = ({onCreate}) => {
    const [content, setContent] = useState('');
    const contentRef = useRef(null);
    const onSubmit = () => {
        if (!content) {
            alert('값을 입력해 주세요');
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent('');
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSubmit();
        }
    }

    return (
        <div className="Editor">
            <input placeholder="새로운 Todo..." value={content} ref={contentRef}
                   onChange={(e) => setContent(e.target.value)}
                   onKeyDown={onKeyDown}
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;