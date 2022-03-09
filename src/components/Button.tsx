import { ButtonHTMLAttributes, DetailedHTMLProps, memo, MouseEvent, useCallback } from "react";

type BaseButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = Omit<BaseButtonProps, "disabled"> & {
  isLoading?: boolean;
  isDisabled?: boolean;
};

export const Button = memo(
  ({
    children,
    isLoading = false,
    isDisabled = false,
    onClick,
    type = "button",
    ...others
  }: ButtonProps) => {
    const handleClick = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        if (!isLoading && !isDisabled && onClick) {
          onClick(event);
        }
      },
      [isDisabled, isLoading, onClick]
    );

    return (
      <button type={type} disabled={isDisabled} onClick={handleClick} {...others}>
        {isLoading && <span>loading</span>}
        {!isLoading && children}
      </button>
    );
  }
);
