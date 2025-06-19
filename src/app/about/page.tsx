"use client";

import React from 'react';
import { ArrowRight, Award, Users, Globe, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/ui/animated-counter';

const About = () => {
  const team = [
    {
      name: "Akmal Nazarov",
      role: "CEO & Founder",
      image: "photo-1472099645785-5658abf4ff4e",
      bio: "15+ years in international business development and tech industry"
    },
    {
      name: "Dilnoza Karimova",
      role: "Head of Marketing",
      image: "photo-1494790108755-2616b332e234",
      bio: "Expert in MEA market dynamics and digital marketing strategies"
    },
    {
      name: "Bobur Tashmatov",
      role: "Technical Director",
      image: "photo-1507003211169-0a1dd7228f2d",
      bio: "Former CTO at leading Uzbek tech companies, platform architect"
    },
    {
      name: "Gulnara Al-Rashid",
      role: "Regional Manager - MEA",
      image: "photo-1438761681033-6461ffad8d80",
      bio: "Based in Dubai, 10+ years of experience in regional partnerships"
    }
  ];

  const milestones = [
    { year: "2023", event: "UzBridge founded with vision to connect Uzbek tech to global markets" },
    { year: "2023", event: "First 25 Uzbek companies onboarded to marketplace" },
    { year: "2024", event: "Expanded to 8 MEA countries, 150+ partner companies" },
    { year: "2024", event: "Launched comprehensive CRM platform for clients" },
    { year: "2024", event: "Facilitated $50M+ in business deals across region" }
  ];

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary-50 text-primary-500 border-primary-200">
                  About UzBridge
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Bridging Innovation
                  <span className="gradient-text block">Across Continents</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We're on a mission to empower Uzbek tech companies to scale globally by providing
                  comprehensive market entry solutions for the Middle East and African markets.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">
                    <AnimatedCounter end={150} suffix="+" />
                  </div>
                  <div className="text-gray-600 text-sm">Partner Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">
                    <AnimatedCounter end={8} />
                  </div>
                  <div className="text-gray-600 text-sm">MEA Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">
                    <AnimatedCounter end={50} suffix="M+" />
                  </div>
                  <div className="text-gray-600 text-sm">Deal Value</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-accent" />
                  <div>
                    <div className="font-semibold">Regional Excellence</div>
                    <div className="text-sm text-gray-600">MEA Business Award 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-uzbek rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To empower Uzbek tech companies to scale globally by offering a curated marketplace,
                    market entry support, and sales enablement services specifically designed for
                    Middle Eastern and African markets.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-uzbek rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To become the leading bridge between Uzbek B2B software providers and high-growth
                    markets in the Middle East and Africa, fostering technological innovation and
                    economic prosperity across regions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team combines deep technical expertise with extensive regional market knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover-lift border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <img
                    src={`https://images.unsplash.com/${member.image}?w=150&h=150&fit=crop&crop=face`}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary-500 font-medium">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones in building the bridge between Uzbek innovation and global markets.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-uzbek rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover-lift">
                    <p className="text-gray-700 leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at UzBridge.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "We believe in the power of technology to transform businesses and communities."
              },
              {
                title: "Partnership",
                description: "Success comes through genuine collaboration and mutual growth with our clients."
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards in everything we deliver to our partners."
              },
              {
                title: "Cultural Bridge",
                description: "We understand and respect the diverse cultures we work with across regions."
              }
            ].map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-uzbek rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready to Join Our Success Story?
            </h2>
            <p className="text-xl text-white/90">
              Whether you're a Uzbek tech company looking to expand or a MEA business seeking innovative solutions,
              let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-500 hover:bg-gray-100">
                Partner With Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-500">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
