import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
  icon?: JSX.Element;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function Button({ icon, children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-[4px] bg-orange py-[0.625rem] px-4 text-hm text-100 hover:bg-orangeHover ${className} flex items-center justify-center`}
    >
      {icon ? <div className="tablet:pr-2">{icon}</div> : null}
      <div className={`${icon ? "hidden" : ""} tablet:block`}> {children}</div>
    </button>
  );
}

export default Button;
