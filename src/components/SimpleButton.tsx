import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent, useCallback } from "react";

export type SimpleButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const SimpleButton = ({ onClick, type = "button", ...props }: SimpleButtonProps) => {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
    },
    [onClick]
  );

  return <button onClick={handleClick} type={type} {...props} />;
};
