import Logo from "@/components/Logo"
import ForgotForm from "@/components/authComponents/Forgot"

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