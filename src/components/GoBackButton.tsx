"use client";
import { forwardRef } from "react";
import { Button } from "./shadcn/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export interface GoBackButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

const GoBackButton = forwardRef<HTMLButtonElement, GoBackButtonProps>(
  ({ href, ...props }, ref) => {
    return (
      <Button ref={ref} {...props} asChild>
        <Link href={href || "../"}>
          <ArrowLeft />
          <span>Go Back</span>
        </Link>
      </Button>
    );
  }
);
GoBackButton.displayName = "Button";

export default GoBackButton;
