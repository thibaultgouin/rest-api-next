import styles from "./A01Icon.module.scss";
import { IconType } from "react-icons/lib/cjs";

export interface A01IconProps {
  icon: IconType;
}

const A01Icon = ({ icon: Icon }: A01IconProps) => {
  return <Icon className={styles.A01Icon} />;
};

export default A01Icon;
