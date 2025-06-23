"use client"

import { Button } from "@/components/ui/button"
import {
  SignOutButton as ClerkSignOutButton,
} from "@clerk/nextjs"
import { ComponentProps } from "react"

export function SignOutButton({
  children = <Button>Sign Out</Button>,
  ...props
}: ComponentProps<typeof ClerkSignOutButton>) {
  return <ClerkSignOutButton {...props}>{children}</ClerkSignOutButton>
}
