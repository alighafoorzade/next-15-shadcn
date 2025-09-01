import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
DialogPrimitive.Root;
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { DialogTrigger } from "@radix-ui/react-dialog";

const dialogVariants = cva(
  "fixed z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200",
  {
    variants: {
      position: {
        center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        top: "top-4 left-1/2 -translate-x-1/2",
        bottom: "bottom-4 left-1/2 -translate-x-1/2",
        left: "top-1/2 left-4 -translate-y-1/2",
        right: "top-1/2 right-4 -translate-y-1/2",
      },
    },
    defaultVariants: {
      position: "center",
    },
  },
);

const Dialog = DialogPrimitive.Root;
const DialogTitle = DialogPrimitive.DialogTitle;
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    position?: "center" | "top" | "bottom" | "left" | "right";
  }
>(({ className, position, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(dialogVariants({ position }), className)}
      {...props}
    />
  </DialogPrimitive.Portal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

export { Dialog, DialogTitle, DialogContent, DialogTrigger };
