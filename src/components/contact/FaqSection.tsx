import { useState } from "react";
import "./FaqSection.css";

type Category = "all" | "education" | "space" | "course";

type FAQ = {
  id: number;
  category: Exclude<Category, "all">;
  question: string;
  answer: React.ReactNode;
};

const faqList: FAQ[] = [
  // 교육 & 비용
  {
    id: 1,
    category: "education",
    question: "K-하이테크 플랫폼(KHP) 교육의 수강료는 정말 무료인가요?",
    answer: (
      <>
        네, 맞습니다! 고용노동부와 한국산업인력공단이 주관하는
        국가 사업으로,{" "}
        <strong>
          우수훈련기관인 구름과 협약을 맺은 기업의 재직자라면
          교육비 전액(100%)이 국비 지원
        </strong>
        됩니다. 별도의 기업 및 개인 부담금이 없습니다.
      </>
    ),
  },
  {
    id: 2,
    category: "education",
    question: "비전공자나 AI를 전혀 써보지 않은 초보자도 수강할 수 있나요?",
    answer: (
      <>
        네, 충분히 수강 가능합니다. 구름 KHP 과정은 AI 입문부터
        전문 프로젝트까지 단계별로 선택할 수 있는 커리큘럼으로
        구성되어 있습니다. 사전 진단을 통해 팀과 개인의 수준에
        맞는 커리큘럼을 제안해 드립니다.
      </>
    ),
  },
  {
    id: 3,
    category: "education",
    question: "우리 회사의 실제 데이터나 업무 프로세스에 맞춘 교육도 가능한가요?",
    answer: (
      <>
        네, 가능합니다. 사전 컨설팅을 통해 기업의 실제 업무 이슈와
        데이터를 분석하고, 이를 교육 실습에 적용하는{" "}
        <strong>모듈형 맞춤 커리큘럼</strong>을 구성해 드립니다.
      </>
    ),
  },

  // 장소 대관 & 협약
  {
    id: 4,
    category: "space",
    question: "구름스퀘어(판교/제주) 공간 대관은 누구나 이용할 수 있나요?",
    answer: (
      <>
        구름스퀘어는{" "}
        <strong>KHP 사업 협약 체결 기업에게 무료로 개방</strong>
        됩니다. 아직 협약이 되어있지 않더라도 간편한 서류 제출을
        통해 무료 협약을 체결하신 후 무료 대관 혜택을 받으실 수
        있습니다.
      </>
    ),
  },
  {
    id: 5,
    category: "space",
    question: "KHP 협약기업이 되려면 별도의 비용이나 자격 요건이 필요한가요?",
    answer: (
      <>
        아니요, <strong>협약 체결 비용은 0원(무료)</strong>입니다!
        재직자의 AI/SW 역량 강화와 IT 생태계 성장에 뜻이 있는
        기업·기관·교직원 모임이라면 간단한 서류 제출만으로
        파트너십을 맺으실 수 있습니다.
      </>
    ),
  },
  {
    id: 6,
    category: "space",
    question: "협약 체결 및 무료 대관은 어떻게 신청 하나요?",
    answer: (
      <>
        <strong>[문의하기 - 제휴문의]</strong> 탭에서 양식을
        제출해 주시거나 goormsquare@goorm.io로 문의해 주시면
        담당자가 협약 서류를 안내해 드립니다. 협약 완료 후{" "}
        <strong>[장소 대관 - 예약]</strong> 탭을 통해 가용 일정을
        확인하고 신청하시면 됩니다.
      </>
    ),
  },
  {
    id: 7,
    category: "space",
    question: "당일 대관 예약이나 주말 대관도 가능한가요?",
    answer: (
      <>
        구름스퀘어 운영 시간은{" "}
        <strong>평일 10:30 ~ 18:30</strong>이며, 주말 및 공휴일은
        운영하지 않습니다. 당일 예약은 불가하며 이용일 기준{" "}
        <strong>최소 3일 전</strong>에 예약을 완료해 주셔야 합니다.
      </>
    ),
  },

  // 수강 신청
  {
    id: 8,
    category: "course",
    question: "개인 자격으로도 수강 신청이 가능한가요?",
    answer: (
      <>
        KHP 교육 프로그램은 기본적으로{" "}
        <strong>기업/재직자 중심 과정</strong>으로 운영됩니다.
        다만 개별로 개설되는 오픈형 강좌나 세미나(COMMIT)의 경우
        개인 신청이 가능하므로{" "}
        <strong>[교육 프로그램 - 진행 중 강좌]</strong>의 모집
        요강을 확인해 주세요.
      </>
    ),
  },
  {
    id: 9,
    category: "course",
    question: "교육 수료 기준과 수료증 발급은 어떻게 되나요?",
    answer: (
      <>
        교육 과정의 <strong>80% 이상 출석 및 지정된 실습 결과물 제출</strong>
        시 구름과 고용노동부 명의의 <strong>공식 수료증</strong>이
        발급됩니다. 수료증은 교육 종료 후 PDF 형태로 다운로드하실
        수 있습니다.
      </>
    ),
  },
  {
    id: 10,
    category: "course",
    question: "교육 신청 후 일정을 변경하거나 취소할 수 있나요?",
    answer: (
      <>
        찾아가는 기업 맞춤 교육의 경우 강사 세팅 및 교안 최적화를
        위해 <strong>최소 교육 시작 7일 전</strong>까지 담당자에게
        메일 또는 유선으로 변경·취소 요청을 주셔야 합니다.
      </>
    ),
  },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "education", label: "교육&비용" },
  { value: "space", label: "장소 대관&협약" },
  { value: "course", label: "수강신청" },
];

const FaqSection = () => {
  const [category, setCategory] = useState<Category>("all");
  const [openId, setOpenId] = useState<number | null>(1);

  const filteredFaq =
    category === "all"
      ? faqList
      : faqList.filter((faq) => faq.category === category);

  const handleCategory = (value: Category) => {
    setCategory(value);
    setOpenId(null);
  };

  return (
    <section className="sec faq" id="faq">
      <div className="wrap">
        <div className="sec__head faq__head">
          <span className="eyebrow">FAQ</span>
          <h2 className="h2">자주 묻는 질문</h2>
          <p className="lead">
            K-하이테크 플랫폼 이용에 대해 자주 묻는 질문을 확인해 보세요.
          </p>
        </div>

        {/* 카테고리 */}
        <div className="faq__tabs">
          {categories.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`faq__tab ${
                category === item.value ? "is-active" : ""
              }`}
              onClick={() => handleCategory(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* FAQ */}
        <div className="faq__list">
          {filteredFaq.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`faq__item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="faq__question"
                  onClick={() =>
                    setOpenId(isOpen ? null : faq.id)
                  }
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  <span
                    className={`faq__arrow ${isOpen ? "is-open" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="faq__answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 문의 안내 */}
        <div className="faq__contact">
          <div className="faq__contact-text">
            <strong>원하는 답변을 찾지 못하셨나요?</strong>
            <p>
              교육 및 K-하이테크 플랫폼 이용에 관한 문의는
              아래 연락처로 문의해 주세요.
            </p>
          </div>

          <div className="faq__contact-info">
            <span className="faq__contact-label">문의 전화</span>

            <a href="tel:0316008586">
              031-600-8583
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;