import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type BannerProps = {
  onClose: () => void;
  onClick: () => void;
  title: string;
  subtitle: string;
};

const Banner: React.FC<BannerProps> = ({
  onClose,
  onClick,
  title,
  subtitle,
}) => {
  return (
    <div
      className="block md:absolute md:top-[12vh] md:left-1/2 md:transform md:-translate-x-1/2 z-50 rounded-2xl text-white py-3 px-4 cursor-pointer transition-all duration-300 w-[95%] max-w-5xl shadow-lg relative"
      style={{
        background: 'linear-gradient(to right, #db2777, #ec4899, #db2777)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'linear-gradient(to right, #ec4899, #f472b6, #ec4899)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'linear-gradient(to right, #db2777, #ec4899, #db2777)';
      }}
      onClick={onClick}
    >
      {/* Close button for mobile - positioned absolutely */}
      <Button
        variant="ghost"
        size="sm"
        className="text-white hover:bg-white/20 p-1 absolute top-2 right-2 z-10 md:hidden"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <X className="h-4 w-4" />
      </Button>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-6">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 w-full">
          <div className="flex items-center gap-3">
            <button className="bg-white border border-gray-200 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow flex-shrink-0">
              <span className="text-[#db2777] text-lg md:text-2xl font-bold">!</span>
            </button>
            <Button
              variant="secondary"
              size="sm"
              className="bg-white text-pink-600 hover:bg-gray-100 font-semibold md:hidden rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                window.open('https://gps.careerlink.ai/circle/prompt-engineering-everyday-ai-skills-for-the-modern-workplace-1d3a0f5092', '_blank');
              }}
            >
              Enroll Fast
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
          <div className="hidden md:block">
            <div>
              <h3 className="font-bold text-lg">Circle Running Soon</h3>
              <p className="text-yellow-200 font-medium text-sm mt-1">Prompt Engineering: Everyday AI Skills for the Modern Workplace</p>
            </div>
          </div>

          <div className="md:hidden">
            <div>
              <h3 className="font-bold text-sm leading-tight">Circle Running Soon</h3>
              <p className="text-yellow-200 font-medium text-xs mt-1">Prompt Engineering: Everyday AI Skills for the Modern Workplace</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 self-end md:self-auto">
          <Button
            variant="secondary"
            size="sm"
            className="bg-white text-pink-600 hover:bg-gray-100 font-semibold hidden md:inline-flex"
            onClick={(e) => {
              e.stopPropagation();
              window.open('https://gps.careerlink.ai/circle/prompt-engineering-everyday-ai-skills-for-the-modern-workplace-1d3a0f5092', '_blank');
            }}
          >
            Enroll Fast
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 p-1 hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
