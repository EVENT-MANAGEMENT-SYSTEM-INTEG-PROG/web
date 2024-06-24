

import TopCard from "../../Static/TopCard"
import SettingForm from "./SettingForm"
import { getUser } from "@/auth/user"

export default async function Settings() {
    
    const user = await getUser()
  
    return (
      <>
      <TopCard  title={"Settings"}/>
      <SettingForm User={user}/>
      </>
    )
}