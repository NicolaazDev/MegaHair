import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { ny } from "@/lib/utils";

const buttonVariants = cva(
  "'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50' dark:focus-visible:ring-zinc-300",
  {
    variants: {
      variant: {
        default:
          "'bg-primary text-zinc-50 shadow hover:bg-zinc-900/90' dark:text-zinc-900 dark:hover:bg-zinc-50/90'",
        destructive:
          "'bg-destructive text-zinc-50 shadow-sm hover:bg-red-500/90' dark:text-zinc-50 dark:hover:bg-red-900/90'",
        outline:
          "'border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-accent-foreground' dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800",
        secondary:
          "'bg-secondary text-zinc-900 shadow-sm hover:bg-zinc-100/80' dark:text-zinc-50 dark:hover:bg-zinc-800/80'",
        ghost:
          "'hover:bg-zinc-100 hover:text-accent-foreground' dark:'hover:bg-zinc-800",
        link: "'text-primary underline-offset-4 hover:underline'",
      },
      size: {
        default: "'h-9 px-4 py-2'",
        sm: "'h-8 rounded-md px-3 text-xs'",
        lg: "'h-10 rounded-md px-8'",
        icon: "'h-9 w-9'",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={ny(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "'Button'";

export { Button, buttonVariants };
