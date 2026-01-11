// components/ui/Button.tsx
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium  ",
  {
    variants: {
      variant: {
        primary: "bg-[#2563eb] text-white hover:bg-[#0E3B76]",
        secondary:
          "bg-transparent border-2 border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600",
        tertiary:
          "bg-transparent text-gray-700 hover:text-blue-600 hover:bg-blue-50/50",
      },
      size: {
        default: "h-12 px-5 text-base",
        sm: "h-9 px-5 text-sm",
        icon: "h-10 w-10 rounded-full",
      },
      withIcon: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      withIcon: false,
    },
  }
)

const iconVariants = cva("", {
  variants: {
    variant: {
      primary: "  duration-300 ease-out group-hover:rotate-45 group-active:rotate-90  ",
      secondary: "group-hover:translate-x-1",
      tertiary: "group-hover:rotate-45 group-hover:scale-110",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  iconType?: "arrow-right" | "arrow-up-right" | "none"
  iconPosition?: "right" | "left"
  children: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      iconType = "none",
      iconPosition = "right",
      children,
      ...props
    },
    ref
  ) => {
    const showIcon = iconType !== "none"
    const Icon =
      iconType === "arrow-up-right" ? ArrowUpRight : ArrowRight

    return (
      <button
        className={cn(
          "group relative overflow-hidden",
          buttonVariants({ variant, size, withIcon: showIcon, className })
        )}
        ref={ref}
        {...props}
      >
        {iconPosition === "left" && showIcon && (
          <Icon
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              iconVariants({ variant })
            )}
          />
        )}

        <span className="relative z-10">{children}</span>

        {iconPosition === "right" && showIcon && (
          <Icon
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              iconVariants({ variant })
            )}
          />
        )}

        {/* Subtle shine effect on primary hover */}
      
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }