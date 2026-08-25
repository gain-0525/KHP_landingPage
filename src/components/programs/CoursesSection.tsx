import "./CoursesSection.css";
import { Link } from "react-router-dom";
import "../../styles/global.css";

type Module = {
  label: string;
  title: string;
  description: string;
};

type Course = {
  no: string;
  title: string;
  meta: string;
  goal: string;
  features: string[];
  modules: Module[];
};

const handsOnCourses: Course[] = [
  {
    no: "01",
    title: "AI로 업무 10배 빠르게",
    meta: "4시간 · 전사 실무자",
    goal:
      "ChatGPT 기반 프롬프트 엔지니어링을 익혀 실무 문서 작성과 데이터 분석에 드는 시간을 80% 이상 단축합니다.",
    features: [
      "실습 비중 85%의 현업 밀착형 구성",
      "종료 후 즉시 활용 가능한 업무 템플릿 제공",
      "NCS 인공지능 시나리오 기획 능력 단위 반영",
    ],
    modules: [
      {
        label: "Module 01",
        title: "인공지능 서비스 기초 및 환경 구축",
        description:
          "최신 생성형 AI 트렌드 동향 분석, 주요 모델별 특징 비교, 업무용 인터페이스 최적화 설정",
      },
      {
        label: "Module 02",
        title: "프롬프트 엔지니어링 실무 기법",
        description:
          "구조적 프롬프트 설계(Role·Context·Task), Few-shot 및 CoT 기반 고품질 결과 도출 기법 실습",
      },
      {
        label: "Module 03",
        title: "실전 업무 효율화 미니 프로젝트",
        description:
          "이메일·보고서 초안 자동 생성, 데이터 인사이트 요약 실습, 개인별 업무 자동화 워크플로우 설계",
      },
    ],
  },

  {
    no: "02",
    title: "AI 업무 자동화 입문",
    meta: "4시간 · 행정 / 기획 / 운영",
    goal:
      "반복적인 엑셀 작업과 대량 문서 정리를 AI로 자동화하여 개인과 조직의 업무 생산성을 극대화합니다.",
    features: [
      "Claude, Gemini 등 멀티 LLM 최적화 활용",
      "비전공자도 가능한 노코드 자동화 파이프라인",
      "수요조사를 반영한 실무 시나리오 적용",
    ],
    modules: [
      {
        label: "Module 01",
        title: "자동화 프로세스 식별 및 도구 선정",
        description:
          "업무 프로세스 맵핑을 통한 자동화 우선순위 도출, 텍스트 분석 및 멀티모달 도구의 특징 이해",
      },
      {
        label: "Module 02",
        title: "영역별 자동화 워크플로우 구축",
        description:
          "엑셀 데이터 전처리 자동화, 대량 고객 문의 이메일 분류 및 답변 초안 자동화 시스템 구축 실습",
      },
      {
        label: "Module 03",
        title: "개인 맞춤형 자동화 프로젝트",
        description:
          "참가자 실제 업무 데이터 기반 자동화 적용 워크숍, 기대 효과(ROI) 분석 도출",
      },
    ],
  },

  {
    no: "03",
    title: "AI로 만드는 콘텐츠 제작",
    meta: "4시간 · 마케팅 / 홍보 / 기획",
    goal:
      "이미지 및 영상 생성 AI를 활용해 홍보물을 전문가 수준으로 제작하고 마케팅 효율을 높입니다.",
    features: [
      "Midjourney, DALL·E 등 최신 이미지 모델 활용",
      "AI 영상 제작 및 숏폼 콘텐츠 생산 기법",
      "저작권 및 상업 이용 가이드라인 제공",
    ],
    modules: [
      {
        label: "Module 01",
        title: "콘텐츠 기획 및 저작권 가이드",
        description:
          "AI 생성 콘텐츠의 저작권 이슈와 윤리적 원칙 이해, 상업적 이용을 위한 라이선스 체크리스트",
      },
      {
        label: "Module 02",
        title: "AI 이미지 & 영상 생성 실습",
        description:
          "이미지 생성 프롬프트 스타일 기법, SNS 마케팅 콘텐츠 및 홍보 영상 편집 실습",
      },
      {
        label: "Module 03",
        title: "통합 콘텐츠 제작 프로젝트",
        description:
          "브랜드 아이덴티티를 반영한 통합 멀티미디어 콘텐츠 제작, 개인별 포트폴리오 완성",
      },
    ],
  },
];

