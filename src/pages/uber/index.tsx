import { useEffect, useState } from "react";
import classNames from "clsx";
import styles from "./UberPage.module.scss";

const UberPage = () => {
  const [clickPattern, setClickPattern] = useState<Number[]>([]);
  const emptyArray = Array(9).fill(undefined);

  const onItemClick = (index: number) => {
    if (!clickPattern.includes(index)) {
      setClickPattern([...clickPattern, index]);
    }
  };

  useEffect(() => {
    if (clickPattern.length === emptyArray.length) {
      setTimeout(() => {
        let index = clickPattern.length - 1;
        const removeIndexFromPattern = () => {
          if (index >= 0) {
            setClickPattern(clickPattern.slice(0, index));
            index--;
            setTimeout(removeIndexFromPattern, 600);
          }
        };
        removeIndexFromPattern();
      }, 1000);
    }
  }, [clickPattern]);

  return (
    <div className={styles.uberPage}>
      <div className={styles.container}>
        <div className={styles.tableWrapper}>
          {emptyArray.map((item, index) => (
            <div
              className={classNames(
                styles.tableItem,
                clickPattern.includes(index) ? styles.isActive : null
              )}
              key={index.toString()}
              onClick={() => onItemClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UberPage;
