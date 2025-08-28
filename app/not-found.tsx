import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[100dvh] bg-background">
      <div className="max-w-md text-center px-4">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="text-8xl font-bold text-pink-600/10">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertCircle className="h-16 w-16 text-pink-600" />
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tight mb-2 text-pink-600">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700">
            <Link href="/">
              <Home className="mr-2 h-4 w-4 " />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
