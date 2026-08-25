import { Link } from "react-router-dom";

import "./RoadmapSection.css";

const RoadmapSection = () => {
  return (
    <section className="sec sec--mist" id="roadmap">
      <div className="wrap">
        <div className="sec__head">
          <span className="eyebrow">Roadmap</span>

          <h2 className="h2">조직 목표 맞춤 로드맵</h2>

          <p className="lead">
            입문부터 실무 자동화, 맞춤형 프로젝트까지 단계별로 선택하세요.
          </p>
        </div>

        <div className="road__track">
          <div className="road__grid">
            {/* STEP 1 */}
            <Link className="step" to="/programs/courses">
              <div className="step__no">STEP 1</div>

              <div className="step__body">
                <p className="step__stage">AI 입문 단계</p>

                <h3 className="step__title">
                  AI 기본기 다지기
                </h3>

                <div className="step__meta">
                  <div className="step__row">
                    <div className="step__k">추천 대상</div>

                    <div className="step__v">
                      AI 툴을 한 번도 안 써봤거나, 단순 질문 용도로만 써본 분
                    </div>
                  </div>

                  <div className="step__row">
                    <div className="step__k">주요 과정</div>

                    <div className="step__v">
                      <b>AI 업무 자동화 입문</b>
                      <span className="step__hours">4H</span>
                    </div>
                  </div>
                </div>

                <span className="step__go">
                  교육과정 보기
                  <span className="btn__arw" aria-hidden="true">
                    →
                  </span>
                </span>
              </div>
            </Link>

            {/* STEP 2 */}
            <Link className="step" to="/programs/courses">
              <div className="step__no">STEP 2</div>

              <div className="step__body">
                <p className="step__stage">AI 실무 적용</p>

                <h3 className="step__title">
                  업무에 바로 활용하기
                </h3>

                <div className="step__meta">
                  <div className="step__row">
                    <div className="step__k">추천 대상</div>

                    <div className="step__v">
                      AI 툴 기본은 알지만, 실제 내 업무에 적용하고 싶은 분
                    </div>
                  </div>

                  <div className="step__row">
                    <div className="step__k">주요 과정</div>

                    <div className="step__v">
                      <b>생성형 AI 활용 마스터</b>
                      <span className="step__hours">7H</span>
                    </div>
                  </div>
                </div>

                <span className="step__go">
                  교육과정 보기
                  <span className="btn__arw" aria-hidden="true">
                    →
                  </span>
                </span>
              </div>
            </Link>

            {/* STEP 3 */}
            <Link className="step" to="/programs/courses">
              <div className="step__no">STEP 3</div>

              <div className="step__body">
                <p className="step__stage">집중 심화</p>

                <h3 className="step__title">
                  우리 회사 맞춤 역량
                </h3>

                <div className="step__meta">
                  <div className="step__row">
                    <div className="step__k">추천 대상</div>

                    <div className="step__v">
                      AI를 활용해 서비스나 시스템을 직접 구축하거나 실무
                      프로젝트를 완성하고 싶은 팀
                    </div>
                  </div>

                  <div className="step__row">
                    <div className="step__k">주요 과정</div>

                    <div className="step__v">
                      <b>생성형 AI 기반 업무 자동화 마스터</b>
                      <span className="step__hours">32H</span>
                    </div>
                  </div>
                </div>

                <span className="step__go">
                  교육과정 보기
                  <span className="btn__arw" aria-hidden="true">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="visit__foot">
          <p className="visit__copy">
            각 과정은 정기 일정 외에도 기업의 요청 또는 수시 모집을 통해
            <br />
            <b>연중 유동적으로 개설</b>됩니다.
          </p>

          <Link
            className="btn btn--lg btn--fill"
            to="/contact/inquiry"
          >
            교육 신청 · 문의하기
            <span className="btn__arw" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;