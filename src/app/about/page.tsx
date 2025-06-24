"use client";
import ceo from "@/img/ceo.png";
import cto from "@/img/cto.png";
import munir from "@/img/munir.png";
import tawney from "@/img/tawney.png";
import { useRef, useEffect } from "react";

import React from "react";
import {
  Lightbulb,
  Handshake,
  Star,
  ArrowRight,
  Award,
  Users,
  Globe,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/ui/animated-counter";
import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Muzaffar Karabaev",
    role: "CEO & Founder",
    image: ceo,
    bio: "Serial entrepreneur, founder of Wing, Zip.24, Le Bazaar, and kpi.com — scaled multiple startups into global successes.",
  },
  {
    name: "Tawney Kruger",
    role: "Chief Growth Officer",
    image: tawney,
    bio: "4+ years in media and marketing, driving growth, partnerships, and brand strategy as Head of Growth at kpi.com.",
  },
  {
    name: "Fakhriddin Taslimov",
    role: "Chief Tech Officer",
    image: cto,
    bio: "Java expert driving innovation, with 5+ years shaping kpi.com’s tech strategy and leading seamless product development.",
  },
  {
    name: "Munir Yam",
    role: " Product Owner",
    image: munir,
    bio: "A key team member at kpi.com, leveraging deep system knowledge to drive product development and align features with user needs for maximum value.",
  },
];

const milestones = [
  {
    year: "2023",
    event: "UzBridge founded with vision to connect Uzbek tech to global markets",
  },
  {
    year: "2023",
    event: "First 25 Uzbek companies onboarded to marketplace",
  },
  {
    year: "2024",
    event: "Expanded to 8 MEA countries, 150+ partner companies",
  },
  {
    year: "2024",
    event: "Launched comprehensive CRM platform for clients",
  },
  {
    year: "2024",
    event: "Facilitated $50M+ in business deals across region",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We believe in the power of technology to transform businesses and communities.",
    icon: Lightbulb,
  },
  {
    title: "Partnership",
    description:
      "Success comes from genuine collaboration and shared growth.",
    icon: Handshake,
  },
  {
    title: "Excellence",
    description:
      "We maintain the highest standards in everything we deliver to our partners.",
    icon: Star,
  },
  {
    title: "Cultural Bridge",
    description:
      "We understand and respect the diverse cultures we work with across regions.",
    icon: Globe,
  },
];

const About = () => {
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-10 pb-16 bg-muted animate-fade-in-up">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Link className="inline-flex items-center justify-center gap-1 px-2 py-0.5 text-xs font-medium whitespace-nowrap w-fit 
            rounded-full border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer" href="/about" >
              About UzBridge
              <ArrowRight className="w-3 h-3" />
            </Link>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Bridging Innovation
              <span className="block bg-clip-text">
                Across Continents
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We&apos;re on a mission to empower Uzbek tech companies to scale globally by providing
              comprehensive market entry solutions for the Middle East and African markets.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <Stat label="Partner Companies" value={150} suffix="+" />
              <Stat label="MEA Countries" value={8} />
              <Stat label="Deal Value" value={50} suffix="M+" />
            </div>
          </div>

          <div className="relative w-full h-auto">
            <Image
              src="https://dissingweitling.com/assets/upload/_landscape1200/DissingWeitling_Longmen-Bridge_render_overview_west.jpg"
              alt="Team collaboration"
              width={600}
              height={500}
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />

            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 " />
                <div>
                  <div className="font-semibold">Regional Excellence</div>
                  <div className="text-sm text-muted-foreground">MEA Business Award 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 animate-fade-in-up">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
          <InfoCard icon={<TrendingUp className=" w-8 h-8" />} title="Our Mission">
            To empower Uzbek tech companies to scale globally through a curated marketplace,
            entry support, and enablement services tailored for MEA markets.
          </InfoCard>
          <InfoCard icon={<Globe className=" w-8 h-8" />} title="Our Vision">
            To become the bridge between Uzbek software providers and MEA regions, fostering innovation and prosperity.
          </InfoCard>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted animate-fade-in-up">
        <div className="container mx-auto px-4">
          <SectionHeader title="Meet Our Team" subtitle="40+ expert team in Tashkent drives innovation, seamless product development, and top-tier global support." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m, i) => (
              <Card key={i} className="text-center shadow-md">
                <CardContent className="p-6 space-y-4">
                  <Image
                    src={m.image}
                    alt={m.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg tracking-wide">{m.name}</h3>
                    <p className="p-2 text-primary text-sm font-medium">{m.role}</p>
                    <p className="text-muted-foreground text-medium italic ">{m.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <SectionHeader title="Our Journey" subtitle="Milestones of connecting Uzbek innovation to the world." />
          <div className="space-y-8 max-w-4xl mx-auto">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-4 items-center ">
                <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold tracking-wide">
                  {m.year}
                </div>
                <div className="bg-card p-6 rounded-lg shadow w-full ring-2 ring-accent/">
                  <p className="">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted animate-fade-in-up">
        <div className="container mx-auto px-4">
          <SectionHeader title="Our Values" subtitle="What guides UzBridge every day." />
          <div className="grid lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-background/80 shadow-md">
                  <val.icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-lg">{val.title}</h4>
                <p className="text-muted-foreground text-sm">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 animate-fade-in-up">
        <div className="container mx-auto px-4 text-center space-y-6 max-w-2xl">
          <h2 className="text-4xl font-bold">Ready to Join Our Success Story?</h2>
          <p className="text-lg">
            Whether you&apos;re a Uzbek tech company looking to expand or a MEA business seeking innovative solutions,
            let&apos;s build something amazing together.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button variant="default" className="cursor-pointer">
              Partner With Us <ArrowRight className=" w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary cursor-pointer">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Stat = ({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) => (
  <div className="text-center">
    <div className="text-3xl font-bold text-primary">
      <AnimatedCounter end={value} suffix={suffix} />
    </div>
    <div className="text-muted-foreground text-sm">{label}</div>
  </div>
);

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <Card className="p-8 shadow-md">
    <CardContent className="space-y-6">
      <div className="w-12 h-12 rounded-xl bg-uzbek-gradient flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-base leading-relaxed">{children}</p>
      </div>
    </CardContent>
  </Card>
);

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center space-y-2 mb-12">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

export default About;