import './App.css'
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Toaster} from "@/components/ui/sonner.tsx";
import {toast} from "sonner";

function App() {

  return (
    <div className="p-5">
        <Toaster/>
        <Textarea/>
        <Input placeholder="입력..."/>
        <Button className="cursor-pointer"
                onClick={() => {
                    toast('ㅋㅋㅋㅋㅋ',{
                        position: 'top-center'
                    })
                }}
        >버튼</Button>
        <Button variant={"destructive"} >버튼</Button>
        <Button variant={"ghost"} >버튼</Button>
        <Button variant={"link"} >버튼</Button>
        <Button variant={"outline"} >버튼</Button>
        <Button variant={"secondary"} >버튼</Button>

    </div>
  )
}

export default App
