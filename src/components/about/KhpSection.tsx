import "./KhpSection.css";
import "../../styles/global.css"

const KhpSection = () => {
  return (
    <section className="sec" id="khp">
      <div className="wrap">
        <div className="sec__head">
          <span className="eyebrow">About KHP</span>
          <h2 className="h2">K-하이테크 플랫폼이란?</h2>
        </div>

        <div>
          <p className="quote">
            “AI 시대, 지역 기업과 재직자의 가장 확실한 AI 페이스메이커”
          </p>

          <p className="prose" style={{ marginTop: "28px" }}>
            K-하이테크 플랫폼(KHP)은{" "}
            <b>
              고용노동부와 한국산업인력공단이 주관하는 국가 사업
            </b>
            으로, 급변하는 AI·SW 산업 환경 속에서 지역 기업과 재직자가
            신기술 역량을 갖출 수 있도록{" "}
            <b>
              실습 중심 교육, 최첨단 인프라, 기술 커뮤니티
            </b>
            를 지원합니다.
          </p>

          <dl className="deflist">
            <div>
              <dt>국비 지원 혜택</dt>
              <dd>
                기업과 재직자의 교육 비용 부담을 최소화한 맞춤형 AI
                교육을 제공합니다. 협약 기업 재직자는 교육비 전액이
                국비로 지원됩니다.
              </dd>
            </div>

            <div>
              <dt>첨단 인프라 개방</dt>
              <dd>
                최신 설비를 갖춘 실습 공간과 세미나실을 무료 또는
                최저가로 대관합니다. 협약 기업은 구름스퀘어 전 공간을
                무료로 이용할 수 있습니다.
              </dd>
            </div>

            <div>
              <dt>지역 기술 생태계 조성</dt>
              <dd>
                판교와 제휴 거점을 중심으로 기술을 공유하고 사람이
                모이는 네트워크의 장을 마련합니다.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default KhpSection;