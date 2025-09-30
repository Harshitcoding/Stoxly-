"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Render an avatar root element with base circular styles and a merged `className`.
 *
 * Merges the provided `className` with default avatar styles, sets `data-slot="avatar"`,
 * and forwards all other props to the Radix Avatar Root.
 *
 * @param className - Optional additional CSS classes to apply to the avatar root
 * @returns A React element for the Radix Avatar Root with merged classes and forwarded props
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders an avatar image element with the component's default image styles and any additional classes.
 *
 * @param className - Additional CSS classes to apply to the image element
 * @returns The avatar image element
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Renders the avatar fallback element displayed when the avatar image is unavailable.
 *
 * @param className - Additional CSS classes merged with the component's default fallback styles
 * @param props - Remaining props forwarded to the underlying Radix Avatar Fallback primitive
 * @returns The React element for the avatar fallback
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
