"use client";

import React from 'react';
import { useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/ui/animated-counter";
import { MarketEntrySuccessChart } from "@/components/MarketEntrySuccessChart";

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
      <section className="py-24 animate-fade-in-up">
        <div className="container px-4 mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center">The Problem</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-muted-foreground text-sm">
            <Card><CardContent className="p-6">💸 <strong>High Investment, Low Visibility:</strong> Uzbek tech products are growing, but lack global visibility.</CardContent></Card>
            <Card><CardContent className="p-6">🔍 <strong>Fragmented Ecosystem:</strong> No central database to showcase or track Uzbek tech globally.</CardContent></Card>
            <Card><CardContent className="p-6">🚫 <strong>Gaps in Execution:</strong> Many firms lack R&D, marketing know-how, and scalable sales strategies.</CardContent></Card>
            <Card><CardContent className="p-6">📉 <strong>Unscalable Sales Models:</strong> Market-entry attempts (e.g., KSA hires) fail to replicate across regions.</CardContent></Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-muted nimate-fade-in-up">
        <div className="container px-4 mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center">TechBridge: The Centralized Gateway</h2>
          <div className="grid md:grid-cols-2 gap-10 text-muted-foreground text-sm">
            <Card><CardContent className="p-6">🌍 <strong>Curated Marketplace:</strong> Multilingual vendor listings, verified Uzbek software, B2B-focused.</CardContent></Card>
            <Card><CardContent className="p-6">📞 <strong>Full Go-to-Market Support:</strong> Lead gen, demo booking, local sales reps in key MEA markets.</CardContent></Card>
            <Card><CardContent className="p-6">📊 <strong>Unified Market Intelligence:</strong> Track who sells what, where. Supports IT Park and investor insights.</CardContent></Card>
            <Card><CardContent className="p-6">🛠️ <strong>Shared Infrastructure:</strong> Sales playbooks, automation, CRM tools to support scale.</CardContent></Card>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 animate-fade-in-up">
        <div className="container px-4 mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Who We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            TechBridge supports any IT Park resident — especially Uzbek-built SaaS with global ambition.
            Our buyers include SMEs, governments, and resellers in MEA. We enable scaling via local partners.
          </p>
          <Button className="rounded-2xl cursor-pointer " variant="default" size="lg" asChild>
            <Link href="/contact">Join the Platform</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
