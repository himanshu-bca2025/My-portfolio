import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends ButtonProps {
  magneticStrength?: number;
}

export default function MagneticButton({
  children,
  className,
  ...props
}: MagneticButtonProps) {
  return (
    <Button
      className={cn("transition-colors", className)}
      {...props}
    >
      {children}
    </Button>
  );
}
