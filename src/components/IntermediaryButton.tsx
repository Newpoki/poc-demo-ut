import { ButtonHTMLAttributes, DetailedHTMLProps, memo, MouseEvent, useCallback } from "react";

type BaseIntermediaryButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type IntermediaryButtonProps = Omit<BaseIntermediaryButtonProps, "disabled"> & {
  isDisabled?: boolean;
};

export const IntermediaryButton = memo(
  ({
    children,
    isDisabled = false,
    onClick,
    type = "button",
    ...others
  }: IntermediaryButtonProps) => {
    const handleClick = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        if (!isDisabled && onClick) {
          onClick(event);
        }
      },
      [isDisabled, onClick]
    );

    return (
      <button type={type} disabled={isDisabled} onClick={handleClick} {...others}>
        {children}
      </button>
    );
  }
);
