import Link from "next/link";
import classNames from "clsx";
import { IconType } from "react-icons/lib/cjs";
import A01Icon from "../../atoms/a01-icon/A01Icon";
import styles from "./M02Button.module.scss";

export interface M02ButtonProps {
  className?: string;
  label: string;
  href?: string;
  target?: string;
  icon?: IconType;
  iconAlignment?: "start" | "end";
}

const M02Button = ({
  className,
  label,
  href,
  target = "_self",
  icon,
  iconAlignment = "start",
}: M02ButtonProps) => {
  const isLink = href?.startsWith("/");

  if (isLink && href) {
    return (
      <Link className={classNames(styles.M02Button, className)} href={href}>
        {iconAlignment === "start" && icon ? <A01Icon icon={icon} /> : null}
        <span className={styles.label}>{label}</span>
        {iconAlignment === "end" && icon ? <A01Icon icon={icon} /> : null}
      </Link>
    );
  } else {
    const Tag = href ? "a" : "button";

    return (
      <Tag
        className={classNames(styles.M02Button, className)}
        href={href}
        target={target}
      >
        {iconAlignment === "start" && icon ? <A01Icon icon={icon} /> : null}
        <span className={styles.label}>{label}</span>
        {iconAlignment === "end" && icon ? <A01Icon icon={icon} /> : null}
      </Tag>
    );
  }
};

export default M02Button;
