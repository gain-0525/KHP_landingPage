import "./EcoSystemSection.css";

const EcosystemSection = () => {
  return (
    <section className="sec sec--mist sec--tight" id="eco">
      <div className="wrap">
        <div className="sec__head">
          <span className="eyebrow">Related Programs</span>

          <h2 className="h2">
            함께 둘러보는 구름 AI 생태계
          </h2>

          <p className="lead">
            재직자 교육 외에도, 목적에 따라 선택할 수 있는 프로그램을
            운영하고 있습니다.
          </p>
        </div>

        <div className="eco">
          <a
            className="eco__it"
            href="https://deepdive.goorm.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="eco__tag">KDT</span>
            <h3 className="eco__t">DEEPDIVE</h3>

            <p className="eco__d">
              취업 준비자를 위한 장기 집중 과정
            </p>

            <span className="eco__go">
              자세히 보기
              <span className="btn__arw" aria-hidden="true">
                ↗
              </span>
            </span>
          </a>

          <a
            className="eco__it"
            href="https://aicampus.goorm.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="eco__tag">AI 캠퍼스</span>
            <h3 className="eco__t">구름 프리즘</h3>

            <p className="eco__d">
              AI 전문 온 · 오프라인 부트캠프
            </p>

            <span className="eco__go">
              자세히 보기
              <span className="btn__arw" aria-hidden="true">
                ↗
              </span>
            </span>
          </a>

          <a
            className="eco__it"
            href="https://kdc.goorm.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="eco__tag">온라인 강의</span>
            <h3 className="eco__t">AI 기초체력훈련</h3>

            <p className="eco__d">
              언제든 시작할 수 있는 AI 전문 온라인 강의
            </p>

            <span className="eco__go">
              자세히 보기
              <span className="btn__arw" aria-hidden="true">
                ↗
              </span>
            </span>
          </a>

          <a
            className="eco__it"
            href="https://9oormthon.goorm.io/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <span className="eco__tag">해커톤</span>

            <h3 className="eco__t">
                구름톤 in JEJU
            </h3>

            <p className="eco__d">
                제주에서 3박 4일간 진행되는 해커톤
            </p>

            <span className="eco__go">
                자세히 보기
                <span className="btn__arw" aria-hidden="true">
                ↗
                </span>
            </span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;