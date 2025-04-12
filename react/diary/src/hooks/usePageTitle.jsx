import {useEffect} from 'react';

const UsePageTitle = (title) => {
    useEffect(() => {
        const $title = document.getElementsByTagName('title')[0];
        $title.innerText = title;
    }, [title]);
};

export default UsePageTitle;