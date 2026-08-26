import { useState } from "react";
import KakaoMap from "../../components/about/KakaoMap";

import "./SpaceLocation.css";

type Location = "pangyo" | "jeju";

const SpaceLocation = () => {
  const [location, setLocation] = useState<Location>("pangyo");

  return (
    <section className="sec" id="location">
      <div className="wrap">

        {/* 제목 */}
        <div className="place__top">
          <div
            className="sec__head"
            style={{ marginBottom: 0 }}
          >
            <span className="eyebrow">Location</span>
            <h2 className="h2">오시는 길</h2>

            <p className="lead">
              구름스퀘어의 위치를 확인해 주세요.
            </p>
          </div>

          {/* 판교 / 제주 탭 */}
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

        {/* 판교 */}
        {location === "pangyo" && (
          <div className="location-content">

            <KakaoMap
              lat={37.4025352267}
              lng={127.10082686151}
            />

            <div className="location-info">
              <div className="location-info__row">
                <span className="location-info__label">
                  주소
                </span>

                <span>
                  경기도 성남시 분당구 판교로 242 A동 9층
                </span>
              </div>

              <div className="location-info__row">
                <span className="location-info__label">
                  전화
                </span>

                <a href="tel:0316008586">
                  031-600-8586
                </a>
              </div>
            </div>
          </div>
        )}

        {/* 제주 */}
        {location === "jeju" && (
          <div className="location-content">

            <KakaoMap
              lat={33.4871007}
              lng={126.5317515}
            />

            <div className="location-info">
              <div className="location-info__row">
                <span className="location-info__label">
                  주소
                </span>

                <span>
                  제주특별자치도 제주시 이도이동 1921
                </span>
              </div>

              <div className="location-info__row">
                <span className="location-info__label">
                  전화
                </span>

                <span>-</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default SpaceLocation;