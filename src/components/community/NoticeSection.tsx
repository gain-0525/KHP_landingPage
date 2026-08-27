import "./NoticeSection.css";

const NoticeSection = () => {
  return (
    <section className="sec" id="notice">
      <div className="wrap">
        <div className="sec__head">
          <span className="eyebrow">Notice</span>
          <h2 className="h2">공지사항</h2>
          <p className="lead">
            교육 모집, 운영 일정, 시설 이용 관련 안내를 확인하세요.
          </p>
        </div>

        <div className="notice__rows">
          <a className="notice__row" href="#">
            <span className="tag tag--ink">모집</span>

            <span className="notice__title">
              2026년 상반기 재직자 AI 교육 과정 모집 안내
            </span>

            <span className="notice__date">
              2026.01.05
            </span>
          </a>

          <a className="notice__row" href="#">
            <span className="tag tag--blue">안내</span>

            <span className="notice__title">
              구름스퀘어 판교 대관 운영 시간 변경 안내
            </span>

            <span className="notice__date">
              2025.12.18
            </span>
          </a>

          <a className="notice__row" href="#">
            <span className="tag">행사</span>

            <span className="notice__title">
              COMMIT WORKSHOP 12월 세션 참가 신청 오픈
            </span>

            <span className="notice__date">
              2025.11.29
            </span>
          </a>

          <a className="notice__row" href="#">
            <span className="tag tag--blue">안내</span>

            <span className="notice__title">
              KHP 협약 기업 대상 무료 대관 절차 개편 안내
            </span>

            <span className="notice__date">
              2025.11.10
            </span>
          </a>

          <a className="notice__row" href="#">
            <span className="tag">행사</span>

            <span className="notice__title">
              제주 구름스퀘어 오픈 기념 커뮤니티 밋업 후기
            </span>

            <span className="notice__date">
              2025.10.22
            </span>
          </a>
        </div>

        <p className="notice__note">
          * 공지사항은 관리자 계정으로 로그인한 경우에만 작성 ·
          수정할 수 있습니다.
        </p>
      </div>
    </section>
  );
};

export default NoticeSection;