import React from "react";
import { Card, CardContent } from "./ui/card";
import { ArrowRight } from "lucide-react";

type CardWithIconItem = {
  icon: React.ElementType;
  title: string;
  description: string;
  learnmore?: string;
};

export default function CardWithIcon({ items }: { items: CardWithIconItem[] }) {
  return (
    <>
      {items.map((item, index) => (
        <Card key={index} className="bg-white border-0 shadow-sm">
          <CardContent className="px-6 flex flex-col items-start space-y-4">
            <div className="p-2 rounded-full bg-pink-100">
              <item.icon className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
            {item.learnmore && (
              <a
                href={item.learnmore}
                className="flex items-center mt-auto  text-pink-600 hover:text-pink-700"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            )}
          </CardContent>
        </Card>
      ))}
    </>
  );
}
