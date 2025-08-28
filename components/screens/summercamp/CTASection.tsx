import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Users, DollarSign } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Secure Your AI Future Today
        </h2>
        <p className="text-xl mb-12 text-purple-100">
          Limited to just 10 students to ensure personalized attention. Applications close July 29, 2025.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <Users className="w-8 h-8 text-pink-300 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-pink-100 mb-2">7 Spots Remaining</h3>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <DollarSign className="w-8 h-8 text-pink-300 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-pink-100 mb-2">$800</h3>
            <p className="text-purple-100">All-Inclusive Fee</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <Clock className="w-8 h-8 text-pink-300 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-pink-100 mb-2">30+</h3>
            <p className="text-purple-100">Hours of Learning</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="https://gps.careerlink.ai/circle/learn-essential-ai-skills-summer-course-targeted-to-high-school-students-833933b32c" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-4">
              Apply Now - Limited Spaces Available
            </Button>
          </a>
        </div>
        
        <p className="text-purple-200">
          Applications close July 29, 2025 • No application fee
        </p>
      </div>
    </section>
  );
};

export default CTASection;
