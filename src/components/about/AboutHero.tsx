import { Link } from "react-router-dom";

import "./AboutHero.css";

interface AboutHeroProps {
    activeSection: string;
}

const AboutHero = ({ activeSection }: AboutHeroProps) => {
  return (
    <>
      <section className="subhero">
        <div className="wrap">
          <nav className="crumb" aria-label="현재 위치">
            <Link to="/">홈</Link>
            <span>/</span>
            사업소개
          </nav>

          <h1>사업소개</h1>

          <p>
            고용노동부와 한국산업인력공단이 주관하는 K-하이테크 플랫폼,
            그리고 이를 운영하는 구름을 소개합니다.
          </p>
        </div>
      </section>

      <nav className="subnav" aria-label="사업소개 섹션">
        <div className="wrap">
            <ul>
            <li>
                <a
                href="/about#khp"
                className={activeSection === "#khp" ? "is-on" : ""}
                >
                K-하이테크 플랫폼
                </a>
            </li>

            <li>
                <a
                href="/about#goorm"
                className={activeSection === "#goorm" ? "is-on" : ""}
                >
                구름 소개
                </a>
            </li>

            <li>
                <a
                href="/about#location"
                className={activeSection === "#location" ? "is-on" : ""}
                >
                오시는 길
                </a>
            </li>
            </ul>
        </div>
        </nav>
    </>
  );
};

export default AboutHero;