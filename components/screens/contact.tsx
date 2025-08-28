"use client";

import type React from "react";

import { useState } from "react";
import { Loader, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { submitContactForm } from "@/services/api/postService";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    submitContactForm(formData)
      .then(() => {
        toast("Message sent!", {
          description: "We'll get back to you as soon as possible.",
        });
        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        toast("Error", {
          description: "Something went wrong. Please try again later." + error,
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section
      className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-b from-background to-muted/30"
      id="contact"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Get In <span className="text-pink-600">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Have questions? We&apos;d love to hear from you.
          </p>
        </div>

        <Card className="mx-auto max-w-xl shadow-lg border-muted/40">
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="resize-none transition-all duration-200"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader className="animate-spin h-4 w-4" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message <Send className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
