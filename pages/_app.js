import "tailwindcss/tailwind.css";
import Head from "next/head";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (window.navigator && navigator.serviceWorker) {
      navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (let registration of registrations) {
          registration.unregister();
          window.location.reload(true);
        }
      });
    }
  }, []);
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Coiny&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Coiny&family=Lilita+One&display=swap" rel="stylesheet"></link> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
