import Logo from "@/components/Logo"
import LoginForm from "../../../components/Auth/Login"

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