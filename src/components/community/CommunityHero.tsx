import { Link } from "react-router-dom";

import "../../styles/global.css";
import "../../components/about/GoormSection.css";

interface CommunityHeroProps {
  activeSection: string;
}

const CommunityHero = ({
  activeSection,
}: CommunityHeroProps) => {
  return (
    <>
      <section className="subhero">
        <div className="wrap">
          <nav className="crumb" aria-label="현재 위치">
            <Link to="/">홈</Link>
            <span>/</span>
            커뮤니티
          </nav>

          <h1>커뮤니티</h1>

          <p>
            공지사항, 교육 결과물, 그리고 실제 수강생들의
            이야기를 전합니다.
          </p>
        </div>
      </section>

      <nav
        className="subnav"
        aria-label="커뮤니티 섹션"
      >
        <div className="wrap">
          <ul>
            <li>
              <Link
                to="/community#notice"
                className={
                  activeSection === "#notice"
                    ? "is-on"
                    : ""
                }
              >
                공지사항
              </Link>
            </li>

            <li>
              <Link
                to="/community#gallery"
                className={
                  activeSection === "#gallery"
                    ? "is-on"
                    : ""
                }
              >
                교육 갤러리
              </Link>
            </li>

            <li>
              <Link
                to="/community#reviews"
                className={
                  activeSection === "#reviews"
                    ? "is-on"
                    : ""
                }
              >
                수강후기
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default CommunityHero;