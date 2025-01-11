import axios from "axios";

const instance = axios.create({
    baseURL:'https://api.hnpwa.com/v0/'
});

export function fetchNewsList(){
    return instance.get(`news/1.json`);
}

export function fetchJobsList(){
    return instance.get(`jobs/1.json`);
}

export function fetchAskList(){
    return instance.get(`ask/1.json`);
}
