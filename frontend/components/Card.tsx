import * as React from "react";
import Separator from "./Separator";
import { cn } from "../lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "p-6 bg-white rounded-[16px] flex flex-col gap-4 md:gap-3 w-full",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <>
    <h3
      ref={ref}
      className={cn("font-normal text-base md:text-lg", className)}
      {...props}
    />
    <Separator />
  </>
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-4 w-full", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

export { Card, CardTitle, CardContent };
