/*
  파일명.부가설명.확장자
  ex)todo.types.ts
  // 투두의 타입을 타입을 담은 ts문서다
*/

export type Todo = {
  id: number;
  createdAt: string;
  updatedAt: string;
  content: string;
  flag: string;
};
