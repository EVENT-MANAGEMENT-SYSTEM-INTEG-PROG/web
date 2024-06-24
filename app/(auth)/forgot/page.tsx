import Logo from "@/components/Logo"
import ForgotForm from "@/components/Auth/Forgot"

export default function ForgotPage() {
    return (
        <>
        <div className="">
            <Logo/>
            <div className="my-10">
                <ForgotForm/>
            </div>
        </div>
        </>
    )
}