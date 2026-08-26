import { useState } from "react";
import "../../styles/global.css";

type SectionId = "space" | "guide" | "booking";

const SpaceHero = () => {
  const [activeSection, setActiveSection] =
    useState<SectionId>("space");

  const scrollToSection = (id: SectionId) => {
    setActiveSection(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section className="subhero">
        <div className="wrap">
          <nav className="crumb" aria-label="현재 위치">
            <a href="/">홈</a>
            <span>/</span>
            장소대관
          </nav>

          <h1>장소대관</h1>

          <p>
            구름스퀘어는 IT 기술 교육에 관심 있는 인재를 위해 마련된
            개방형 오프라인 플랫폼입니다. KHP 협약 기업에는 무료로
            개방됩니다.
          </p>
        </div>
      </section>

      <nav className="subnav" aria-label="장소대관 섹션">
        <div className="wrap">
          <ul>
            <li>
              <button
                type="button"
                className={activeSection === "space" ? "is-on" : ""}
                onClick={() => scrollToSection("space")}
              >
                공간 소개
              </button>
            </li>

            <li>
              <button
                type="button"
                className={activeSection === "guide" ? "is-on" : ""}
                onClick={() => scrollToSection("guide")}
              >
                이용 안내
              </button>
            </li>

            <li>
              <button
                type="button"
                className={activeSection === "booking" ? "is-on" : ""}
                onClick={() => scrollToSection("booking")}
              >
                예약
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SpaceHero;