"use client"

import React, { ReactNode, Suspense } from 'react'
import { ClerkProvider as OriginalClerkProvider} from "@clerk/nextjs"
import {dark} from '@clerk/themes'
import useDarkMode from '@/hooks/useDarkMode'

const ClerkProvider = ({children} : {children : ReactNode}) => {

    const isDarkMode = useDarkMode();

  return (
    <Suspense>

    <OriginalClerkProvider 
    appearance={isDarkMode ? {baseTheme:[dark]} : undefined} >
        {children}
    </OriginalClerkProvider>
        </Suspense>
  )
}

export default ClerkProvider
