import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store/store";
import Header from "../components/header";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <>
      <Header pathname={pathname} />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
