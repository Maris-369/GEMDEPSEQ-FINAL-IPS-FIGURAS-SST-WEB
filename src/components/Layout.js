import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/layout.scss";

const Layout = ({ children }) => {
  useEffect(() => {
    // Script de Tawk.to
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/664a51a59a809f19fb31f92c/1hu9g6c0v";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>IPS FIGURAS SST CUCUTA SAS - Medicina Laboral e Integral</title>
        <meta name="description" content="IPS especializada en medicina laboral e integral en Cúcuta. Ofrecemos cardiología, neurología, radiología, psicología, laboratorio clínico, odontología y más." />
        <meta name="keywords" content="IPS Cúcuta, medicina laboral, trabajos en altura, cardiología, neurología, radiología, psicología, odontología, fonoaudiología, audiometría, oftalmología" />
      </Helmet>
      
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;