const workshopCourses: Course[] = [
  {
    no: "04",
    title: "생성형 AI 활용 마스터",
    meta: "7시간 · 사내 AI 리더 양성",
    goal:
      "사내 데이터를 학습시킨 맞춤형 GPTs 제작과 API 연동 실무를 통해 조직의 AI 내재화를 선도합니다.",
    features: [
      "맞춤형 GPTs 및 지식 데이터베이스 연동",
      "고급 프롬프트 설계 패턴 및 최적화 전략",
      "실전 데이터 기반 API 프로젝트 수행",
    ],
    modules: [
      {
        label: "Module 01",
        title: "고급 프롬프트 엔지니어링 전략",
        description:
          "최신 모델 동향 정밀 분석, 업무 목적별 최적 모델 선택 및 복합 명령 설계 전략",
      },
      {
        label: "Module 02",
        title: "맞춤형 GPTs 제작 및 조직 배포",
        description:
          "Knowledge(지식) 연동 기법, 부서 전용 GPTs 제작 및 사내 공유 권한 관리",
      },
      {
        label: "Module 03",
        title: "API 연동 실무 및 워크플로우",
        description:
          "API 기본 호출 실습, 실무 데이터 기반 자동화 프로세스 및 조직 내 배포 로드맵 구축",
      },
    ],
  },

  {
    no: "05",
    title: "데이터 기반 AI 인사이트",
    meta: "7시간 · 기획 / 전략 / 데이터 담당",
    goal:
      "AI를 활용한 데이터 분석과 시각화를 통해 경영진 보고용 전략 보고서를 작성하고 의사결정을 지원합니다.",
    features: [
      "비전공자 맞춤형 AI 통계 분석 및 해석",
      "고급 시각화 기법 및 스토리텔링 방법론",
      "실무 데이터를 활용한 의사결정 시뮬레이션",
    ],
    modules: [
      {
        label: "Module 01",
        title: "데이터 분석 프로세스와 AI 활용",
        description:
          "데이터 기반 의사결정 프로세스 이해, AI를 활용한 분석 방법론 설계 실습",
      },
      {
        label: "Module 02",
        title: "AI 활용 실무 데이터 분석 실습",
        description:
          "패턴·트렌드 발견, 대시보드 구성 실습, 핵심 통계 지표에 대한 AI 심층 해석",
      },
      {
        label: "Module 03",
        title: "전략 보고서 작성 및 시뮬레이션",
        description:
          "데이터 기반 스토리텔링 실습, AI 활용 전략 보고서 자동 생성 및 경영진 보고 발표",
      },
    ],
  },

  {
    no: "06",
    title: "AI 서비스 기획 디자인",
    meta: "7시간 · PM / 기획 / 디자이너",
    goal:
      "사용자 중심의 UX 설계 원칙을 학습하고, 하이파이(Hi-Fi) 프로토타입 제작을 통해 지능형 서비스를 설계합니다.",
    features: [
      "AI 에이전트 특화 UX 가이드라인",
      "Figma 기반 인터랙티브 프로토타이핑 실습",
      "사용성 평가를 통한 기획 고도화 워크숍",
    ],
    modules: [
      {
        label: "Module 01",
        title: "AI 서비스 기획 및 가치 제안",
        description:
          "AI 기획 아이디어 발굴, 비즈니스 모델(BM) 설계 및 가치 제안(KPI) 설정 기법",
      },
      {
        label: "Module 02",
        title: "AI 전용 UX 및 인터페이스 설계",
        description:
          "사용자 페르소나 및 고객 여정 지도(CJM) 작성, 와이어프레임 설계 실습",
      },
      {
        label: "Module 03",
        title: "프로토타입 제작 및 사용성 평가",
        description:
          "Figma 프로토타입 구현, AI 서비스 사용성 평가 및 상호 피드백을 통한 개선",
      },
    ],
  },

  {
    no: "07",
    title: "AI 바이브 코딩",
    meta: "7시간 · 비전공자 / 개발 협업자",
    goal:
      "자연어 명령으로 실제 작동하는 웹 앱 MVP를 제작하여 코딩 장벽을 넘고 개발 협업 능력을 확보합니다.",
    features: [
      "AI 보조 코딩 도구(Cursor 등) 활용 실습",
      "개발팀과 소통 가능한 기술적 문해력 습득",
      "나만의 앱 제작 및 클라우드 배포 실습",
    ],
    modules: [
      {
        label: "Module 01",
        title: "AI 바이브 코딩 입문",
        description:
          "자연어 명령을 통한 코드 생성 원리 이해 및 기본 애플리케이션 구조 실습",
      },
      {
        label: "Module 02",
        title: "웹 애플리케이션 기능 구현",
        description:
          "설문조사 폼, 데이터 입력 도구 등 실전 기능 구현 및 AI 디버깅 기법 학습",
      },
      {
        label: "Module 03",
        title: "나만의 웹앱 제작 및 배포",
        description:
          "개별 아이디어 MVP 개발 프로젝트 수행, 실시간 클라우드 배포 및 시연",
      },
    ],
  },
];

