"use client"

import { Button } from "@/components/ui/button"
import {
  SignUpButton as ClerkSignUpButton,
} from "@clerk/nextjs"
import { ComponentProps } from "react"

export function SignUpButton({
  children = <Button>Sign Up</Button>,
  ...props
}: ComponentProps<typeof ClerkSignUpButton>) {
  return <ClerkSignUpButton {...props}>{children}</ClerkSignUpButton>
}
