import style from "./page.module.css";
import {BookData, ReviewData} from "@/types";
import {notFound} from "next/navigation";
import ReviewItem from "@/components/review/review-item";
import ReviewEditor from "@/components/review/review-editor";
import Image from "next/image";

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
                <Image src={coverImgUrl} width={240} height={300} alt={`도서 ${title}의 표지 이미지`} />
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



async function ReviewList({bookId}:{ bookId: string}){
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`,
    );

    if(!response.ok){
        throw new Error(`Review fetch failed: ${response.statusText}`)
    }

    const reviews:ReviewData[] = await response.json();

    return <section>
        {reviews.map(review=>(
            <ReviewItem key={review.id} {...review} />
        ))}
    </section>;
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return <div className={style.container}>
        <BookDetail bookId={id}/>
        <ReviewEditor bookId={id}/>
        <ReviewList bookId={id}/>
    </div>;
}
