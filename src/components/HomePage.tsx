"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Star,
  Users,
  TrendingUp,
  Globe,
  Building2,
  Zap,
  Shield,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/ui/animated-counter";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden uzbek-pattern"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                  🚀 Connecting Uzbekistan to Global Markets
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Bridge Your
                  <span className="gradient-text block">Tech Business</span>
                  to MEA Markets
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Empower your Uzbek software company to scale globally through
                  our curated marketplace and comprehensive market entry services
                  for Middle East and Africa.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/marketplace" passHref>
                  <Button size="lg" className="bg-gradient-uzbek group px-8 py-4">
                    Explore Marketplace
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="group px-8 py-4">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                {[150, 25, 95].map((val, i) => (
                  <div className="text-center" key={i}>
                    <div className="text-3xl font-bold text-primary-500">
                      <AnimatedCounter end={val} suffix={i === 1 ? "M+" : i === 2 ? "%" : "+"} />
                    </div>
                    <div className="text-gray-600">
                      {i === 0
                        ? "Uzbek Companies"
                        : i === 1
                        ? "MEA Reach"
                        : "Success Rate"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-up">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                  alt="Global connectivity"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center animate-pulse-glow">
                  <Globe className="w-12 h-12 text-white animate-spin-slow" />
                </div>
              </div>

              <div className="absolute -left-8 top-1/4 animate-float">
                <Card className="p-4 bg-white shadow-lg">
                  <CardContent className="p-0 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Revenue Growth</div>
                      <div className="text-sm text-gray-500">+240% YoY</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div
                className="absolute -right-8 bottom-1/4 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Card className="p-4 bg-white shadow-lg">
                  <CardContent className="p-0 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">New Clients</div>
                      <div className="text-sm text-gray-500">500+ Monthly</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More sections here (features, testimonials, etc) */}

      <Footer />
    </div>
  );
};

export default Home;
