
import { useState } from "react";
import "./CommitSection.css";
import Pangyo1 from '../../assets/Commit_Pangyo1.png';
import Pangyo2 from '../../assets/Commit_Pangyo2.png';
import Jeju1 from '../../assets/Commit_Jeju1.png';
import Jeju2 from '../../assets/Commit_Jeju2.png';

type WorkshopLocation = "pangyo" | "jeju";

type Workshop = {
  id: number;
  location: WorkshopLocation;
  title: string;
  image: string;
};

/* ========================================
   COMMIT WORKSHOP 데이터

   새로운 워크숍이 생기면 아래에 객체 하나만 추가하면 됩니다.
======================================== */

const workshops: Workshop[] = [
  {
    id: 1,
    location: "pangyo",
    title:
      "스토리로 설계하는 제품 기획: 글로벌 제품 기획 시나리오와 스토리보드 제작 실습 과정",
    image: Pangyo1
  },
  {
    id: 2,
    location: "pangyo",
    title:
      "성공하는 기획 조직의 비밀: 글로벌 기업의 기획 프로세스로 강한 기획 조직 구축 과정",
    image: Pangyo2,
  },
  {
    id: 3,
    location: "jeju",
    title:
      "만들면서 배우는 AI 프레젠테이션: Marp & Claude 실전 가이드",
    image: Jeju1,
  },
  {
    id: 4,
    location: "jeju",
    title:
      "생성형 AI와 함께하는 구글 시트 업무 자동화 마스터 과정",
    image: Jeju2,
  },
];


/* ========================================
   카드
======================================== */
const WorkshopCard = ({ workshop }: { workshop: Workshop }) => {
  return (
    <article className="commit-card">
      <div className="commit-card__thumb">
        {workshop.image ? (
          <img
            src={workshop.image}
            alt={workshop.title}
          />
        ) : (
          <div className="commit-card__placeholder">
            이미지 준비 중
          </div>
        )}
      </div>

      <div className="commit-card__body">
        <span className="commit-card__location">
          COMMIT WORKSHOP in{" "}
          {workshop.location === "pangyo" ? "PANGYO" : "JEJU"}
        </span>

        <h3 className="commit-card__title">
          {workshop.title}
        </h3>
      </div>
    </article>
  );
};


/* ========================================
   Section
======================================== */

const CommitSection = () => {
  const [location, setLocation] =
    useState<WorkshopLocation>("pangyo");

  const filteredWorkshops = workshops.filter(
    (workshop) => workshop.location === location
  );

  return (
    <section className="sec" id="commit">
      <div className="wrap">

        {/* Section title */}
        <div className="sec__head rv">
          <span className="eyebrow">
            AI Seminar
          </span>

          <h2 className="h2">
            COMMIT WORKSHOP
          </h2>

          <p className="lead">
            세미나로는 담기 어려운 토론, 실습, 강의 같이
            깊이 있는 지식과 경험을 나누기 위한 IT 워크숍입니다.
          </p>
        </div>


        {/* 소개 */}
        <div className="commit__intro rv">
          <p>
            <b>COMMIT WORKSHOP은</b> 세미나로는 담기 어려운
            토론, 실습, 강의 같이 깊이 있는 지식과 경험을
            나누기 위한 IT 워크숍입니다.
          </p>

          <p>
            그룹으로 공통의 문제에 대해서 깊이 공감하고
            논의하고 해결책을 찾는 집단적 문제 해결 활동이나
            실무 중심의 실습 교육을 지향합니다.
          </p>
        </div>


        {/* 판교 / 제주 */}
        <div
          className="tabs commit__tabs rv"
          role="tablist"
          aria-label="워크숍 지역 선택"
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


        {/* 카드 목록 */}
        <div className="commit-grid rv">
          {filteredWorkshops.map((workshop) => (
            <WorkshopCard
              key={workshop.id}
              workshop={workshop}
            />
          ))}
        </div>


        {/* COMMIT WORKSHOP 전체 보기 */}
        <div className="commit__more">
            <a
                href="https://tech.goorm.io/category/commit-ko/workshop-ko/"
                target="_blank"
                rel="noopener noreferrer"
            >
                자세히 보기 ↗
            </a>
        </div>

      </div>
    </section>
  );
};

export default CommitSection;