import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

export interface CountryDataProps {
  name: {
    common: string;
  };
  capital: Array<string>;
  cca3: string;
  region: string;
  population: number;
  flags: {
    alt: string;
    png: string;
  };
  borders: Array<string>;
}

export interface CountriesProviderProps {
  children: ReactNode;
}

export interface CountriesContextProps {
  allCountries: Array<CountryDataProps>;
  setAllCountries: React.Dispatch<React.SetStateAction<CountryDataProps[]>>;
  filteredCountries: Array<CountryDataProps>;
  setFilteredCountries: React.Dispatch<
    React.SetStateAction<CountryDataProps[]>
  >;
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  handleRegionSearch: (region: string) => Promise<void>;
}

export const CountriesContext = createContext<
  CountriesContextProps | undefined
>(undefined);

export const CountriesProvider: React.FC<CountriesProviderProps> = (props) => {
  const [allCountries, setAllCountries] = useState<CountryDataProps[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<
    CountryDataProps[]
  >([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://restcountries.com/v3.1/all");
        setAllCountries(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleRegionSearch = async (region: string) => {
    if (!region) setFilteredCountries([]);
    else {
      try {
        const { data } = await axios.get(
          `https://restcountries.com/v3.1/region/${region}`
        );
        setFilteredCountries(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <CountriesContext.Provider
      value={{
        allCountries,
        setAllCountries,
        filteredCountries,
        setFilteredCountries,
        isSearching,
        setIsSearching,
        handleRegionSearch,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};
