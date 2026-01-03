import {create} from 'zustand';
import {combine} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import type {Todo} from "@/types.ts";

const initialState: { todos: Todo[] } = {todos:[]}

const useTodosStore = create(
    immer(
        combine(initialState,(set)=>({
            actions:{
                createTodo:(content:string)=>{
                    set(state=>{
                        state.todos.push({
                            id: new Date().getTime(),
                            content,
                        });
                    });
                },
                deleteTodo:(targetId: number)=>{
                    set(state=>{
                        state.todos = state.todos.filter((todo)=>todo.id !== targetId);
                    });
                },
                updateTodo:(targetId: number, updateContent: string)=>{
                    set(state=>{
                        state.todos = state.todos.map(todo=>(todo.id!==targetId?todo:{
                            ...todo,content:updateContent
                        }))
                    })
                }
            }
        }))
    )
);

export const useTodos = ()=>{
    return useTodosStore((store)=>store.todos);
}

export const useCreateTodo = ()=>{
    return useTodosStore((store)=>store.actions.createTodo);
}

export const useDeleteTodo = ()=>{
    return useTodosStore((store)=>store.actions.deleteTodo);
}

export const useUpdateTodo = ()=>{
    return useTodosStore((store)=>store.actions.updateTodo);
}
