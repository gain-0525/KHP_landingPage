import { useState, useEffect, useRef } from "react";

import "./ResultSection.css";

const stats = [
  {
    label: "평균 교육 만족도",
    value: 95,
    unit: "%",
    note: "수료생 설문 기준",
  },
  {
    label: "동료 · 지인 추천 의향",
    value: 96,
    unit: "%",
    note: "추천 의향 있음 응답 비율",
  },
  {
    label: "누적 수료 인원",
    value: 10000,
    unit: "명",
    note: "전체 과정 누계",
  },
  {
    label: "협약 기업",
    value: 300,
    unit: "개사",
    note: "누적 협약 체결 기준",
  },
];

const partnerLogos = [
  "기업 로고 01",
  "기업 로고 02",
  "기업 로고 03",
  "기업 로고 04",
  "기업 로고 05",
  "기업 로고 06",
  "기업 로고 07",
  "기업 로고 08",
];

const partnerLogosSecond = [
  "기업 로고 09",
  "기업 로고 10",
  "기업 로고 11",
  "기업 로고 12",
  "기업 로고 13",
  "기업 로고 14",
  "기업 로고 15",
  "기업 로고 16",
];

interface CountUpProps {
  to: number;
  duration?: number;
}

const CountUp = ({ to, duration = 1200 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;

        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          // 처음에는 천천히 → 중간 빠르게 → 끝에서 부드럽게
          const eased = 1 - Math.pow(1 - progress, 3);

          setCount(Math.floor(to * eased));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(to);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className="num">
      {count.toLocaleString()}
    </span>
  );
};

const ResultsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setItemsPerView(1);
      } else if (window.innerWidth <= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxIndex = stats.length - itemsPerView;

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section className="sec" id="results">
      <div className="wrap">
        <div className="sec__head">
          <span className="eyebrow">Results</span>

          <h2 className="h2">숫자로 검증된 성과</h2>

          <p className="lead">
            수료 직후 설문과 3개월 후 활용도 조사를 함께 집계합니다.
          </p>
        </div>

        {/* 성과 슬라이더 */}
        <div className="statwrap">
          <div className="statslide">
            <div className="statslide__view">
              <div
                className="statslide__track"
                style={{
                  transform: `translateX(calc(-${currentIndex} * ((100% - ${(itemsPerView - 1) * 20}px) / ${itemsPerView} + 20px)))`,
                }}
              >
                {stats.map((stat) => (
                  <div className="stat" key={stat.label}>
                    <div className="stat__k">
                      {stat.label}
                    </div>

                    <div className="stat__v">
                      <CountUp to={stat.value} />
                      <small>{stat.unit}</small>
                    </div>

                    <p className="stat__note">
                      {stat.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 슬라이더 컨트롤 */}
            <div className="slider__nav">
              <div
                className="dots"
                aria-label="성과 선택"
              >
                {Array.from({ length: maxIndex + 1 }).map(
                  (_, index) => (
                    <button
                      type="button"
                      key={index}
                      aria-label={`${index + 1}번째 성과 보기`}
                      aria-current={
                        currentIndex === index
                          ? "true"
                          : "false"
                      }
                      onClick={() => setCurrentIndex(index)}
                    />
                  )
                )}
              </div>

              <div className="arrows">
                <button
                  type="button"
                  className="arrow"
                  aria-label="이전"
                  disabled={currentIndex === 0}
                  onClick={handlePrev}
                >
                  ←
                </button>

                <button
                  type="button"
                  className="arrow"
                  aria-label="다음"
                  disabled={currentIndex === maxIndex}
                  onClick={handleNext}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 협력 기업 */}
        <div className="partners">
          <h3 className="partners__t">
            함께한 협력 기업
          </h3>

          <p className="partners__d">
            제조 · 서비스 · 공공까지, 다양한 산업의 재직자가
            함께했습니다.
          </p>
        </div>
      </div>

      {/* 기업 로고 */}
      <div className="marquee__mask partners__flow">
        <ul className="marquee__track">
          {[...partnerLogos, ...partnerLogos].map(
            (logo, index) => (
              <li key={`${logo}-${index}`}>
                {logo}
              </li>
            )
          )}
        </ul>

        <ul className="marquee__track marquee__track--rev">
          {[...partnerLogosSecond, ...partnerLogosSecond].map(
            (logo, index) => (
              <li key={`${logo}-${index}`}>
                {logo}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default ResultsSection;