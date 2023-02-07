/* eslint-disable @next/next/no-img-element */
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IoIosArrowRoundBack } from "react-icons/io";
import M02Button from "../../../components/molecules/M02-button/M02Button";
import Layout from "../../../components/layout/Layout";
import A02Image from "../../../components/atoms/a02-image/A02Image";
import {
  CountriesContext,
  CountriesContextProps,
  CountryDataProps,
} from "../../../context/CountriesContext";
import styles from "./CountryPage.module.scss";

export default function PostPage() {
  const [borderCountries, setBorderCountries] = useState<CountryDataProps[]>(
    []
  );

  const { allCountries } = useContext(
    CountriesContext
  ) as CountriesContextProps;

  const router = useRouter();
  const id = router.query.id as string;

  const currentCountry = allCountries.find(
    (country) => country.name.common.split(" ").join("-").toLowerCase() === id
  );

  useEffect(() => {
    const borderCountries = allCountries.filter((country) =>
      currentCountry?.borders?.find((border) => border === country.cca3)
    );

    setBorderCountries(borderCountries);
  }, [currentCountry, allCountries]);

  return (
    <Layout
      title={currentCountry?.name.common}
      description={`Description for ${currentCountry?.name.common} Page`}
    >
      <div className={styles.countryPage}>
        <M02Button href="/" label="Back" icon={IoIosArrowRoundBack} />
        <div className={styles.container}>
          {currentCountry && (
            <div className={styles.flagWrapper}>
              <A02Image
                className={styles.flag}
                src={currentCountry.flags.png}
                alt={currentCountry.flags.alt}
                fill={true}
                priority={true}
              />
            </div>
          )}

          <div className={styles.contentWrapper}>
            <h2>{currentCountry?.name.common}</h2>
            <div className={styles.informationWrapper}>
              <ul className={styles.list}>
                <li>Native Name: {currentCountry?.name.common}</li>
                <li>Population: {currentCountry?.population}</li>
                <li>Region: {currentCountry?.region}</li>
                <li>Sub Region: {currentCountry?.region}</li>
                <li>Capital: {currentCountry?.capital}</li>
              </ul>
              <ul className={styles.list}>
                <li>Top level Domain</li>
              </ul>
            </div>
            {borderCountries.length > 0 && (
              <div className={styles.borderWrapper}>
                <p className={styles.borderLabel}>Border countries:</p>
                {borderCountries.map((border) => {
                  const convertedName = border.name.common
                    .split(" ")
                    .join("-")
                    .toLowerCase();

                  return (
                    <M02Button
                      key={border.cca3}
                      className={styles.borderButton}
                      href={`/country/${convertedName}`}
                      label={border.name.common}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
