import "./PastCoursesSection.css";

type PastCourse = {
  title: string;
  category: string;
  duration: string;
  keywords: string[];
};

const pastCourses: PastCourse[] = [
  {
    title: "AI기반 업무 혁신: 생성형 AI & UX/UI 최적화 마스터 과정",
    category: "생성형 AI · UX/UI",
    duration: "8시간",
    keywords: ["생성형 AI", "UX/UI", "업무 혁신"],
  },
  {
    title: "생성형 AI로 시작하는 실무 기초 과정",
    category: "생성형 AI",
    duration: "8시간",
    keywords: ["AI 입문", "프롬프트", "실무 활용"],
  },
  {
    title:
      "스토리로 설계하는 제품 기획: 글로벌 제품 기획 시나리오와 스토리보드 제작 실습 과정",
    category: "제품 기획",
    duration: "시간 확인 필요",
    keywords: ["제품 기획", "스토리보드", "기획 실습"],
  },
  {
    title: "[Workshop] 데이터 기반 AI 인사이트",
    category: "데이터 · AI",
    duration: "7시간",
    keywords: ["데이터 분석", "AI 인사이트", "의사결정"],
  },
];

const PastCoursesSection = () => {
  return (
    <section className="sec sec--mist" id="past">
      <div className="wrap">
        <div className="sec__head rv">
          <span className="eyebrow">Past Programs</span>

          <h2 className="h2">지난 강좌</h2>

          <p className="lead">
            구름 K-하이테크 플랫폼에서 진행한 대표 교육 프로그램을
            소개합니다.
          </p>
        </div>

        <div className="past-grid rv">
          {pastCourses.map((course) => (
            <article className="past-card" key={course.title}>
              <div className="past-card__top">
                <span className="past-card__category">
                  {course.category}
                </span>

                <span className="past-card__duration">
                  {course.duration}
                </span>
              </div>

              <h3 className="past-card__title">
                {course.title}
              </h3>

              <div className="past-card__tags">
                {course.keywords.map((keyword) => (
                  <span
                    className="tag tag--blue"
                    key={keyword}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastCoursesSection;