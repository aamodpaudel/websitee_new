import { Search, Users, Lightbulb, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RequestCircleBanner() {
  return (
    <section
      className="bg-pink-50 py-12 rounded-2xl"
      id="request-circle-banner"
    >
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-pink-200 shadow-lg">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="p-3 bg-pink-100 rounded-full">
                  <Search className="h-6 w-6 text-pink-600" />
                </div>
                <div className="p-3 bg-pink-100 rounded-full">
                  <Users className="h-6 w-6 text-pink-600" />
                </div>
                <div className="p-3 bg-pink-100 rounded-full">
                  <Lightbulb className="h-6 w-6 text-pink-600" />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Can&apos;t Find the Perfect Circle?
              </h2>

              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                No worries! We&apos;re constantly growing our community based on
                member needs. If there&apos;s no circle that matches your
                interests, goals, or career stage, let us know what you&apos;re
                looking for.
              </p>

              <p className="text-sm text-gray-500 mt-4">
                We review all requests and aim to respond within 48 hours
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="text-center mt-8">
        <Link href="/apply-aitraining">
          <Button
            size="lg"
            className="text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 bg-pink-600 hover:bg-pink-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Request for AI Training
          </Button>
        </Link>
      </div>
    </section>
  );
}
