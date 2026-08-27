import { useLocation } from "react-router-dom"
import NoticeSection from "../components/community/NoticeSection";
import GallerySection from "../components/community/GallerySection";
import ReviewSection from "../components/community/ReviewSection";
import CommunityHero from "../components/community/CommunityHero";

const CommunityPage = () => {

    const location = useLocation();

    const activeSection = location.hash || "#notice";
    return (
        <>
        <CommunityHero activeSection={activeSection} />
        <NoticeSection />
        <GallerySection />
        <ReviewSection />
        </>
    );
};

export default CommunityPage;