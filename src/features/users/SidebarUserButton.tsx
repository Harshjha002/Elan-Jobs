
import { auth } from "@clerk/nextjs/server"
import SidebarUserButtonClient from "./SidebarUserButtonClient"

export async function SidebarUserButton() {
  const { userId } = await auth()

  const user = {
    name: "Harsh Jha",
    email: "harsh@email.com",
    imageUrl: ""
  }

  return <SidebarUserButtonClient user={user} />
}
