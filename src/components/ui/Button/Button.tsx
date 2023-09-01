import cn from "classnames";
import { ButtonHTMLAttributes, RefObject, forwardRef } from "react";
import styles from "./Button.module.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  background?: boolean;
}

const Button = forwardRef<unknown, IButton>(({ children, className, background = true, ...props }, ref) => {
  return (
    <button data-background={background} ref={ref as RefObject<HTMLButtonElement>} className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
