"use client";

import BusinessGPSPromo from "@/components/screens/businessPromo";
import Organizations from "@/components/screens/getstarted/Organizations";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 md:px-6">
        <section className="py-12 md:py-16" id="communities">
          <div className="max-w-4xl mx-auto text-center space-y-4 ">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-amber-50">
              <span className="text-sm font-medium text-amber-600">
                Your Professional Growth Platform
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Organization <span className="text-pink-600">Portal</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Portal to access resources and tools specific to your organization
            </p>
          </div>
        </section>
        <Organizations />
        <BusinessGPSPromo />
      </main>
    </div>
  );
}
