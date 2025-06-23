
import { SignedOut as ClerkSignedOut, SignedIn as ClerkSignedIn } from '@clerk/nextjs'


import React, { ReactNode, Suspense } from 'react'

export const SignnedOut = ({ children }: { children: ReactNode }) => {
    return (
        <Suspense>
            <ClerkSignedOut>
                {children}
            </ClerkSignedOut>
        </Suspense>
    )
}

export const SignnedIn = ({ children }: { children: ReactNode }) => {
    return (
        <Suspense>
            <ClerkSignedIn>
                {children}
            </ClerkSignedIn>
        </Suspense>
    )
}

