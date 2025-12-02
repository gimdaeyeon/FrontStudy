import style from './index.module.css';
import SearchableLayout from "@/components/searchable-layout";
import {ReactNode,} from "react";
import BookItem from "@/components/book-item";
import {InferGetStaticPropsType} from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import Head from 'next/head';

// SSR 방식
// export const getServerSideProps = async () => {
// SSG 방식
export const getStaticProps = async () => {
  // 병렬로 API 요청
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);
  return {
    props: {
      allBooks,
      recoBooks,
    },
    // revalidate :3,// 3초 주기로 재검증 (ISR 설정) 시간을 기반으로 페이지 재생성
  }
};

export default function Home({
                       allBooks,
                       recoBooks,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
                     }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (<>
    <Head>
      <title>한입북스</title>
      <meta property="og:image" content="/thumbnail.png" />
      <meta property="og:title" content="한입북스" />
      <meta
          property="og:description"
          content="한입 북스에 등록된 도서들을 만나보세요"
      />
    </Head>
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
            <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
            <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  </>);
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}