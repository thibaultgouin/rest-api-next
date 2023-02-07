import Image from "next/image";
import classNames from "clsx";
import styles from "./A02Image.module.scss";

export interface A02ImageProps {
  className?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}

const A02Image = (props: A02ImageProps) => {
  return (
    <Image
      className={classNames(styles.A02Image, props.className)}
      src={props.src}
      alt={props.alt ? props.alt : "image"}
      width={props.width}
      height={props.height}
      fill={props.fill}
      sizes={props.sizes}
      priority={props.priority}
      quality={100}
    />
  );
};

export default A02Image;
