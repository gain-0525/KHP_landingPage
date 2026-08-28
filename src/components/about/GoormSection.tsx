import "./GoormSection.css";
import "../../styles/global.css";

const partners = [
  "파트너 로고 01",
  "파트너 로고 02",
  "파트너 로고 03",
  "파트너 로고 04",
  "파트너 로고 05",
  "파트너 로고 06",
  "파트너 로고 07",
  "파트너 로고 08",
];

const GoormSection = () => {
  return (
    <section className="sec sec--mist" id="goorm">
      <div className="wrap">
        <div className="sec__head">
          <span className="eyebrow">About goorm</span>
          <h2 className="h2">구름(goorm) 소개</h2>
        </div>

        <div>
          <p className="prose">
            구름은{" "}
            <b>
              “누구나 개발자가 될 수 있고, 누구나 AI를 활용해 가치를
              만들 수 있는 세상”
            </b>
            을 꿈꾸는 AI·SW 기술 교육 전문 기업입니다.
          </p>

          <p className="prose">
            독자적인 Cloud IDE 인프라와 AI 교육 플랫폼 기술력을
            바탕으로, 개인의 성장에서부터 기업의 디지털 전환(DX) 및 AI
            전환(AX)까지 교육과 기술을 아우르는 올인원 솔루션을
            제공합니다.
          </p>

          <div className="cards goorm__maincards">
            <div className="card">
              <h3 className="card__t">
                검증된 기술력과
                <br />
                플랫폼 인프라
              </h3>

              <p className="card__d">
                자체 Cloud IDE와 교육 플랫폼을 직접 개발·운영합니다.
                설치 없이 브라우저만으로 실습 환경이 열립니다.
              </p>
            </div>

            <div className="card">
              <h3 className="card__t">
                현장 밀착형
                <br />
                실무 커리큘럼
              </h3>

              <p className="card__d">
                사전 진단으로 조직의 실제 업무 이슈를 확인하고, 그
                데이터를 실습에 그대로 반영합니다.
              </p>
            </div>

            <div className="card">
              <h3 className="card__t">
                지속 가능한
                <br />
                기술 커뮤니티
              </h3>

              <p className="card__d">
                교육이 끝난 뒤에도 세미나와 워크숍으로 이어지는 개방형
                기술 커뮤니티를 운영합니다.
              </p>
            </div>
          </div>

          <div className="cards cards--2 goorm__subcards">
            <div className="card">
              <h3 className="card__t">수상 및 인증</h3>

              <div
                className="card__meta"
                style={{
                  marginTop: "16px",
                  paddingTop: 0,
                  borderTop: 0,
                }}
              >
                <span className="tag tag--blue">브랜드대상 수상</span>
                <span className="tag tag--blue">교육부장관 표창</span>
                <span className="tag tag--blue">우수훈련기관</span>
              </div>

              <p className="card__d" style={{ marginTop: "16px" }}>
                공공·민간 양쪽에서 교육 운영 역량을 인정받았습니다.
              </p>
            </div>

            <div className="card">
              <h3 className="card__t">구름 비즈니스 · 교육</h3>

              <p className="card__d">
                기업 교육 사업의 전체 라인업과 도입 사례는 구름 공식
                사이트에서 확인하실 수 있습니다.
              </p>

              <p style={{ marginTop: "20px" }}>
                <a
                  className="btn btn--sm btn--fill"
                  href="https://goorm.co/business/education"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  구름 기업교육 페이지
                  <span className="btn__arw" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="partners">
          <h3 className="partners__t">파트너사</h3>
          <p className="partners__d">
            구름과 함께 AI 교육을 만들어가는 기업·기관입니다.
          </p>
        </div>
      </div>

      <div className="marquee__mask partners__flow">
        <ul className="marquee__track">
          {[...partners, ...partners].map((partner, index) => (
            <li key={`${partner}-${index}`}>{partner}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GoormSection;