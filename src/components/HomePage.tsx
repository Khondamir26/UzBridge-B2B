"use client";

import React from 'react';
import { useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  UsersRound,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/ui/animated-counter";
import { MarketEntrySuccessChart } from "@/components/MarketEntrySuccessChart";
import ProblemSolution from './ProblemSolution';
import Solutions from './Solutions';
import Testimonials from './Testimonials';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll(".animate-fade-in-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">

      {/* Hero Section */}
      <section ref={heroRef} className="bg-muted relative min-h-screen flex items-center justify-center overflow-hidden animate-fade-in-up">
        <div className="container mx-auto px-4 relative z-10 pt-10 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge >Connecting Uzbekistan to Global Markets</Badge>
                <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                  Zaytra.ai:
                  <span className="bg-clip-text drop-shadow-sm block">
                    Made in Uzbekistan. Built for the World.
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Empower your Uzbek software company to scale globally through
                  our curated marketplace and full go-to-market support across
                  MEA and beyond.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/marketplace" passHref>
                  <Button size="lg" className="px-4 py-4 w-full rounded-2xl cursor-pointer ">
                    Explore Marketplace
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className=" px-8 py-4 rounded-2xl cursor-pointer ">
                  <Play className=" w-5 h-5 group-hover:scale-110 transition-transform " />
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
                      {i === 0 ? "Uzbek Companies" : i === 1 ? "MEA Reach" : "Success Rate"}
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

      {/* Problem Section */}
      <ProblemSolution />
      {/* Solution Section  */}
      <Solutions />
      {/* Testimonials */}
      <Testimonials />
      {/* Who We Serve */}
      <section className="py-24 animate-fade-in-up bg-muted">
        <div className="container px-4 mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold">Ready to Grow?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Build your visibility engine — or start selling globally.
            Join thousands of SaaS companies accelerating their growth with Zaytra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
              <Button variant="default" size="lg" className="px-4 py-4 w-full rounded-full cursor-pointer ">
                <UsersRound className="w-5 h-5" />
                Apply as a Zaytra Client
              </Button>
            </Link>
            <Button variant="outline" size="lg" className=" px-4 py-4 rounded-full cursor-pointer ">
              <Zap className=" w-5 h-5 group-hover:scale-110 transition-transform " />
              Apply as a Vendor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
