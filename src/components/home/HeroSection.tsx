import { Link } from "react-router-dom";

import "./HeroSection.css";
import '../../styles/global.css'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero__in">
          {/* Hero Copy */}
          <div className="hero__copy">
            <div className="hero__badges">
              <span className="pill pill--solid">K-하이테크 플랫폼</span>
              <span className="pill pill--soft">
                정부지원 AI 교육 플랫폼
              </span>
            </div>

            <h1>
              AI 기술이
              <br />
              <em>기업의 경쟁력</em>이 되는 곳
            </h1>

            <p className="wordmark wordmark--hero">
              goorm<i>square</i>
            </p>

            <p className="hero__sub">
              실습 중심 AI 교육부터 공간, 커뮤니티, 기업 맞춤 교육까지
              <br />
              AI 전환(AX)을 위한 모든 경험이 연결되는 플랫폼입니다.
            </p>

            <div className="hero__cta">
              <Link
                className="btn btn--md btn--fill btn--sq"
                to="/programs/courses"
              >
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 8l9-4 9 4-9 4-9-4z" />
                  <path d="M7 10.4V15c0 1.2 2.2 2.1 5 2.1s5-.9 5-2.1v-4.6" />
                </svg>

                교육과정 보기
                <span className="btn__arw" aria-hidden="true">
                  ›
                </span>
              </Link>

              <Link
                className="btn btn--md btn--ghost btn--sq"
                to="/space/space"
              >
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="4" y="4" width="9.5" height="16" rx="1.4" />
                  <path d="M13.5 9H20v11h-6.5" />
                  <path d="M7 8h1M10.5 8h1M7 12h1M10.5 12h1M7 16h1M10.5 16h1" />
                </svg>

                공간 둘러보기
                <span className="btn__arw" aria-hidden="true">
                  ›
                </span>
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hero__visual" aria-hidden="true">
            <svg
              className="orbit"
              viewBox="0 0 600 500"
              preserveAspectRatio="xMidYMid meet"
            >
              <ellipse
                cx="300"
                cy="205"
                rx="238"
                ry="118"
                transform="rotate(-17 300 205)"
              />
              <ellipse
                cx="300"
                cy="215"
                rx="252"
                ry="88"
                transform="rotate(11 300 215)"
              />
              <ellipse
                cx="300"
                cy="200"
                rx="196"
                ry="158"
                transform="rotate(-46 300 200)"
              />

              <circle cx="118" cy="196" r="6" fill="#4A48E6" />
              <circle cx="470" cy="128" r="5" fill="#8E8CF3" />
              <circle cx="518" cy="252" r="6" fill="#6B69EE" />
              <circle cx="392" cy="92" r="5" fill="#C9C8FA" />
              <circle cx="196" cy="330" r="5" fill="#C9C8FA" />
            </svg>

            <div className="ped ped--3" />
            <div className="ped ped--2" />
            <div className="ped ped--1" />

            <div className="sphere">
              <span className="wordmark">
                goorm<i>square</i>
              </span>
            </div>

            <div className="fcard fc--edu">
              <span className="fcard__ic">
                <svg className="ic" viewBox="0 0 24 24">
                  <path d="M3 8l9-4 9 4-9 4-9-4z" />
                  <path d="M7 10.4V15c0 1.2 2.2 2.1 5 2.1s5-.9 5-2.1v-4.6" />
                </svg>
              </span>

              <span>
                <b>AI 교육</b>
                <span>실습 중심 교육</span>
              </span>
            </div>

            <div className="fcard fc--comm">
              <span className="fcard__ic">
                <svg className="ic" viewBox="0 0 24 24">
                  <circle cx="9" cy="8.4" r="3.1" />
                  <path d="M3.4 19a5.8 5.8 0 0 1 11.2 0" />
                  <path d="M16.2 6.6a3 3 0 0 1 0 5.6" />
                  <path d="M17.2 14.4A5.6 5.6 0 0 1 20.8 19" />
                </svg>
              </span>

              <span>
                <b>커뮤니티</b>
                <span>네트워킹 &amp; 교류</span>
              </span>
            </div>

            <div className="fcard fc--sem">
              <span className="fcard__ic">
                <svg className="ic" viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="10.6" rx="3"/><path d="M5.6 11.4a6.4 6.4 0 0 0 12.8 0"/><path d="M12 17.8V21"/></svg>
              </span>

              <span>
                <b>세미나</b>
                <span>전문 지식 공유</span>
              </span>
            </div>

            <div className="fcard fc--corp">
              <span className="fcard__ic">
                <svg className="ic" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="9.5" height="16" rx="1.4" />
                  <path d="M13.5 9H20v11h-6.5" />
                  <path d="M7 8h1M10.5 8h1M7 12h1M10.5 12h1" />
                </svg>
              </span>

              <span>
                <b>기업 맞춤 교육</b>
                <span>AX 컨설팅 &amp; 프로젝트</span>
              </span>
            </div>

            <div className="fcard fc--rent">
              <span className="fcard__ic">
                <svg className="ic" viewBox="0 0 24 24">
                  <rect x="4" y="4.5" width="16" height="9.5" rx="1.5" />
                  <path d="M12 14v3.5M7.5 21v-1.6a1.8 1.8 0 0 1 1.8-1.8h5.4a1.8 1.8 0 0 1 1.8 1.8V21" />
                </svg>
              </span>

              <span>
                <b>공간 대관</b>
                <span>세미나실 · 회의실</span>
              </span>
            </div>
          </div>
        </div>

        {/* Hero Stats */}
        <dl className="hero__stats">
          <div className="hstat">
            <span className="hstat__ic">
              <svg className="ic" viewBox="0 0 24 24">
                <circle cx="9" cy="8.4" r="3.1" />
                <path d="M3.4 19a5.8 5.8 0 0 1 11.2 0" />
                <path d="M16.2 6.6a3 3 0 0 1 0 5.6" />
                <path d="M17.2 14.4A5.6 5.6 0 0 1 20.8 19" />
              </svg>
            </span>

            <div>
              <dd className="hstat__v">10,000+</dd>
              <dt className="hstat__k">누적 수료생</dt>
            </div>
          </div>

          <div className="hstat">
            <span className="hstat__ic">
              <svg className="ic" viewBox="0 0 24 24">
                <path d="M12 3.7l2.6 5.2 5.8.9-4.2 4.1 1 5.7L12 17l-5.2 2.6 1-5.7-4.2-4.1 5.8-.9z" />
              </svg>
            </span>

            <div>
              <dd className="hstat__v">95%</dd>
              <dt className="hstat__k">평균 교육 만족도</dt>
            </div>
          </div>

          <div className="hstat">
            <span className="hstat__ic">
              <svg className="ic" viewBox="0 0 24 24">
                <rect x="4" y="4" width="9.5" height="16" rx="1.4" />
                <path d="M13.5 9H20v11h-6.5" />
                <path d="M7 8h1M10.5 8h1M7 12h1M10.5 12h1" />
              </svg>
            </span>

            <div>
              <dd className="hstat__v">300+</dd>
              <dt className="hstat__k">협약 기업</dt>
            </div>
          </div>

          <div className="hstat">
            <span className="hstat__ic">
              <svg className="ic" viewBox="0 0 24 24">
                <path d="M12 21s6.8-6 6.8-10.8a6.8 6.8 0 1 0-13.6 0C5.2 15 12 21 12 21z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>

            <div>
              <dd className="hstat__v">판교 · 제주</dd>
              <dt className="hstat__k">2개 거점 운영</dt>
            </div>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default HeroSection;