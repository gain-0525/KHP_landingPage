import { useState } from "react";
import "../../styles/global.css";
import "./SpaceSection.css";

import baekbeomImg from "../../assets/pangyo_back.png";
import tealImg from "../../assets/pangyo_till.png";
import townhallImg from "../../assets/pangyo_townhall.png";
import pangyoMainImg from "../../assets/pangyo_first.png";
import jejuMainImg from "../../assets/jeju_first.png";
import jejuSquareImg from "../../assets/jeju_square.png";
import jejuRitchieImg from "../../assets/jeju_ritchie.png";

type SpaceLocation = "pangyo" | "jeju";

const SpaceSection = () => {
  const [location, setLocation] =
    useState<SpaceLocation>("pangyo");

  return (
    <section className="sec" id="space">
      <div className="wrap">

        {/* 제목 */}
        <div className="sec__head">
          <span className="eyebrow">Space</span>

          <h2 className="h2">공간 소개</h2>

          <p className="lead">
            <b>구름스퀘어</b>는 고용노동부와
            한국산업인력공단이 지원하는 ‘K-하이테크 플랫폼’
            사업의 일환으로 IT 기술 교육에 관심 있는 인재를
            위해 마련된 개방형 오프라인 플랫폼입니다.
          </p>
        </div>

        {/* ================================
            판교 / 제주 대표 공간
        ================================= */}

        <div className="space__branches">

          {/* 판교 */}
          <div className="space__branch">
            <div className="space__branch-img">
              <img
                src={pangyoMainImg}
                alt="구름스퀘어 판교"
              />
            </div>

            <div className="space__branch-info">
              <span className="space__branch-label">
                PANGYO
              </span>

              <h3>구름스퀘어 판교</h3>

              <p>
                교육, 세미나, 컨퍼런스와 다양한
                커뮤니티 활동을 위한 공간입니다.
              </p>
            </div>
          </div>

          {/* 제주 */}
          <div className="space__branch">
            <div className="space__branch-img">
              <img
                src={jejuMainImg}
                alt="구름스퀘어 제주"
              />
            </div>

            <div className="space__branch-info">
              <span className="space__branch-label">
                JEJU
              </span>

              <h3>구름스퀘어 제주</h3>

              <p>
                제주 지역의 교육과 세미나,
                커뮤니티 활동을 위한 공간입니다.
              </p>
            </div>
          </div>

        </div>

        {/* ================================
            상세 공간
        ================================= */}

        <div className="space__detail">

          <div className="space__detail-head">
            <div>
              <span className="eyebrow">Spaces</span>
              <h3 className="h3">공간 자세히 보기</h3>
            </div>

            <div
              className="tabs space__tabs"
              role="tablist"
              aria-label="지점 선택"
            >
              <button
                type="button"
                className="tab space__tab"
                role="tab"
                aria-selected={location === "pangyo"}
                onClick={() => setLocation("pangyo")}
              >
                판교
              </button>

              <button
                type="button"
                className="tab space__tab"
                role="tab"
                aria-selected={location === "jeju"}
                onClick={() => setLocation("jeju")}
              >
                제주
              </button>
            </div>
          </div>

          {/* 판교 상세 공간 */}
          {location === "pangyo" && (
            <div>
              <h3
                className="h3_sub"
                style={{ marginBottom: 24 }}
              >
                구름스퀘어 판교
              </h3>

              <div className="cards">

                <div className="room">
                  <div className="room__ph">
                    <img
                      src={townhallImg}
                      alt="구름스퀘어 판교 타운홀"
                    />
                  </div>

                  <div className="room__b">
                    <h4 className="room__t">
                      타운홀
                    </h4>

                    <dl className="room__dl">
                      <div>
                        <dt>추천 용도</dt>
                        <dd>
                          대담회, 세미나, 컨퍼런스
                        </dd>
                      </div>

                      <div>
                        <dt>수용 인원</dt>
                        <dd>50명</dd>
                      </div>

                      <div>
                        <dt>구비 장비</dt>
                        <dd>
                          프로젝터, 스크린, 강연대,
                          마이크
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="room">
                  <div className="room__ph">
                    <img
                      src={baekbeomImg}
                      alt="구름스퀘어 판교 백범"
                    />
                  </div>

                  <div className="room__b">
                    <h4 className="room__t">
                      백범
                    </h4>

                    <dl className="room__dl">
                      <div>
                        <dt>추천 용도</dt>
                        <dd>교육, 실습, 세미나</dd>
                      </div>

                      <div>
                        <dt>수용 인원</dt>
                        <dd>25명</dd>
                      </div>

                      <div>
                        <dt>구비 장비</dt>
                        <dd>
                          강연대, 프로젝터, 스크린,
                          HDMI 케이블, 화이트보드,
                          보드마카, 마이크
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="room">
                  <div className="room__ph">
                    <img
                      src={tealImg}
                      alt="구름스퀘어 판교 틸"
                    />
                  </div>

                  <div className="room__b">
                    <h4 className="room__t">
                      틸
                    </h4>

                    <dl className="room__dl">
                      <div>
                        <dt>추천 용도</dt>
                        <dd>스터디, 미팅</dd>
                      </div>

                      <div>
                        <dt>수용 인원</dt>
                        <dd>최대 8명</dd>
                      </div>

                      <div>
                        <dt>구비 장비</dt>
                        <dd>
                          65인치 TV, HDMI 케이블,
                          화이트보드, 보드마카
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* 제주 상세 공간 */}
          {location === "jeju" && (
            <div>
              <h3
                className="h3_sub"
                style={{ marginBottom: 24 }}
              >
                구름스퀘어 제주
              </h3>

              <div className="cards">

                <div className="room">
                  <div className="room__ph">
                    <img
                      src={jejuSquareImg}
                      alt="구름스퀘어 제주"
                    />
                  </div>

                  <div className="room__b">
                    <h4 className="room__t">
                      구름 스퀘어
                    </h4>

                    <dl className="room__dl">
                      <div>
                        <dt>추천 용도</dt>
                        <dd>
                          대담회, 세미나, 컨퍼런스
                        </dd>
                      </div>

                      <div>
                        <dt>수용 인원</dt>
                        <dd>50명</dd>
                      </div>

                      <div>
                        <dt>구비 장비</dt>
                        <dd>
                          프로젝터, 스크린, 강연대,
                          마이크
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="room">
                  <div className="room__ph">
                    <img
                      src={jejuRitchieImg}
                      alt="제주 리치"
                    />
                  </div>

                  <div className="room__b">
                    <h4 className="room__t">
                      리치
                    </h4>

                    <dl className="room__dl">
                      <div>
                        <dt>추천 용도</dt>
                        <dd>교육, 실습, 세미나</dd>
                      </div>

                      <div>
                        <dt>수용 인원</dt>
                        <dd>16명</dd>
                      </div>

                      <div>
                        <dt>구비 장비</dt>
                        <dd>
                          65인치 TV, HDMI 케이블,
                          화이트보드, 보드마카
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default SpaceSection;