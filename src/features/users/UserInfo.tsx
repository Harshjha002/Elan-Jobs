"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "./types"

export function UserInfo({ imageUrl, email, name }: User) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")

  return (
    <div className="flex items-center gap-2 overflow-hidden">
      <Avatar className="rounded-lg size-8">
        <AvatarImage src={imageUrl} alt={name} />
        <AvatarFallback className="uppercase bg-primary text-primary-foreground">
          {initials}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col flex-1 min-w-0 leading-tight group-data-[collapsed]:hidden">
        <span className="truncate text-sm font-semibold">{name}</span>
        <span className="truncate text-xs">{email}</span>
      </div>
    </div>
  )
}
