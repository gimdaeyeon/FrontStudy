import './App.css'
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Toaster} from "@/components/ui/sonner.tsx";
import {toast} from "sonner";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger} from "@/components/ui/dialog.tsx";
import {DialogTitle} from "@radix-ui/react-dialog";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog.tsx";
import { Activity } from 'lucide-react';

function App() {

  return (
    <div className="p-5">
        <Activity className="size-10" color="red" />
        <AlertDialog>
            <AlertDialogTrigger>Open</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogTitle>Title</AlertDialogTitle>
                <div>Body</div>
                <div>
                    <AlertDialogAction>Continue</AlertDialogAction>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                </div>
            </AlertDialogContent>
        </AlertDialog>

        <Dialog>
            <DialogTrigger>Open Dialog</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>Dialog Description</DialogDescription>
                    <div>Body</div>
                </DialogHeader>
            </DialogContent>
        </Dialog>

        <Popover>
            <PopoverTrigger asChild >
                <Button>Open</Button>
            </PopoverTrigger>

            <PopoverContent>
                <Button>팝오버 버튼</Button>
                <Button>팝오버 버튼2</Button>
            </PopoverContent>
        </Popover>
        
        <Carousel className="mx-10">
            <CarouselContent>
                <CarouselItem className="basis-1/3">1</CarouselItem>
                <CarouselItem className="basis-1/3">2</CarouselItem>
                <CarouselItem className="basis-1/3">3</CarouselItem>
                <CarouselItem className="basis-1/3">4</CarouselItem>
                <CarouselItem className="basis-1/3">5</CarouselItem>
            </CarouselContent>
            <CarouselPrevious  />
            <CarouselNext/>
        </Carousel>

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
