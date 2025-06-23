

import { SidebarMenuItem } from '@/components/ui/sidebar'
import { SidebarUserButton } from '@/features/users/SidebarUserButton'

const SidebarFooterUser = () => {
  return (
    <SidebarMenuItem>
      <SidebarUserButton />
    </SidebarMenuItem>
  )
}

export default SidebarFooterUser
