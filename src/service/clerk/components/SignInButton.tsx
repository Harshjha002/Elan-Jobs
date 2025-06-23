"use client"

import { Button } from "@/components/ui/button"
import {
  SignInButton as ClerkSignInButton,
} from "@clerk/nextjs"
import { ComponentProps } from "react"

export function SignInButton({
  children = <Button>Sign In</Button>,
  ...props
}: ComponentProps<typeof ClerkSignInButton>) {
  return <ClerkSignInButton {...props}>{children}</ClerkSignInButton>
}
