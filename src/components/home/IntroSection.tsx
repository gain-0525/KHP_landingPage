import { Link } from "react-router-dom";

import "./IntroSection.css";
import "../../styles/global.css"

const IntroSection = () => {
  return (
    <section className="sec" id="intro">
      <div className="wrap">
        {/* Intro */}
        <div className="intro">
          <div className="intro__l rv">
            <span className="eyebrow">About KHP</span>

            <h2 className="h2">K-하이테크 플랫폼이란?</h2>

            <p className="quote" style={{ marginTop: "24px" }}>
              “AI 시대, 지역 기업과 재직자의
              <br />
              가장 확실한 AI 페이스메이커”
            </p>
          </div>
            
          <div className="intro__r rv">
            <p className="prose">
              K-하이테크 플랫폼(KHP)은{" "}
              <b>
                고용노동부와 한국산업인력공단이 함께하는 국비 지원 사업
              </b>
              입니다.
            </p>

            <p className="prose">
              급변하는 AI·SW 산업 환경 속에서 지역 기업과 재직자가
              발맞춰 신기술 역량을 갖출 수 있도록{" "}
              <b>
                실습 중심 교육부터 최첨단 인프라, 기술 커뮤니티
              </b>
              를 지원합니다.
            </p>

            <p style={{ marginTop: "26px" }}>
              <Link
                className="btn btn--sm btn--ghost"
                to="/about#khp"
              >
                사업 자세히 보기
                <span className="btn__arw" aria-hidden="true">
                  →
                </span>
              </Link>
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="benefit rv">
          <h3 className="benefit__h">
            KHP에서 챙겨갈 수 있는 특별 혜택
          </h3>

          <div className="benefit__grid">
            <div className="bnf">
              <span className="bnf__no">01</span>

              <h4 className="bnf__t">
                교육비 부담 ZERO
                <br />
                <em>100% 국비 지원</em>
              </h4>

              <p className="bnf__d">
                기업도, 직원도 비용 부담 없이 최신 AI 기술을 마음껏
                배울 수 있어요.
              </p>
            </div>

            <div className="bnf">
              <span className="bnf__no">02</span>

              <h4 className="bnf__t">
                판교 · 제주
                <br />
                <em>최첨단 공간 무료 개방</em>
              </h4>

              <p className="bnf__d">
                최신 설비가 갖춰진 대형 세미나실과 실습 공간을 자유롭게
                이용하세요.
              </p>
            </div>

            <div className="bnf">
              <span className="bnf__no">03</span>

              <h4 className="bnf__t">
                한 번의 특강으로 끝나지 않는
                <br />
                <em>단계별 커리큘럼</em>
              </h4>

              <p className="bnf__d">
                4시간 체험형부터 32시간 프로젝트 완성까지. 인원·일정·주제를
                알려주시면 그에 맞는 커리큘럼을 제안 드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;