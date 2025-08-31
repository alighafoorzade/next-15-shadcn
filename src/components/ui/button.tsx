import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "text-white px-8 py-2 rounded-sm",
  {
    variants: {
      intent: {
        primary: "bg-red-600",
        secondary: "bg-blue-600",
      },
      size: {
        small: "w-8",
        medium: "w-16",
        large: "w-32"
      }
    },
    compoundVariants: [
      {
        intent: 'primary',
        size: "small",
        class: "rounded-2xl"
      },
      {
        intent: 'secondary',
        size: "large",
        class: "rounded-4xl"
      }
    ]
  }
)

function Button({
  className,
  intent,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ intent, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
