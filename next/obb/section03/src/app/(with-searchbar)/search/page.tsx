import BookItem from "@/components/book/book-item";
import {BookData} from "@/types";
import {delay} from "@/util/delay";
import {Suspense} from "react";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import {Metadata} from "next";

// export const dynamic = 'error';

// 특정 페이지의 유형을 강제로 Static, Dynamic 페이지로 설정
// 1. auto : 기본값, 아무것도 강제하지 않음
// 2. force-dynamic : 페이지를 강제로 Dynamic 페이지로 설정
// 3. force-static : 페이지를 강제로 Static 페이지로 설정
// 4. error : 페이지를 강제로 Static 페이지로 설정(설정하면 안되는 이유->빌드오류)

async function SearchResult({q}: { q: string }) {
    await delay(500);
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
        {cache: "force-cache"}
    );

    if (!response.ok) {
        return <div>오류가 발생했습니다...</div>;
    }

    const books: BookData[] = await response.json();

    return (
        <div>
            {books.map((book) => (
                <BookItem key={book.id} {...book} />
            ))}
        </div>
    );
}

export async function generateMetadata({searchParams,}: { searchParams: Promise<{ q?: string }>; }):Promise<Metadata> {
//     현재 페이지 메타 데이터를 동적으로 생성한느 역할을 한다.
    const {q} = await searchParams;
    return {
        title: `${q} : 한입북스 검색`,
        description: `${q}의 검색 결과입니다.`,
        openGraph: {
            title: `${q} : 한입북스 검색`,
            description: `${q}의 검색 결과입니다.`,
            images:['/thumbnail.png'],
        }
    };
}

export default async function Page({
                                       searchParams,
                                   }: {
    searchParams: Promise<{ q?: string }>;
}) {
    const {q} = await searchParams;

    return (
        <Suspense key={q || ''} fallback={<BookListSkeleton count={3}/>}>
            <SearchResult q={q || ''}/>
        </Suspense>);
}
