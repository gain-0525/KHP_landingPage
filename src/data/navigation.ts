import type { NavigationItem } from "../types/navigation";

export const navigation: NavigationItem[] = [
  {
    label: "사업소개",
    path: "/about",
    children: [
      { label: "K-하이테크 플랫폼", path: "/about#khp" },
      { label: "구름 소개", path: "/about#goorm" },
      { label: "오시는 길", path: "/about#location" },
    ],
  },
  {
    label: "교육훈련",
    path: "/programs",
    children: [
      { label: "2026 강좌", path: "/programs#courses" },
      { label: "지난 강좌", path: "/programs#past" },
      { label: "AI 세미나", path: "/programs#commit" },
    ],
  },
  {
    label: "장소대관",
    path: "/space",
    children: [
      { label: "공간 소개", path: "/space#space" },
      { label: "이용 안내", path: "/space#guide" },
      { label: "예약", path: "/space#booking" },
    ],
  },
  {
    label: "커뮤니티",
    path: "/community",
    children: [
      { label: "공지사항", path: "/community#notice" },
      { label: "교육 갤러리", path: "/community#gallery" },
      { label: "수강후기", path: "/community#reviews" },
    ],
  },
  {
    label: "문의하기",
    path: "/contact",
  },
];