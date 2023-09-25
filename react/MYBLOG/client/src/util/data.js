import shortId from 'shortid';
import {faker} from '@faker-js/faker';

export const dummyUser = (data)=>({
    ...data,
    nickname : "대연님",
    id : 1,
    Posts:[{id:1}],
}); 

export const createDummyPost = (number)=>
    Array(number)
        .fill()
        .map(()=>({
            id : shortId.generate(),
            User : {
                id: shortId.generate(),
                nickname : faker.name.fullName(),
            },
            content : faker.lorem.paragraph(),
            Comments : [
                {
                    id : shortId.generate(),
                    User : {
                        id: shortId.generate(),
                        nickname : faker.name.fullName(),
                    },
                    content : faker.lorem.sentence(),
                },
            ],
        }));

export const dummyPost = (data) =>({
    id: shortId.generate(),
    User : {
        id : 1,
        nickname : '김대연',
    },
    content : data,
    Comments : [],
});

export const dummyComment = (data) =>({
    id : shortId.generate(),
    User : {
        id : 1,
        nickname : '김대연',
    },
    content : data,
});














