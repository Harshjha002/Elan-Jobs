"use client"

import { SignnedOut } from '@/service/clerk/components/SignInStatus'
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'
import { LogInIcon } from 'lucide-react'
import Link from 'next/link'

const SidebarContentGuest = () => {
  return (
    <SignnedOut>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/sign-in">
            <LogInIcon />
            <span>Sign in</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SignnedOut>
  )
}

export default SidebarContentGuest
