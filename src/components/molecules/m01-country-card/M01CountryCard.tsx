/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import A02Image from "../../atoms/a02-image/A02Image";
import styles from "./M01CountryCard.module.scss";

export interface M01CountryCardProps {
  name: {
    common: string;
  };
  capital: Array<string>;
  region: string;
  population: number;
  flags: {
    alt: string;
    png: string;
  };
}

const M01CountryCard = (props: M01CountryCardProps) => {
  const convertedName = props.name.common.split(" ").join("-").toLowerCase();

  return (
    <Link href={`/country/${convertedName}`}>
      <div className={styles.m01CountryCard}>
        <div className={styles.imageWrapper}>
          <A02Image
            className={styles.image}
            src={props.flags.png}
            alt={props.flags.alt}
            width={1600}
            height={900}
          />
        </div>
        <div className={styles.container}>
          <h2 className={styles.name}>{props.name.common}</h2>
          <div className={styles.informationWrapper}>
            {props.population && <p>Population: {props.population}</p>}
            {props.region && <p>Region: {props.region}</p>}
            {props.capital && <p>Capital: {props.capital[0]}</p>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default M01CountryCard;
