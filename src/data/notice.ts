export type Notice = {
  id: number;
  category: string;
  tagType?: "ink" | "blue";
  title: string;
  date: string;
  content: string;
};

export const notices: Notice[] = [
  {
    id: 1,
    category: "모집",
    tagType: "ink",
    title: "2026년 상반기 재직자 AI 교육 과정 모집 안내",
    date: "2026.01.05",
    content: `
2026년 상반기 재직자 AI 교육 과정 모집을 시작합니다.

교육 일정 및 신청 방법에 대한 자세한 내용은 추후 안내드리겠습니다.
    `,
  },
  {
    id: 2,
    category: "안내",
    tagType: "blue",
    title: "구름스퀘어 판교 대관 운영 시간 변경 안내",
    date: "2025.12.18",
    content: `
구름스퀘어 판교 대관 운영 시간이 변경됩니다.

이용에 참고해 주시기 바랍니다.
    `,
  },
  {
    id: 3,
    category: "행사",
    title: "COMMIT WORKSHOP 12월 세션 참가 신청 오픈",
    date: "2025.11.29",
    content: `
COMMIT WORKSHOP 12월 세션 참가 신청이 시작되었습니다.
    `,
  },
  {
    id: 4,
    category: "안내",
    tagType: "blue",
    title: "KHP 협약 기업 대상 무료 대관 절차 개편 안내",
    date: "2025.11.10",
    content: `
KHP 협약 기업 대상 무료 대관 절차가 개편되었습니다.

자세한 내용은 담당자에게 문의해 주세요.
    `,
  },
  {
    id: 5,
    category: "행사",
    title: "제주 구름스퀘어 오픈 기념 커뮤니티 밋업 후기",
    date: "2025.10.22",
    content: `
제주 구름스퀘어 오픈 기념 커뮤니티 밋업이 진행되었습니다.
    `,
  },
];