import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("btn", {
  variants: {
    intent: {
      primary: "btn-primary",
      secondary: "btn-secondary",
      
    },
    size: {
      small: "sm",
      medium: "md",
      large: "lg",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
  compoundVariants: [
    {
      intent: "primary",
      size: "small",
      class: "btn-primary-small",
    },
    {
      intent: "secondary",
      size: "large",
      class: "btn-secondary-large",
    },
  ],
});

function Button({
  className,
  intent,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ intent, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
