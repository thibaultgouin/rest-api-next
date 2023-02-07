import { useState, useEffect, useContext } from "react";
import A01Icon from "../../atoms/a01-icon/A01Icon";
import { BiSearchAlt2 } from "react-icons/bi";
import {
  CountriesContext,
  CountriesContextProps,
} from "../../../context/CountriesContext";
import styles from "./M03SearchBar.module.scss";

const M03SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { allCountries, setFilteredCountries, setIsSearching } = useContext(
    CountriesContext
  ) as CountriesContextProps;

  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue.length > 0) {
      setIsSearching(true);
      const filteredCountriesResult = allCountries.filter((country) =>
        country.name.common.toLowerCase().includes(searchValue.toLowerCase())
      );

      setFilteredCountries(filteredCountriesResult);
    } else {
      setIsSearching(false);
      setFilteredCountries([]);
    }
  }, [searchValue]);

  return (
    <div className={styles.M03SearchBar}>
      <div className={styles.searchIcon}>
        <A01Icon icon={BiSearchAlt2} />
      </div>
      <input
        className={styles.searchInput}
        type="text"
        value={searchValue}
        onChange={onSearchInputChange}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default M03SearchBar;
