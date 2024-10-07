import React, { ReactNode } from "react";
import styles from "../_styles/components.module.css";
import Link from "next/link";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string; // required for Next.js Link
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Link {...props} className={styles.button}>
      {props.children}
    </Link>
  );
};

export default Button;
