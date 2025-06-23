"use client"

import { useIsMobile } from '@/hooks/use-mobile'
import { SidebarTrigger } from './ui/sidebar'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const AppSidebarClient = ({ children }: Props) => {
  const isMobile = useIsMobile()

  if (!isMobile) return <>{children}</>

  return (
    <div className="flex flex-col w-full">
      <div className="p-2 border-b flex items-center gap-2">
        <SidebarTrigger />
        <span className="text-xl whitespace-nowrap font-semibold">
          Elan Jobs
        </span>
      </div>
      <div className="flex-1 flex">
        {children}
      </div>
    </div>
  )
}

export default AppSidebarClient
