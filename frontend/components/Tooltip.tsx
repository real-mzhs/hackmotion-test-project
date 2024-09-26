import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

interface TooltipProps extends VariantProps<typeof tooltipVariants> {
  children?: React.ReactNode;
  className?: string;
}

const tooltipVariants = cva(
  "absolute top-full text-white text-sm font-normal rounded-[10px] py-2 md:py-4 px-4 z-10 text-center whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: ["bg-black border-black", "after:border-b-black"],
        accent: ["bg-accent border-accent", "after:border-b-accent"],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const Tooltip = ({ children, className, variant }: TooltipProps) => {
  return (
    <div
      className={cn(
        tooltipVariants({ variant }),
        className,
        "after:absolute after:bottom-full after:left-1/2 after:transform after:-translate-x-1/2",
        "after:w-0 after:h-0 after:border-b-8 after:border-x-8 after:border-x-transparent"
      )}
    >
      {children}
    </div>
  );
};

export default Tooltip;
