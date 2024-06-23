
import { getUser } from "@/auth/user"
import ProfileCard from "../staticComponents/ProfileCard"
import TopCard from "../staticComponents/TopCard"

export default async function Profile() {

    const user = await getUser()

    return (
        
        <>
        <TopCard title={"PROFILE"}/>
        <div className="flex justify-center my-5">
            <ProfileCard name={`${user.first_name} ${user.last_name}`} email={user.email} role_id={user.role_id}/>
        </div>    
        </>
    )
}