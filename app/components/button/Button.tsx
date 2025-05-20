import { Button } from "@heroui/button";
import clsx from "clsx";
import React, { ReactNode } from "react";
// Animations
// import Magnetic from "../magnetic/Magnetic";

type Props = {
  text: string | ReactNode;
  bgColor?: string;
  noAnimate?: boolean;
  disabled?: boolean;
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
  onClick?: () => void;
  styles?: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
};

function ButtonCmp({
  text,
  variant,
  bgColor,
  onClick,
  styles,
  color,
  noAnimate,
  disabled,
}: Props) {
  return (
    <>
      {noAnimate ? (
        <Button
          className={clsx(
            bgColor === "red" ? "bg-[var(--colors-common-red-500)]" : "",
            "rounded-[999px] px-6 py-3 ",
            styles && styles
          )}
          variant={variant}
          onPress={onClick}
          color={color}
          id="al"
          // aria-label={text}
          disabled={disabled}
        >
          {text}
        </Button>
      ) : (
        // <Magnetic>
        <Button
          className={clsx(
            bgColor === "red" ? "bg-[var(--colors-common-red-500)]" : "",
            "rounded-[999px] px-6 py-3 ",
            styles && styles
          )}
          variant={variant}
          onPress={onClick}
          color={color}
          id="al"
          // aria-label={text}
          disabled={disabled}
        >
          {text}
        </Button>
        // </Magnetic>
      )}
    </>
  );
}

export default ButtonCmp;
