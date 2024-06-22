import Logo from "@/components/Logo"
import dynamic from "next/dynamic"
import LoginForm from "../../../components/authComponents/Login"


export default function LoginPage() {
    return (
        <>
        <div className="">
            <Logo/>
            <div className="my-4">
                <LoginForm />
            </div>
        </div>
        </>
    )
}