const CourseAccordion = ({ course }: { course: Course }) => {
  return (
    <details className="acc">
      <summary className="acc__h">
        <span className="acc__no">{course.no}</span>

        <span className="acc__ti">
          <b>{course.title}</b>
          <span>{course.meta}</span>
        </span>

        <span className="acc__sign" aria-hidden="true" />
      </summary>

      <div className="acc__b">
        <div className="goal">
          <b>교육 목표</b>
          <p>{course.goal}</p>
        </div>

        <div className="blk">
          <h5>교육 특징</h5>

          <ul className="dots-list">
            {course.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="blk">
          <h5>상세 커리큘럼</h5>

          <table className="tbl">
            <tbody>
              {course.modules.map((module) => (
                <tr key={module.label}>
                  <th>{module.label}</th>
                  <td>
                    <b>{module.title}</b>
                    {" — "}
                    {module.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </details>
  );
};

const intensiveCourses: Course[] = [
  {
    no: "08",
    title: "생성형 AI 기반 업무 자동화 마스터",
    meta: "32시간(4일) · DX / IT 프로젝트 리더",
    goal:
      "Python과 LangChain을 활용해 기업 보안 요구를 충족하는 맞춤형 RAG 시스템과 에이전트를 구축합니다.",
    features: [
      "고급 업무 자동화 스크립팅 전문 역량 확보",
      "지식 베이스(Vector DB) 연동형 AI 솔루션 개발",
      "엔드투엔드(E2E) AI 서비스 포트폴리오 완성",
    ],
    modules: [
      {
        label: "Day 1",
        title: "고급 프롬프트 및 API 아키텍처",
        description:
          "복합 명령 설계 기술 고도화 및 API 연동 시스템 설계 기초 실습",
      },
      {
        label: "Day 2",
        title: "Python 자동화 및 데이터 분석",
        description:
          "업무용 스크립트 개발 실무 및 AI 기반 데이터 분석 대시보드 시각화",
      },
      {
        label: "Day 3",
        title: "AI 에이전트 & LangChain 실전",
        description:
          "LangChain 프레임워크 기반 RAG(검색 증강 생성) 시스템 및 자율 에이전트 구축",
      },
      {
        label: "Day 4",
        title: "솔루션 구현 및 포트폴리오",
        description:
          "현장 적용 가능한 AI 솔루션 최종 개발 및 기술 발표, 개별 전문가 멘토링",
      },
    ],
  },
];


const CoursesSection = () => {
  return (
    <section className="sec" id="courses">
      <div className="wrap">
        <div className="sec__head rv">
          <span className="eyebrow">2026 Courses</span>

          <h2 className="h2">2026 강좌</h2>

          <p className="lead">
            과정을 눌러 교육 목표와 상세 커리큘럼을 확인하세요.
            모든 과정은 모듈 단위로 조합해 기업 맞춤형으로 재구성할 수
            있습니다.
          </p>
        </div>

        {/* Hands-On */}
        <div className="rv" style={{ marginBottom: 56 }}>
          <h3 className="h3">
            Hands-On Course

            <span
              className="tag tag--blue"
              style={{ marginLeft: 8, verticalAlign: "middle" }}
            >
              4시간
            </span>
          </h3>

          <p
            className="lead"
            style={{ marginTop: 12, fontSize: 16 }}
          >
            AI를 처음 접하는 실무자를 위한 입문 과정입니다.
            반나절 교육으로 바로 다음 날 업무에 적용할 수 있습니다.
          </p>

          <div style={{ marginTop: 28 }}>
            {handsOnCourses.map((course) => (
              <CourseAccordion
                key={course.no}
                course={course}
              />
            ))}
          </div>
        </div>

        {/* Workshop */}
        <div className="rv" style={{ marginBottom: 56 }}>
        <h3 className="h3">
            Workshop Course

            <span
            className="tag tag--blue"
            style={{ marginLeft: 8, verticalAlign: "middle" }}
            >
            7시간
            </span>
        </h3>

        <p
            className="lead"
            style={{ marginTop: 12, fontSize: 16 }}
        >
            도구는 써봤지만 업무 적용이 어려운 분을 위한 심화 과정입니다.
            하루 교육으로 조직에 적용할 결과물을 만들어 갑니다.
        </p>

        <div style={{ marginTop: 28 }}>
            {workshopCourses.map((course) => (
            <CourseAccordion
                key={course.no}
                course={course}
            />
            ))}
        </div>
        </div>

        {/* Intensive */}
        <div className="rv">
        <h3 className="h3">
            Intensive Course

            <span
            className="tag tag--blue"
            style={{ marginLeft: 8, verticalAlign: "middle" }}
            >
            32시간
            </span>
        </h3>

        <p
            className="lead"
            style={{ marginTop: 12, fontSize: 16 }}
        >
            4일간의 집중 과정입니다. 현업에 바로 적용할 수 있는 AI 솔루션을
            직접 완성합니다.
        </p>

        <div style={{ marginTop: 28 }}>
            {intensiveCourses.map((course) => (
            <CourseAccordion
                key={course.no}
                course={course}
            />
            ))}
        </div>
        </div>

        <div className="visit__foot rv">
            <p className="visit__copy">
                인원, 일정, 주제를 알려주시면
                <br />
                모듈을 조합해 맞춤 커리큘럼을 제안 드립니다.
            </p>

            <Link
                className="btn btn--lg btn--fill"
                to="/contact"
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

export default CoursesSection;