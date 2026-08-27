import { Link } from "react-router-dom";

import "./CtaSection.css";

const CtaSection = () => {
  return (
    <section className="cta">
      <div className="wrap cta__in">
        <h2>
          기업의 AI 전환,
          <br />
          구름 K-하이테크 플랫폼이 교육부터 공간까지 함께합니다.
        </h2>

        <p>
          교육 및 제휴 관련 문의는 아래 연락처를 통해
          담당자에게 문의해 주세요.
        </p>

        <div className="cta__contact">
          <a
            href="mailto:goormsquare@goorm.io"
            className="cta__contact-item"
          >
            <span className="cta__contact-label">이메일 </span>
            <strong>goormsquare@goorm.io</strong>
          </a>

          <span className="cta__contact-divider" />

          <a
            href="tel:0316008586"
            className="cta__contact-item"
          >
            <span className="cta__contact-label">전화 </span>
            <strong>031-600-8583</strong>
          </a>
        </div>

        <div className="cta__btns">
          <Link
            className="btn btn--lg btn--outline"
            to="/space"
          >
            공간 대관 알아보기
            <span className="btn__arw" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;