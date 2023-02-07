import type { AppProps } from "next/app";
import { CountriesProvider } from "../context/CountriesContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CountriesProvider>
      <Component {...pageProps} />
    </CountriesProvider>
  );
}

export default MyApp;
