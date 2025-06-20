"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Users,
  TrendingUp,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/ui/animated-counter";
import { MarketEntrySuccessChart } from "@/components/MarketEntrySuccessChart"; // adjust path as needed


const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-fade-in-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden uzbek-pattern">

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge className="">
                   Connecting Uzbekistan to Global Markets
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                  Bridge Your
                  <span className="bg-clip-text drop-shadow-sm block">
                    Tech Business
                  </span>
                  to MEA Markets
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Empower your Uzbek software company to scale globally through
                  our curated marketplace and comprehensive market entry services
                  for Middle East and Africa.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/marketplace" passHref>
                  <Button
                    size="lg"
                    className="px-8 py-4 hover:">
                    Explore Marketplace
                    <ArrowRight className="" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="group px-8 py-4"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                {[150, 25, 95].map((val, i) => (
                  <div className="text-center" key={i}>
                    <div className="text-3xl font-bold text-primary">
                      <AnimatedCounter
                        end={val}
                        suffix={i === 1 ? "M+" : i === 2 ? "%" : "+"}
                      />
                    </div>
                    <div className="text-muted-foreground">
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
            <div className="animate-fade-in-up">
              <MarketEntrySuccessChart />
            </div>

          </div>

        </div>

      </section>

      {/* Add more themed sections below if needed */}

      <Footer />
    </div>
  );
};

export default Home;
