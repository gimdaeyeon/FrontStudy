import {Button} from "@/components/ui/button.tsx";
import {useUpdateTodo} from "@/store/todos.ts";
import {Check, Pencil} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {Input} from "@/components/ui/input.tsx";
import {Link} from "react-router";
import type {Todo} from "@/types.ts";
import {useUpdateTodoMutation} from "@/hooks/mutations/use-update-todo-mutation.ts";
import {useDeleteTodoMutation} from "@/hooks/mutations/use-delete-todo-mutation.ts";

export default function TodoItem({id, content, isDone}:Todo) {
    const {mutate:updateTodo} = useUpdateTodoMutation();
    const {mutate:deleteTodo, isPending:isDeleteTodoPending} = useDeleteTodoMutation();
    const [isEdit, setIsEdit] = useState(false);
    const [editContent, setEditContent] = useState(content);
    const editInputRef = useRef<HTMLInputElement>(null);

    const handleDeleteClick = ()=>{
        deleteTodo(id);
    }

    const handleCheckboxClick = ()=>{
        updateTodo({
            id,
            isDone:!isDone
        });
    }

    // const handleUpdateTodo = ()=>{
    //     updateTodo(id, editContent);
    //     setIsEdit(false);
    // }

    // useEffect(()=>{
    //     if(isEdit) editInputRef.current?.focus();
    // },[isEdit]);

    return (
        <div className="flex items-center justify-between border p-2 gap-2">
            {/*{isEdit?*/}
            {/*    <Input value={editContent}*/}
            {/*           onChange={(e)=>setEditContent(e.target.value)}*/}
            {/*           onKeyDown={(e)=>{if(e.key === 'Enter') handleUpdateTodo()}}*/}
            {/*           ref={editInputRef}*/}
            {/*    />*/}
            {/*    :*/}
                <div className="flex gap-5">
                    <input
                        disabled={isDeleteTodoPending}
                        type="checkbox"
                        checked={isDone}
                        onClick={handleCheckboxClick}
                    />
                    <Link to={`/todo/${id}`}>{content}</Link>
                </div>
            {/*}*/}
            <div className="flex flex-row justify-center items-center gap-2">
                {/*{isEdit?*/}
                {/*    <Check className="cursor-pointer hover:text-green-500 transition" onClick={handleUpdateTodo}/>*/}
                {/*    :<Pencil className="cursor-pointer" onClick={()=>setIsEdit(true)} />*/}
                {/*}*/}
                <Button
                    disabled={isDeleteTodoPending}
                    className="cursor-pointer" variant={"destructive"}
                    onClick={handleDeleteClick}
                >
                    삭제
                </Button>
            </div>
        </div>)
}