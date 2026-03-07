import React from 'react';
import style from './[id].module.css';
import {GetStaticPropsContext, InferGetStaticPropsType} from "next";
import fetchOneBooks from "@/lib/fetch-one-book";
import {useRouter} from "next/router";

export const getStaticPaths = () => {
  return {
    paths: [
      {params: {id: "1"}},
      {params: {id: "2"}},
      {params: {id: "3"}},
    ],
    // fallback: false, // 404 Not Found 반환
    // fallback: 'blocking', // SSR 처럼 즉각적으로 페이지를 만들어서 반환
    fallback: true, // props가 없는 페이지 먼저 반환 후 필요한 데이터를 받으면 추가저으로 렌더링
  }
}

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const book = await fetchOneBooks(Number(id));

  if(!book){
    return {
      notFound: true
    };
  }

  return {
    props: {
      book
    },
  }
}

// export default function Page({book}: InferGetServerSidePropsType<typeof getServerSideProps>) {
export default function Page({book}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) return "로딩중입니다.";
  if (!book) return "문제가 발생했습니다 다시 시도하세요"

  const {
    id,
    title,
    subTitle,
    description,
    author,
    publisher,
    coverImgUrl,
  } = book;

  return (
    <div className={style.container}>
      <div className={style.cover_img_container}
           style={{backgroundImage: `url('${coverImgUrl}')`}}>
        <img src={coverImgUrl}/>
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>{author} | {publisher}</div>
      <div className={style.description}>{description}</div>
    </div>
  );
};


