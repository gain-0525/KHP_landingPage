import { Link, useParams } from "react-router-dom";
import { notices } from "../data/notice";

import "../styles/global.css";
import "./NoticeDetailPage.css";

const NoticeDetailPage = () => {
  const { id } = useParams();

  const notice = notices.find(
    (item) => item.id === Number(id)
  );

  if (!notice) {
    return (
      <main>
        <section className="sec">
          <div className="wrap">
            <h1>공지사항을 찾을 수 없습니다.</h1>

            <Link
              to="/community#notice"
              className="btn btn--sm btn--ghost"
            >
              공지사항으로 돌아가기
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="sec notice-detail">
        <div className="wrap">
          <div className="notice-detail__head">
            <span className="eyebrow">
              Notice
            </span>

            <span className="tag">
              {notice.category}
            </span>

            <h1>
              {notice.title}
            </h1>

            <p className="notice-detail__date">
              {notice.date}
            </p>
          </div>

          <div className="notice-detail__body">
            {notice.content}
          </div>

          <div className="notice-detail__bottom">
            <Link
              to="/community#notice"
              className="btn btn--sm btn--ghost"
            >
              ← 목록으로
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NoticeDetailPage;