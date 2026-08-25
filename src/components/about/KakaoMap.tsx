import { useEffect, useRef } from "react";

interface KakaoMapProps {
  lat: number;
  lng: number;
}

const KakaoMap = ({ lat, lng }: KakaoMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(
  "키 존재 여부:",
  !!import.meta.env.VITE_KAKAO_MAP_KEY
);

    const loadMap = () => {
      if (!window.kakao || !mapRef.current) {
        console.log("카카오맵 객체 없음");
        return;
      }

      window.kakao.maps.load(() => {
        if (!mapRef.current) return;

        const position = new window.kakao.maps.LatLng(lat, lng);

        const map = new window.kakao.maps.Map(mapRef.current, {
          center: position,
          level: 3,
        });

        new window.kakao.maps.Marker({
          map,
          position,
        });
      });
    };

    const existingScript = document.getElementById("kakao-map-sdk");

    if (existingScript) {
      loadMap();
      return;
    }

    const script = document.createElement("script");

    script.id = "kakao-map-sdk";
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_MAP_KEY
    }&autoload=false`;

    script.async = true;

    script.onload = () => {
      console.log("카카오 SDK 로드 성공");
      loadMap();
    };

    script.onerror = () => {
      console.error("카카오 SDK 로드 실패");
    };

    document.head.appendChild(script);
  }, [lat, lng]);

  return <div ref={mapRef} className="kakao-map" />;
};

export default KakaoMap;