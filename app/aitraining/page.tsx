import AICircleHelp from "@/components/screens/aicircle/aicirclehelp";
import AICircleWork from "@/components/screens/aicircle/aicircleWorks";
import BrowseCategories from "@/components/screens/aicircle/BrowseCategories";
import HeroSection from "@/components/screens/aicircle/herosection";
import RequestCircleBanner from "@/components/screens/aitraining/request-circle-banner";
import CareerCirclePromo from "@/components/screens/careerCirclePromo";
import FeaturedGroups from "@/components/screens/featuredGroup";

export default function CareerCircle() {
  
  return (
    <>
      <HeroSection />
      <FeaturedGroups domain_type="community" group_type="circle" />
      <RequestCircleBanner/>
      <BrowseCategories />
      <AICircleHelp />
      <AICircleWork />
      <CareerCirclePromo />
    </>
  );
}
