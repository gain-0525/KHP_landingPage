import { Link } from "react-router-dom";

import "./ProgramsHero.css";
import "../../components/about/GoormSection.css"

interface ProgramsHeroProps {
  activeSection: string;
}

const ProgramsHero = ({ activeSection }: ProgramsHeroProps) => {
  return (
    <>
      <section className="subhero">
        <div className="wrap">
          <nav className="crumb" aria-label="현재 위치">
            <Link to="/">홈</Link>
            <span>/</span>
            교육훈련
          </nav>

          <h1>교육훈련</h1>

          <p>
            AI 시대에 필요한 실무 역량을 키울 수 있도록
            입문부터 심화까지 단계별 교육 프로그램을 제공합니다.
          </p>
        </div>
      </section>

      <nav className="subnav" aria-label="교육훈련 섹션">
        <div className="wrap">
          <ul>
            <li>
              <Link
                to="/programs#courses"
                className={activeSection === "#courses" ? "is-on" : ""}
              >
                2026 강좌
              </Link>
            </li>

            <li>
              <Link
                to="/programs#past"
                className={activeSection === "#past" ? "is-on" : ""}
              >
                지난 강좌
              </Link>
            </li>

            <li>
              <Link
                to="/programs#commit"
                className={activeSection === "#commit" ? "is-on" : ""}
              >
                AI 세미나
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default ProgramsHero;