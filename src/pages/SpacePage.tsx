import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import SpaceHero from "../components/space/SpaceHero";
import SpaceSection from "../components/space/SpaceSection";
import GuideSection from "../components/space/GuideSection";
import SpaceLocation from "../components/space/SpaceLocation";

const SpacePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.substring(1);

    const scrollToTarget = () => {
      const target = document.getElementById(id);

      console.log("이동할 ID:", id);
      console.log("찾은 element:", target);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // 페이지 렌더링 이후 실행
    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToTarget);
    });
  }, [location.pathname, location.hash]);

  return (
    <>
      <SpaceHero />
      <SpaceSection />
      <GuideSection />
      <SpaceLocation />
    </>
  );
};

export default SpacePage;