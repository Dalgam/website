import React, { MouseEventHandler, ReactNode } from "react";
import styles from "styles/components/Button.module.scss";

type Props = {
  children: ReactNode;
  cta?: boolean;
  size?: string;
  onClick?: MouseEventHandler;
  icon?: boolean;
};

const Button = (props: Props) => {
  let className = props.cta ? styles.cta : styles.base;

  if (props.size) {
    className += ` ${styles[props.size]}`;
  }
  if (props.icon) {
    className += ` ${styles.icon}`;
  }
  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
