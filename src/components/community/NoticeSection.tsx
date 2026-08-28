import { Link } from "react-router-dom";
import { notices } from "../../data/notice";

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
          {notices.map((notice) => (
            <Link
              key={notice.id}
              className="notice__row"
              to={`/community/notice/${notice.id}`}
            >
              <span
                className={`tag ${
                  notice.tagType === "ink"
                    ? "tag--ink"
                    : notice.tagType === "blue"
                    ? "tag--blue"
                    : ""
                }`}
              >
                {notice.category}
              </span>

              <span className="notice__title">
                {notice.title}
              </span>

              <span className="notice__date">
                {notice.date}
              </span>
            </Link>
          ))}
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