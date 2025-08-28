import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Brain,
  ExternalLink,
  LogIn,
  UserPlus,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="flex items-center gap-3">
    <div className="h-10 w-10 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0">
      <Icon className="h-5 w-5 text-pink-600" />
    </div>
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);
export default function Login() {
  return (
    <section className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
              <div className="h-12 w-12 rounded-full bg-pink-50 flex items-center justify-center">
                <LogIn className="h-6 w-6 text-pink-600" />
              </div>
            </div>
            <CardDescription className="text-base">
              Resume your career journey and access your personalized dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-pink-50 rounded-lg">
              <p className="text-slate-700 font-medium">
                Your progress awaits!
              </p>
              <p className="text-sm text-slate-600">
                Continue with your mentorship connections, skill development,
                and learning paths.
              </p>
            </div>
            <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 p-4 rounded-lg">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">
                Get Connected to new 1000+ professionals in your network
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              size="lg"
              className="w-full bg-pink-600 hover:bg-pink-700"
              asChild
            >
              <a
                href="https://gps.careerlink.ai/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center justify-center gap-2">
                  Sign In to Your Account
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">
                Create Account
              </CardTitle>
              <div className="h-12 w-12 rounded-full bg-pink-50 flex items-center justify-center">
                <UserPlus className="h-6 w-6 text-pink-600" />
              </div>
            </div>
            <CardDescription className="text-base">
              Start your professional journey with personalized resources
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FeatureItem
              icon={ArrowRight}
              title="Career Fast-Track"
              description="Accelerate your career with tailored guidance"
            />
            <FeatureItem
              icon={BookOpen}
              title="Skill Development"
              description="Access learning paths and skill development resources"
            />
            <FeatureItem
              icon={Brain}
              title="AI Learning Paths"
              description="Join the AI revolution with AI learning paths"
            />
          </CardContent>
          <CardFooter>
            <Button
              size="lg"
              className="w-full bg-pink-600 hover:bg-pink-700"
              asChild
            >
              <a
                href="https://gps.careerlink.ai/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Your Journey
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
