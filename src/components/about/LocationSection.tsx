import { useState } from "react";
import KakaoMap from "./KakaoMap";

import "./LocationSection.css";

type Location = "pangyo" | "jeju";

const LocationSection = () => {
  const [location, setLocation] = useState<Location>("pangyo");

  return (
    <section className="sec" id="location">
      <div className="wrap">
        <div className="place__top">
          <div className="sec__head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Location</span>
            <h2 className="h2">오시는 길</h2>

            <p className="lead">
              판교와 제주 두 곳에서 구름스퀘어를 운영합니다.
            </p>
          </div>

          <div
            className="tabs"
            role="tablist"
            aria-label="지점 선택"
          >
            <button
              type="button"
              className="tab"
              role="tab"
              aria-selected={location === "pangyo"}
              onClick={() => setLocation("pangyo")}
            >
              판교
            </button>

            <button
              type="button"
              className="tab"
              role="tab"
              aria-selected={location === "jeju"}
              onClick={() => setLocation("jeju")}
            >
              제주
            </button>
          </div>
        </div>

        <div>
          {location === "pangyo" && (
            <div>

                <KakaoMap
                    lat={37.4025352267}
                    lng={127.10082686151}
                />
              <dl className="deflist" style={{ marginTop: 0 }}>
                <div>
                  <dt>주소</dt>
                  <dd>
                    경기도 성남시 분당구 판교로 242 PDC A동 9층
                    구름스퀘어 판교
                  </dd>
                </div>

                <div>
                  <dt>전화</dt>
                  <dd>
                    <a href="tel:0316008586">031-600-8586</a>
                  </dd>
                </div>

                <div>
                  <dt>대중교통</dt>
                  <dd>
                    신분당선 판교역 4번 출구에서 도보 약 10분 ·
                    판교테크노밸리 정류장 하차 후 도보 약 5분
                  </dd>
                </div>

                <div>
                  <dt>운영 시간</dt>
                  <dd>
                    평일 10:30 ~ 18:30 (주말 및 공휴일 휴무)
                  </dd>
                </div>
              </dl>
            </div>
          )}

          {location === "jeju" && (
            <div>
              <KakaoMap
                    lat={33.4871007}
                    lng={126.5317515}
                />

              <dl className="deflist" style={{ marginTop: 0 }}>
                <div>
                  <dt>주소</dt>
                  <dd>
                    제주특별자치도 (주소 확인 필요) 구름스퀘어 제주
                  </dd>
                </div>

                <div>
                  <dt>전화</dt>
                  <dd>031-600-8586</dd>
                </div>

                <div>
                  <dt>대중교통</dt>
                  <dd>자료 준비 중입니다.</dd>
                </div>

                <div>
                  <dt>운영 시간</dt>
                  <dd>
                    평일 10:30 ~ 18:30 (주말 및 공휴일 휴무)
                  </dd>
                </div>
              </dl>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;