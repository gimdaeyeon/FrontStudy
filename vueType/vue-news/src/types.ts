export interface News {
    id: number;
    title: string;
    points: number;
    user: string;
    time: number;
    time_ago: string;
    comments_count: number;
    type: string;
    url: string;
    domain: string;
}

export interface Jobs {
    id: number
    comments_count: number;
    domain: string;
    time: number;
    time_ago: string;
    title: string;
    type: string;
    url: string;
    user: string;
    points: number;
}

export interface Asks {
    id: number;
    points: number;
    time: number;
    comments_count: number;
    time_ago: string;
    title: string;
    type: string;
    url: string;
    user: string;
}


export interface User {
    about: string;
    created: string;
    created_time: number;
    id: string;
    karma: number;
}

export interface Item {
    comments_count: number;
    content:string;
    id:number;
    points:number;
    time:number;
    time_ago: string;
    title: string;
    type: string;
    url: string;
    user: string;
}

