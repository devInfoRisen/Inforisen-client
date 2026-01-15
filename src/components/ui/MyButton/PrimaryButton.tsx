// import { cn } from "@/lib/utils";
// import { cva } from "class-variance-authority";

// export default function PrimaryButton({
//   variant,
//   size,
//   className,
//   children,
//   ...props
// }) {
//   const buttonVariants = cva(
//     "min-w-[158px] min-h-[58px] px-5 bg-primary hover:bg-primary-dark transition duration-300 ease-in-out cursor-pointer flex items-center hover:border-primary-dark justify-center border-2 border-primary text-md font-bold text-white rounded-md",
//     {
//       variants: {
//         variant: {
//           primary:
//             "bg-primary text-primary-foreground shadow hover:bg-primary/90",
//           destructive:
//             "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
//           outline:
//             "border border-input bg-transparent text-primary border-2 border-primary hover:border-primary hover:bg-primary shadow-sm hover:text-white",
//           secondary:
//             "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
//           danger:
//             "bg-red-500 text-white shadow hover:bg-primary/90 dark:text-white hover:bg-red-700",
//           ghost: "hover:bg-accent hover:text-accent-foreground",
//           link: "text-primary underline-offset-4 hover:underline",
//         },
//         size: {
//           default: "h-9 px-4 py-2",
//           sm: "h-8 rounded-md px-3 text-xs",
//           lg: "h-10 rounded-md px-8",
//           icon: "h-9 w-9",
//         },
//       },
//       defaultVariants: {
//         variant: "default",
//         size: "default",
//       },
//     }
//   );

//   return (
//     <div className={cn(buttonVariants({ variant, size, className }))} {...props}>
//       {children}
//     </div>
//   );
// }
