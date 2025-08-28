import CareerCircleGPSHelp from "@/components/screens/aitraining/careerCircleHelps";
import FeaturedGroups from "@/components/screens/aitraining/featuredCareerCircles";
import Herosection from "@/components/screens/aitraining/herosection";
import CareerCirclePromo from "@/components/screens/careerCirclePromo";

export default function CareerCircle() {
  return (
    <>
      <Herosection />
      <FeaturedGroups />
      <CareerCircleGPSHelp />
      <CareerCirclePromo />
    </>
  );
}
