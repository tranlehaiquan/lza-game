import clsx from "clsx";
import React from "react";

type Props = {
  className?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={clsx("bg-NeonCarrot text-white uppercase font-bold px-5 py-3 rounded-xl md:text-lg", props.className)}
    >
      {props.children}
    </button>
  );
};

export default Button;
