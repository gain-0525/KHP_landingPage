import "./ReviewSection.css";

type ReviewItem = {
  stars: number;
  text: string;
  company: string;
  course: string;
};

/* ========================================
   ✏️ 수강후기는 여기만 수정하세요

   stars   : 별점 (1~5)
   text    : 후기 내용
   company : 업종 · 부서
   course  : 수강 과정
======================================== */

const reviewItems: ReviewItem[] = [
  {
    stars: 5,
    text: "이론 설명이 짧고 실습이 대부분이라 좋았습니다. 교육 다음 날 바로 제 업무 보고서에 적용해봤는데 작성 시간이 절반 이하로 줄었어요.",
    company: "제조업 · 기획팀",
    course: "AI로 업무 10배 빠르게 (4H)",
  },
  {
    stars: 5,
    text: "우리 팀 실제 데이터를 가지고 실습해서 훨씬 와닿았습니다. 부서 전용 GPTs를 만들어 지금도 매일 쓰고 있습니다.",
    company: "IT 서비스 · 운영팀",
    course: "생성형 AI 활용 마스터 (7H)",
  },
  {
    stars: 4,
    text: "비전공자인데도 따라갈 수 있게 구성되어 있었습니다. 4일 과정이 부담됐지만 결과물이 남아서 만족합니다.",
    company: "물류 · DX추진팀",
    course: "업무 자동화 마스터 (32H)",
  },
  {
    stars: 5,
    text: "강사님이 저희 사업장으로 직접 와주셔서 이동 부담이 전혀 없었습니다. 팀 전원이 같은 언어로 이야기할 수 있게 됐어요.",
    company: "제조업 · 생산관리팀",
    course: "찾아가는 교육",
  },
  {
    stars: 5,
    text: "사전 진단으로 수준을 확인하고 모듈을 골라준 점이 좋았습니다. 이미 아는 내용을 반복하지 않아 시간이 아깝지 않았습니다.",
    company: "금융 · 데이터팀",
    course: "데이터 기반 AI 인사이트 (7H)",
  },
  {
    stars: 4,
    text: "코딩을 한 번도 해본 적 없는데 하루 만에 동작하는 웹앱을 배포까지 했습니다. 개발팀과 대화가 훨씬 수월해졌습니다.",
    company: "커머스 · 마케팅팀",
    course: "AI 바이브 코딩 (7H)",
  },
];

/* ====================================== */


const ReviewSection = () => {
  return (
    <section className="sec" id="reviews">
      <div className="wrap">
        <div className="sec__head">
          <span className="eyebrow">Reviews</span>
          <h2 className="h2">수강후기</h2>

          <p className="lead">
            교육을 마친 재직자들이 남긴 실제 후기입니다.
          </p>
        </div>

        <div className="cards review__cards">
          {reviewItems.map((review, index) => (
            <ReviewCard
              key={index}
              {...review}
            />
          ))}
        </div>

        <p className="review__note">
          * 실제 수집 후기로 교체 예정입니다.
        </p>
      </div>
    </section>
  );
};


const ReviewCard = ({
  stars,
  text,
  company,
  course,
}: ReviewItem) => {
  const starText =
    "★".repeat(stars) + "☆".repeat(5 - stars);

  return (
    <div className="rev">
      <div
        className="rev__stars"
        aria-label={`5점 만점에 ${stars}점`}
      >
        {starText}
      </div>

      <p className="rev__q">
        {text}
      </p>

      <p className="rev__by">
        <b className="rev__by_part">{company}</b> · {course}
      </p>
    </div>
  );
};

export default ReviewSection;