import { Link } from "react-router-dom";

import "./Footer.css";
import goormLogo from '../../assets/goorm_logo.svg';

const Footer = () => {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__top">
          {/* Logo */}
          <Link
            className="lockup"
            to="/"
            aria-label="K-하이테크 플랫폼 구름스퀘어 홈"
          >
            <span className="lockup__mark" aria-hidden="true">
              <svg
                viewBox="0 0 46 48"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M8 32.2 L21 24 L27 40.5"
                  stroke="#16457E"
                  strokeWidth="7.6"
                />
                <path
                  d="M11 12.5 L19.5 19.6"
                  stroke="#0E86BE"
                  strokeWidth="7"
                />
                <path
                  d="M25.2 10 L28.6 19.4"
                  stroke="#5CB03F"
                  strokeWidth="7"
                />
                <path
                  d="M30 22.8 L40 26.6"
                  stroke="#F0A32B"
                  strokeWidth="7"
                />
              </svg>
            </span>

            <span className="lockup__khp">
              K-HIGH TECH PLATFORM
            </span>

            <span
              className="lockup__bar"
              aria-hidden="true"
            />

            <img
            src = {goormLogo}
            alt = "구름 스퀘어 로고"
            className="lockup__logo"
          />
          </Link>

          {/* Footer Navigation */}
          <div className="ftr__cols">
            <div>
              <h4 className="ftr__ct">플랫폼</h4>

              <ul>
                <li>
                  <Link to="/about">사업소개</Link>
                </li>
                <li>
                  <Link to="/programs">교육훈련</Link>
                </li>
                <li>
                  <Link to="/space">장소대관</Link>
                </li>
                <li>
                  <Link to="/community">커뮤니티</Link>
                </li>
                <li>
                  <Link to="/contact">문의하기</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="ftr__ct">연계 프로그램</h4>

              <ul>
                <li>
                  <a
                    href="https://deepdive.goorm.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DEEPDIVE
                  </a>
                </li>

                <li>
                  <a
                    href="https://aicampus.goorm.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    구름 프리즘
                  </a>
                </li>

                <li>
                  <a
                    href="https://kdc.goorm.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AI 기초체력훈련
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="ftr__ct">바로가기</h4>

              <ul>
                <li>
                  <a
                    href="https://goorm.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    구름 홈페이지
                  </a>
                </li>

                <li>
                  <a
                    href="https://tech.goorm.io/category/commit-ko/workshop-ko/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    COMMIT WORKSHOP
                  </a>
                </li>

                <li>
                  <Link to="/space/booking">
                    대관 예약
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="ftr__bot">
          <p className="ftr__info">
            <span>상호명 (주)구름</span>
            <span>대표 이상규</span>
            <span>사업자등록번호 124-87-39200</span>
            <br />
            <span>
              주소 경기도 성남시 분당구 판교로 242 PDC A동 9층
            </span>
            <span>전화 031-600-8586</span>
            <span>이메일 goormsquare@goorm.io</span>
          </p>

          <p className="ftr__cp">
            © goorm Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;