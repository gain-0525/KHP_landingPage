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
          인원과 일정, 다루고 싶은 주제를 남겨주시면 담당자가
          커리큘럼을 제안 드립니다.
        </p>

        <div className="cta__btns">
          <Link
            className="btn btn--lg btn--light"
            to="/contact"
          >
            교육 및 제휴 문의하기
            <span className="btn__arw" aria-hidden="true">
              →
            </span>
          </Link>

          <Link
            className="btn btn--lg btn--outline"
            to="/space"
          >
            공간 대관 알아보기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;