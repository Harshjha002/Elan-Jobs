
import AppSidebarClient from '@/components/AppSidebarClient'
import {
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarFooter
} from '@/components/ui/sidebar'
import SidebarContentGuest from './SidebarContentGuest'
import SidebarFooterUser from './SidebarFooterUser'
import { ReactNode } from 'react'
import { SignedIn } from '@clerk/nextjs'

type Props = {
  children: ReactNode
}

const SidebarLayout = ({ children }: Props) => {
  return (
    <AppSidebarClient>
      <Sidebar collapsible="icon" className="overflow-y-hidden">
        <SidebarHeader className="flex-row">
          <SidebarTrigger />
          <span className="text-xl whitespace-nowrap">Elan Jobs</span>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarContentGuest />
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

<SignedIn>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarFooterUser />
          </SidebarMenu>
        </SidebarFooter>
</SignedIn>
      </Sidebar>

      {children}
    </AppSidebarClient>
  )
}

export default SidebarLayout
