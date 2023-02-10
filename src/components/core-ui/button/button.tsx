import { MouseEventHandler } from "react";

import "./button.css";

interface IButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size: "small" | "medium" | "large";
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;

  label: string;
}

function Button({ primary = false, size = "medium", backgroundColor = "", label, onClick = () => {} }: IButtonProps) {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
