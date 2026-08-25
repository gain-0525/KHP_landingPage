import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import AboutHero from "../components/about/AboutHero";
import KhpSection from "../components/about/KhpSection";
import GoormSection from "../components/about/GoormSection";
import LocationSection from "../components/about/LocationSection";

const AboutPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }, [location.hash]);

  return (
    <>
      <AboutHero activeSection={location.hash || "#khp"} />

      <KhpSection />
      <GoormSection />
      <LocationSection />
    </>
  );
};

export default AboutPage;