import {Button} from "@/components/ui/button.tsx";
import {useDeleteTodo, useUpdateTodo} from "@/store/todos.ts";
import {Check, Pencil} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {Input} from "@/components/ui/input.tsx";

export default function TodoItem({id, content}:{id:number, content:string}) {
    const deleteTodo = useDeleteTodo();
    const updateTodo = useUpdateTodo();
    const [isEdit, setIsEdit] = useState(false);
    const [editContent, setEditContent] = useState(content);
    const editInputRef = useRef<HTMLInputElement>(null);

    const handleDeleteClick = ()=>{
        deleteTodo(id);
    }

    const handleUpdateTodo = ()=>{
        updateTodo(id, editContent);
        setIsEdit(false);
    }

    useEffect(()=>{
        if(isEdit) editInputRef.current?.focus();
    },[isEdit])

    return (
        <div className="flex items-center justify-between border p-2 gap-2">
            {isEdit?
                <Input value={editContent}
                       onChange={(e)=>setEditContent(e.target.value)}
                       onKeyDown={(e)=>{if(e.key === 'Enter') handleUpdateTodo()}}
                       ref={editInputRef}
                />
                :content
            }
            <div className="flex flex-row justify-center items-center gap-2">
                {isEdit?
                    <Check className="cursor-pointer hover:text-green-500 transition" onClick={handleUpdateTodo}/>
                    :<Pencil className="cursor-pointer" onClick={()=>setIsEdit(true)} />
                }
                <Button className="cursor-pointer" variant={"destructive"}
                        onClick={handleDeleteClick}
                >
                    삭제
                </Button>
            </div>
        </div>)
}