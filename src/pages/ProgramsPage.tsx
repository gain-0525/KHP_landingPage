import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProgramsHero from "../components/programs/ProgramsHero";
import CoursesSection from "../components/programs/CoursesSection";
import PastCoursesSection from "../components/programs/PastCoursesSection";
import CommitSection from "../components/programs/CommitSection";

const ProgramsPage = () => {
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
      <ProgramsHero activeSection={location.hash || "#courses"} />
      <CoursesSection />
      <PastCoursesSection />
      <CommitSection />
    </>
  );
};

export default ProgramsPage;