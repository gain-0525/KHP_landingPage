import "./GallerySection.css";
import "../../styles/global.css";

// award와 image는 넣지 않아도 문제 없으나, image 같은 경우는 첨부해주세요! 아니면 빈화면으로 나옵니다
type GalleryItem = {
  title: string;
  generation: string;
  course: string;
  award?: string;
  image?: string;
};

/* ========================================
   ✏️ 갤러리 내용은 여기만 수정하세요
======================================== */

const galleryItems: GalleryItem[] = [
  {
    title: "사내 문서 검색 RAG 챗봇",
    generation: "3기",
    award: "최우수상",
    course: "32H 집중과정",
    image: "여기에 이미지 링크 넣기",
  },
  {
    title: "고객 문의 자동 분류 워크플로우",
    generation: "3기",
    award: "우수상",
    course: "7H 워크숍",
  },
  {
    title: "주간 실적 리포트 자동 생성기",
    generation: "2기",
    course: "4H 입문과정",
  },
  {
    title: "브랜드 홍보 숏폼 콘텐츠 세트",
    generation: "2기",
    award: "우수상",
    course: "4H 입문과정",
  },
  {
    title: "AI 서비스 기획 프로토타입",
    generation: "1기",
    course: "7H 워크숍",
  },
  {
    title: "노코드 웹앱 MVP",
    generation: "1기",
    course: "7H 워크숍",
  },
];

/* ====================================== */


const GallerySection = () => {
  return (
    <section className="sec sec--mist" id="gallery">
      <div className="wrap">

        <div className="sec__head">
          <span className="eyebrow">Gallery</span>
          <h2 className="h2">교육 갤러리</h2>

          <p className="lead">
            수료생들이 교육 중 직접 만든 결과물을 전시합니다.
          </p>
        </div>

        <div className="cards gallery__cards">
          {galleryItems.map((item, index) => (
            <GalleryCard
              key={index}
              {...item}
            />
          ))}
        </div>

      </div>
    </section>
  );
};


const GalleryCard = ({
  title,
  generation,
  course,
  award,
  image,
}: GalleryItem) => {
  return (
    <div className="card gallery__card">

      <div className="ph ph--4x3">
        {image ? (
          <img
            src={image}
            alt={title}
            className="gallery__image"
          />
        ) : (
          "결과물 이미지"
        )}
      </div>

      <div className="gallery__body">
        <h3>
          {title}
        </h3>

        <div className="gallery__meta">

          <span className="tag tag--ink">
            {generation}
          </span>

          {award && (
            <span className="tag tag--blue">
              {award}
            </span>
          )}

          <span className="tag">
            {course}
          </span>

        </div>
      </div>

    </div>
  );
};

export default GallerySection;