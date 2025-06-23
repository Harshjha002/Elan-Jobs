"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar"
import { SignOutButton, useClerk } from "@clerk/nextjs"
import { ChevronsUpDown, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react"
import Link from "next/link"
import { User } from "./types"
import { UserInfo } from "./UserInfo"

type Props = {
  user: User
}

const SidebarUserButtonClient = ({ user }: Props) => {
  const {isMobile , setOpen} = useSidebar()

  const {openUserProfile} = useClerk()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <UserInfo {...user} />
          <ChevronsUpDown className="ml-auto group-data-[state=collapsed]:hidden" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={4}
        align="end"
        side={isMobile ? "bottom" : "right"}
        className="min-w-64 max-w-80"
      >
        <DropdownMenuLabel className="font-normal p-1">
          <UserInfo {...user} />
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => {
            openUserProfile()
            setOpen(false)
        }}>
          <UserIcon className="mr-2" /> Profile
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/user-settings/notification" className="flex items-center">
            <SettingsIcon className="mr-2" /> Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <SignOutButton>
          <DropdownMenuItem>
            <LogOutIcon className="mr-2" /> Logout
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SidebarUserButtonClient
