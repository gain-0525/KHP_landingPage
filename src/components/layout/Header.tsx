import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { navigation } from "../../data/navigation";
import { useTheme } from "../../hooks/useTheme";
import goormLogo from '../../assets/goorm_logo.svg';

import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="hdr">
      <div className="wrap hdr__in">
        <Link
          className="lockup"
          to="/"
          aria-label="K-하이테크 플랫폼 구름스퀘어 홈"
          onClick={closeMobileMenu}
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

          <span className="lockup__khp">K-HIGH TECH PLATFORM</span>

          <span className="lockup__bar" aria-hidden="true" />

          <img
            src = {goormLogo}
            alt = "구름 스퀘어 로고"
            className="lockup__logo"
          />
        </Link>

        {/* PC Navigation */}
        <nav
        className="gnb"
        aria-label="주요 메뉴"
        onMouseLeave={() => setOpenMenu(null)}
        >
        {navigation.map((item) => (
            <div
            className={`gnb__it ${!item.children ? "is-plain" : ""}`}
            key={item.path}
            onMouseEnter={() => {
                if (item.children) {
                setOpenMenu(item.path);
                } else {
                setOpenMenu(null);
                }
            }}
            >
            <NavLink to={item.path} className="gnb__link">
                <span>{item.label}</span>

                {(item.children || item.label === "문의하기") && (
                    <svg
                    className="gnb__arrow"
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                    >
                    <path
                        d="M2.5 4.5L6 8L9.5 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                )}
            </NavLink>

            {item.children && openMenu === item.path && (
                <div className="gnb__sub">
                {item.children.map((child) => (
                    <NavLink
                    key={child.path}
                    to={child.path}
                    onClick={() => setOpenMenu(null)}
                    >
                    {child.label}
                    </NavLink>
                ))}
                </div>
            )}
            </div>
        ))}
        </nav>

        <div className="hdr__side">
          <button
            type="button"
            className="themebtn"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "라이트 모드 전환"
                : "다크 모드 전환"
            }
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>

          <Link className="hdr__login" to="/login">
            로그인
          </Link>

          <button
            type="button"
            className="burger"
            aria-label="메뉴 열기"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`mnav ${isMobileMenuOpen ? "is-open" : ""}`}
        aria-label="모바일 메뉴"
      >
        <div className="wrap">
          {navigation.map((item) => (
            <div className="mnav__g" key={item.path}>
              <Link to={item.path} onClick={closeMobileMenu}>
                {item.label}
              </Link>

              {item.children && (
                <ul>
                  {item.children.map((child) => (
                    <li key={child.path}>
                      <Link
                        to={child.path}
                        onClick={closeMobileMenu}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;