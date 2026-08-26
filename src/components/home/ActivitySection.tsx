import { Link } from "react-router-dom";

import "./ActivitySection.css";

const ActivitySection = () => {
  return (
    <section className="sec sec--mist" id="activity">
      <div className="wrap">
        <div className="sec__head rv">
          <span className="eyebrow">Activity</span>

          <h2 className="h2">
            구름 KHP에서는
            <br />
            이런 활동들이 열리고 있어요
          </h2>

          <p className="lead">
            구름은 <b>성남(판교)</b>과 <b>제주</b> 두 곳에서 플랫폼을
            운영하며, 실습 중심 AI 교육과 개방형 공간, 지역 기술
            커뮤니티를 함께 만들어가고 있습니다.
          </p>
        </div>

        <div className="acts rv">
          {/* 성남 · 판교 */}
          <article className="act">
            <div className="act__ph">
              <span className="act__loc">성남 · 판교</span>

              <span className="act__nm">
                COMMIT
                <br />
                WORKSHOP
              </span>
            </div>

            <div className="act__b">
              <h3 className="act__t">COMMIT WORKSHOP</h3>

              <p className="act__q">
                “IT 실무자들의 뜨거운 지식 공유의 장”
              </p>

              <p className="act__d">
                혼자 고심하던 개발·AI 기술 이슈를 최고 수준의 동료들과
                함께 나누며 일하는 방식을 한 단계 스케일업합니다.
              </p>

              <div className="act__go">
                <Link to="/space">
                  성남 공간 둘러보기
                  <span className="btn__arw" aria-hidden="true">
                    →
                  </span>
                </Link>

                <Link to="/programs/commit">
                  워크숍 소개
                  <span className="btn__arw" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </div>
            </div>
          </article>

          {/* 제주 */}
          <article className="act act--jeju">
            <div className="act__ph">
              <span className="act__loc">제주</span>

              <span className="act__nm">
                구름톤
                <br />
                in JEJU
              </span>
            </div>

            <div className="act__b">
              <h3 className="act__t">구름톤 in JEJU</h3>

              <p className="act__q">
                “아름다운 제주에서 펼쳐지는 3박 4일간의 몰입”
              </p>

              <p className="act__d">
                전국에서 모인 기획자·디자이너·개발자가 제주의 영감을
                얻어 나만의 AI·SW 아이디어를 현실로 구현해 내는 꿈의
                해커톤입니다.
              </p>

              <div className="act__go">
                <Link to="/space">
                  제주 공간 둘러보기
                  <span className="btn__arw" aria-hidden="true">
                    →
                  </span>
                </Link>

                <a
                  href="https://9oormthon.goorm.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  구름톤 in JEJU 자세히 보기
                  <span className="btn__arw" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;