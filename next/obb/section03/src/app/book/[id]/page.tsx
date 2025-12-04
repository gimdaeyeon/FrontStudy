import style from "./page.module.css";
import {BookData} from "@/types";
import {notFound} from "next/navigation";

// generateStaticParams 로 반환된 url이외의 페이지를 동적으로 생성하지 않고 404페이지로 이동
// export const dynamicParams = false;

// return 되는 params id에 해당하는 페이지가 필드타임에 생성된다
// export function generateStaticParams(){
//     return [{id:'1'},{id:'2'},{id:'3'}, ];
// }

async function BookDetail({bookId}:{bookId:string}){
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`,
    );

    if(!response.ok){
        if(response.status===404){
            notFound();
        }
        return <div>오류가 발생했습니다...</div>
    }

    const book:BookData = await response.json();

    const { title, subTitle, description, author, publisher, coverImgUrl } = book;

    return (
        <section>
            <div
                className={style.cover_img_container}
                style={{ backgroundImage: `url('${coverImgUrl}')` }}
            >
                <img src={coverImgUrl} />
            </div>
            <div className={style.title}>{title}</div>
            <div className={style.subTitle}>{subTitle}</div>
            <div className={style.author}>
                {author} | {publisher}
            </div>
            <div className={style.description}>{description}</div>
        </section>
    );
}

function ReviewEditor(){

    async function createReviewAction(formData:FormData){
        'use server';

        const content = formData.get('content')?.toString();
        const author = formData.get('author')?.toString();
    }

    return (
        <section>
            <form action={createReviewAction}>
                <input name="content" placeholder="리뷰 내용" />
                <input name="author" placeholder="작성자" />
                <button type="submit">작성하기</button>
            </form>
        </section>
    );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return <div className={style.container}>
        <BookDetail bookId={id}/>
        <ReviewEditor/>
    </div>;
}
