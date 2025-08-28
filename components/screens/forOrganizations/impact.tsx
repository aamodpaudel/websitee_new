interface StatProps {
  year: number;
  value: number;
  suffix: string;
  description: string;
  source: string;
}

const stats: StatProps[] = [
  {
    year: 2029,
    value: 80,
    suffix: "%",
    description: "of common customer service issues will be autonomously resolved by agentic AI, reducing operational costs by 30%",
    source: "Gartner"
  },
  {
    year: 2028,
    value: 33,
    suffix: "%",
    description: "of enterprise software applications will include agentic AI",
    source: "Gartner"
  },
  {
    year: 2028,
    value: 15,
    suffix: "%",
    description: "of day-to-day work decisions will be made by agentic AI",
    source: "Gartner"
  },
  {
    year: 2028,
    value: 75,
    suffix: "%",
    description: "of enterprise software engineers will use AI code assistants, up from less than 10% in early 2023",
    source: "Gartner"
  },
  {
    year: 2029,
    value: 10,
    suffix: "%",
    description: "of global boards will use AI guidance to challenge executive decisions that are material to their business",
    source: "Gartner"
  },
  {
    year: 2028,
    value: 40,
    suffix: "%",
    description: "of CIOs will demand guardian agents to autonomously track, oversee or contain AI agent actions",
    source: "Gartner"
  },
  {
    year: 2025,
    value: 25,
    suffix: "%",
    description: "of companies using gen AI will launch agentic AI pilots, growing to 50% in 2027",
    source: "Deloitte"
  }
];


const groupedStats = stats.reduce((acc, stat) => {
  if (!acc[stat.year]) {
    acc[stat.year] = [];
  }
  acc[stat.year].push(stat);
  return acc;
}, {} as Record<number, StatProps[]>);

const sortedYears = Object.keys(groupedStats).map(Number).sort();

export default function ImpactSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none md:p-2">
          The Future with <span className="text-pink-600">Agentic AI</span>
        </h2>
        <p className="text-muted-foreground md:text-xl py-2 md:mb-16 max-w-2xl mx-auto text-lg">
          Industry predictions show how agentic AI will transform organizations
          in the coming years
        </p>
      </div>
      <div className="space-y-16 relative">
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-amber-600/30 hidden md:block"></div>
        {sortedYears.map((year, yearIndex) => (
          <div
            key={year}
            className={`relative ${
              yearIndex % 2 === 0 ? "md:pl-[50%]" : "md:pr-[50%]"
            }`}
          >
            <div className="absolute left-[50%] top-0 transform -translate-x-1/2 hidden md:block">
              <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold shadow-sm">
                {year}
              </div>
            </div>

            <div
              className={`md:w-[90%] ${
                yearIndex % 2 === 0 ? "md:ml-12" : "md:mr-12"
              }`}
            >
              <div className="md:hidden mb-6">
                <span className="px-4 py-2 rounded-full bg-amber-600/60 text-white font-bold">
                  {year}
                </span>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm transition-all border border-amber-100">
                <div className="grid grid-cols-1 gap-8">
                  {groupedStats[year].map((stat, index) => (
                    <div key={index} className="flex md:items-center flex-col md:flex-row gap-6 group">
                      <div className="flex-shrink-0 bg-amber-50 p-4 rounded-xl border border-amber-100 group-hover:border-amber-200 transition-all">
                        <div className="text-4xl font-bold text-amber-600">
                          {stat.value}
                          {stat.suffix}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-slate-700 text-lg font-medium leading-tight">
                          {stat.description}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          Source: {stat.source}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
