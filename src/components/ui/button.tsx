import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md gap-2",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 gap-2",
        outline: "border border-glass-border bg-glass-bg backdrop-blur-sm text-foreground hover:bg-accent/20 hover:border-accent/30 gap-2",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 gap-2",
        ghost: "text-foreground hover:bg-accent/20 hover:text-accent-foreground gap-2",
        link: "text-primary underline-offset-4 hover:underline gap-2",
        gradient: "bg-gradient-primary text-white hover:shadow-glow hover:scale-105 font-semibold gap-2",
        glass: "bg-glass-bg backdrop-blur-md border border-glass-border text-foreground hover:bg-accent/20 hover:border-accent/30 shadow-glass gap-2",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
