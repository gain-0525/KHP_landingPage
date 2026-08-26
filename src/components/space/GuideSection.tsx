import { Link } from "react-router-dom";
import "../../styles/global.css";
import './GuideSection.css'

const GuideSection = () => {
  return (
    <section className="sec sec--mist" id="guide">
      <div className="wrap">

        <div className="sec__head">
          <span className="eyebrow">Guide</span>

          <h2 className="h2">이용 안내</h2>

          <p className="lead">
            구름스퀘어는 <b>KHP 협약기업을 위한 무료 대관</b>을
            운영합니다. 아래에 해당하시는 기업·기관 담당자분이라면
            지금 바로 협약을 맺고 무료로 공간을 이용해 보세요.
          </p>
        </div>

        <div className="cards cards--2">
          <div className="card">
            <p className="card__t">
              🤝 <strong>구름과 함께 IT 세미나·워크숍</strong>을 진행할 장소가 필요한 담당자님
            </p>
          </div>

          <div className="card">
            <p className="card__t">
              🏢 <strong>판교 내 위치</strong>하며 구름과 지속적인 협약·연계 사업을 희망하는 기업
            </p>
          </div>

          <div className="card">
            <p className="card__t">
              🎓 <strong>기업 탐방 및 현장 견학</strong>을 희망하는 직업계고 교사 및 대학교 교직원분
            </p>
          </div>

          <div className="card">
            <p className="card__t">
              🚀 <strong>구름과 파트너십</strong>을 통해 함께 성장하고 싶은 기업, 협회, 모임 리더
            </p>
          </div>
        </div>

        {/* 협약기업 혜택 */}
        <div style={{ marginTop: 56 }}>
          <h3 className="h3">협약기업 혜택</h3>

          <dl className="deflist">
            <div>
              <dt>구름스퀘어 무료 대관</dt>
              <dd>
                판교와 제주의 공간을 무료로 이용하실
                수 있습니다.
              </dd>
            </div>

            <div>
              <dt>프로그램 우선 참여</dt>
              <dd>
                KHP 사업 관련 네트워킹 및 교육 프로그램에
                우선 참여 기회를 드립니다.
              </dd>
            </div>

            <div>
              <dt>사업 연계 · 컨설팅</dt>
              <dd>
                정부 지원 사업 연계 및 컨설팅을 지원해 드립니다.
              </dd>
            </div>
          </dl>
        </div>

        {/* 협약 체결 */}
        <div style={{ marginTop: 56 }}>
          <h3 className="h3">협약 체결 방법</h3>

          <ul
            className="dots-list"
            style={{ marginTop: 18 }}
          >
            <li>
              <Link
                to="/contact/partnership"
                style={{
                  color: "var(--blue)",
                  fontWeight: 700,
                }}
              >
                문의하기 · 제휴문의
              </Link>{" "}
              탭에서 양식을 작성하여 제출해 주세요.
            </li>

            <li>
              협약 체결 관련 상담이나 문의는 메일 또는 유선으로
              안내해 드립니다.
            </li>
          </ul>

          <dl
            className="deflist"
            style={{ marginTop: 28 }}
          >
            <div>
              <dt>협약 문의 메일</dt>
              <dd>
                <a
                  href="mailto:goormsquare@goorm.io"
                  style={{
                    color: "var(--blue)",
                    fontWeight: 700,
                  }}
                >
                  goormsquare@goorm.io
                </a>
              </dd>
            </div>

            <div>
              <dt>전화 문의</dt>
              <dd>
                <a
                  href="tel:0316008586"
                  style={{
                    color: "var(--blue)",
                    fontWeight: 700,
                  }}
                >
                  031-600-8586
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/* 예약 */}
        <div style={{ marginTop: 72 }}>
          <span className="eyebrow">Reservation</span>

          <h3 className="h3" style={{ marginTop: 8 }}>
            일정 확인 및 빠른 신청
          </h3>

          {/* 예약 전 안내 */}
          <div className="reservation-notice">
            <h4 className="reservation-notice__title">
              대관 신청 전 확인해 주세요!
            </h4>

            <ul className="dots-list">
              <li>
                <strong>이용시간:</strong> 평일 10:30 ~ 18:30
                (주말 및 공휴일 이용 불가)
              </li>

              <li>
                <strong>신청 기한:</strong> 당일 예약 불가
                (이용일 기준 <strong>최소 3일 전</strong> 예약 필수)
              </li>
            </ul>
          </div>

          <p className="lead" style={{ marginTop: 24 }}>
            예약 페이지에서 <strong>원하는 날짜의 가용 일정을 확인</strong>하고
            예약을 진행해 주세요.
          </p>

          <a
            className="btn btn--sm btn--fill"
            href="https://script.google.com/a/goorm.io/macros/s/AKfycbxUnKThLUQseuXq70m4hO1zHSOCxOdde9iBN68gycUTGaaodmt8coKxPeZy6w4XFhs4wA/exec"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: 24 }}
          >
            일정 확인 및 신청하기 →
          </a>

          {/* 문의 안내 */}
          <aside className="reservation-contact">
            <h4>
              협약 체결 서류 문의나 대관 관련 유선 상담이 필요하신가요?
            </h4>

            <p>
              <strong>메일:</strong>{" "}
              <a href="mailto:goormsquare@goorm.io">
                goormsquare@goorm.io
              </a>

              <span className="reservation-contact__divider">|</span>

              <strong>전화:</strong>{" "}
              <a href="tel:0316008586">
                031-600-8586
              </a>
            </p>
          </aside>
        </div>

      </div>
    </section>
  );
};

export default GuideSection;