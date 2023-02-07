import React, { useContext, useEffect } from "react";
import M01CountryCard from "../../molecules/m01-country-card/M01CountryCard";
import {
  CountriesContext,
  CountriesContextProps,
} from "../../../context/CountriesContext";
import styles from "./B02Countries.module.scss";

const B02Countries = () => {
  const { allCountries, filteredCountries, isSearching } = useContext(
    CountriesContext
  ) as CountriesContextProps;

  const activeCountries =
    filteredCountries.length > 0 || isSearching
      ? filteredCountries
      : allCountries;

  return (
    <div className={styles.b02Countries}>
      <div className={styles.container}>
        {activeCountries.map((country) => (
          <div key={country.cca3}>
            <M01CountryCard {...country} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default B02Countries;
