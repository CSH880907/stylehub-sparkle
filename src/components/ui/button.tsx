import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        outline:
          "border border-input bg-background hover:bg-accent/10 hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
        
        // Custom variants for our clothing store
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm",
        "add-to-cart": "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md w-full uppercase font-semibold tracking-wide",
        "buy-now": "bg-accent text-accent-foreground hover:bg-accent/90 shadow-md w-full uppercase font-semibold tracking-wide",
        
        // Gradient variants
        gradient: "bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-md",
        "gradient-accent": "bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-md",
        
        // Social proof variants
        wishlist: "border border-input bg-background hover:bg-pink-50 hover:border-pink-200 hover:text-pink-500 dark:hover:bg-pink-950 dark:hover:text-pink-300",
        filter: "border border-input bg-background hover:bg-accent/10 text-muted-foreground hover:text-foreground flex items-center gap-1",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8 [&_svg]:size-3.5",
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
