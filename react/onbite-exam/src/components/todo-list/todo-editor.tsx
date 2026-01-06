import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import {useCreateTodo} from "@/store/todos.ts";
import {useMutation} from "@tanstack/react-query";
import {createTodo} from "@/api/create-todo.ts";
import {useCreateTodoMutation} from "@/hooks/mutations/use-create-todo-mutation.ts";

export default function TodoEditor() {
    const {mutate,isPending} = useCreateTodoMutation();
    const [content, setContent] = useState('');

    const handleAddTodo = ()=>{
        if(content.trim() === '') return;
        mutate(content);
        setContent('');
    }

    return (
        <div className="flex gap-2">
            <Input value={content} placeholder="새로운 할 일을 입력하세요..."
                   onChange={(e) => setContent(e.target.value)}
                   onKeyDown={(e) => e.key === 'Enter' && handleAddTodo() }
                   disabled={isPending}
            />
            <Button className="cursor-pointer"
                    onClick={handleAddTodo}
                    disabled={isPending}
            >
                추가
            </Button>
        </div>)
}