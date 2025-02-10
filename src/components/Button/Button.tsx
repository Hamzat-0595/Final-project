import React, { ReactNode } from "react";
import { NavLink, NavLinkProps, To } from "react-router-dom";
import "./Button.scss";

export enum ButtonTypes {
  button = "button",
  link = "link",
}

export enum ButtonVariables {
  filled = "filled",
  outlined = "outlined",
  text = "text",
  underline = "underline",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonTypes;
  variant?: ButtonVariables;
  activeVariant?: ButtonVariables;
}

export interface LinkButtonProps extends NavLinkProps {
  buttonType?: ButtonTypes;
  variant?: ButtonVariables;
  to: To;
  children: ReactNode;
  activeVariant?: ButtonVariables;
}

export const Button: React.FC<LinkButtonProps | ButtonProps> = (props) => {
  const {
    children,
    buttonType = ButtonTypes.button,
    variant = ButtonVariables.filled,
    className,
    activeVariant,
    ...rest
  } = props;

  if (buttonType === ButtonTypes.link) {
    const linkProps = rest as NavLinkProps;
    return (
      <NavLink
        className={({ isActive }) =>
          `CustomButton ${!isActive ? activeVariant : variant} ${className}`
        }
        {...linkProps}
      >
        {children}
      </NavLink>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={`CustomButton ${variant} ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};
