import { useContext } from "react";
import {
  CountriesContext,
  CountriesContextProps,
} from "../../../context/CountriesContext";
import styles from "./M04Filter.module.scss";

const M04Filter = () => {
  const { handleRegionSearch } = useContext(
    CountriesContext
  ) as CountriesContextProps;

  const onFilterValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleRegionSearch(event.target.value);
  };

  return (
    <div className={styles.M04Filter}>
      <select className={styles.filterWrapper} onChange={onFilterValueChange}>
        <option value="">Filter By Region</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default M04Filter;
