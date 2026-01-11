import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router";
import {useState} from "react";
import {useSignInWithPassword} from "@/hooks/mutations/use-sign-in-with-password.ts";
import gitHubLogo from '@/assets/github-mark.svg'
import {useSignInWithOAuth} from "@/hooks/mutations/use-sign-in-with-oauth.ts";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {mutate: signInWithPassword} = useSignInWithPassword();
    const {mutate:signInWithOAuth} = useSignInWithOAuth();

    const handleSignInWithPasswordClick = () => {
        if (email.trim() === "") return;
        if (password.trim() === "") return;

        signInWithPassword({
            email,
            password,
        });
    }

    const handleSignInWithGitHubClick = ()=>{
        signInWithOAuth('github');
    }



    return (
        <div className="flex flex-col gap-8">
            <div className="text-xl font-bold">로그인</div>
            <div className="flex flex-col gap-2">
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-6"
                    type="email"
                    placeholder="example@abc.com"
                />
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="py-6"
                    type="password"
                    placeholder="password"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Button onClick={handleSignInWithPasswordClick} className="w-full cursor-pointer">로그인</Button>
                <Button onClick={handleSignInWithGitHubClick} variant={"outline"} className="w-full cursor-pointer">
                    <img src={gitHubLogo} alt="" className="size-4"/>
                    GitHub 계정으로 로그인
                </Button>
            </div>
            <div>
                <Link className="text-muted-foreground hover:underline" to={'/sign-up'}>계정이 없으시다면? 회원가입</Link>
            </div>
        </div>
    );
}