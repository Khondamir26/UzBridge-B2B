"use client"

import { useEffect } from "react";
import { Check, Video, ArrowRight, Megaphone, Users, TrendingUp, MessageSquare, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Footer from '@/components/Footer';
import Link from 'next/link';



const Services = () => {


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

  const startupsPackages = [
    {
      name: "LaunchPad",
      price: "$250",
      period: "/month",
      description: "Essentials to launch in MEA",
      popular: false,
      features: [
        "4 posts on 1 platform",
        "1 blog & image design",
        "Case study + newsletter",
        "Monthly summary + event access"
      ]
    },
    {
      name: "Growth",
      price: "$750",
      period: "/month",
      description: "Faster Growth via Media",
      popular: true,
      features: [
        "8 posts on 2 platforms",
        "2 blogs + 1 video/graphic",
        "Bi-weekly report, 3 case studies",
        "Media pitch + onboarding support"
      ]
    },
    {
      name: "Pro Package",
      price: "$1,500",
      period: "/month",
      description: "All-in-one for scaling visibility",
      popular: false,
      features: [
        "12 posts on 3 platforms",
        "4 premium content pieces",
        "Weekly insights + competitor check",
        "Case study, interviews, onboarding"
      ]
    }
  ];


  const businessPackages = [
    {
      name: "Market Ready",
      price: "$1,000",
      period: "/month",
      description: "Get set for MEA expansion",
      popular: false,
      features: [
        "12 posts on 2 platforms",
        "2 blogs + visuals",
        "KPI dashboards + case study",
        "Interview & newsletter feature"
      ]
    },
    {
      name: "Regional Reach",
      price: "$2,500",
      period: "/month",
      description: "Full regional visibility + outreach",
      popular: true,
      features: [
        "16 posts + mod (3 platforms)",
        "4 premium assets",
        "2 interviews + 2 platform outreach",
        "Landing page + account manager"
      ]
    },
    {
      name: "Global Play",
      price: "$4,500",
      period: "/month",
      description: "Dominate across MEA & beyond",
      popular: false,
      features: [
        "Full coverage + paid ad mgmt",
        "6 content pieces (localized)",
        "2 case studies + press release",
        "Booth support + brand manager"
      ]
    }
  ];


  const addOnServices = [
    {
      name: "Video\nProduction",
      price: "From $500",
      description: "Professional video\ncreation",
      icon: Video
    },
    {
      name: "Event Representation",
      price: "From $1,000",
      description: "Booth & networking\nat events",
      icon: Users
    },
    {
      name: "Ad Campaign Setup",
      price: "From $350",
      description: "Targeted ad\nlaunch + setup",
      icon: Megaphone
    },
    {
      name: "Arabic Localization",
      price: "$200/page",
      description: "Native translation & adaptation",
      icon: Globe
    }
  ];




  return (
    <div className="min-h-screen bg-background ">

      {/* Header */}
      <section className="pt-24 pb-16 bg-muted animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Link className="inline-flex items-center justify-center gap-1 px-2 py-0.5 text-xs font-medium whitespace-nowrap w-fit 
                        rounded-full border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer hover-lift transition-transform duration-200 " href="/services" >
              Professional Services
              <ArrowRight className="w-3 h-3" />
            </Link>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Market Entry <span className="">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive packages designed to help Uzbek tech companies successfully
              enter and thrive in Middle Eastern and African markets.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="startups" className="w-full">
            <div className="text-center mb-12">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-muted">
                <TabsTrigger
                  value="startups"
                  className="data-[state=active]:bg-primary 
                  data-[state=active]:text-white 
                  dark:data-[state=active]:bg-white 
                  dark:data-[state=active]:text-black 
                  text-muted-foreground cursor-pointer"
                >
                  <Users className="w-4 h-4 mr-2 " />
                  Startups
                </TabsTrigger>

                <TabsTrigger
                  value="business"
                  className="data-[state=active]:bg-primary 
                  data-[state=active]:text-white 
                  dark:data-[state=active]:bg-white 
                  dark:data-[state=active]:text-black 
                  text-muted-foreground cursor-pointer"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Established Business
                </TabsTrigger>


              </TabsList>
            </div>

            {/* Startups Packages */}
            <TabsContent value="startups" className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Startup Market Entry Packages</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground ">
                  Perfect for startups and tech companies looking for visibility and export opportunities in MEA markets.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {startupsPackages.map((pkg, index) => (
                  <Card key={index} className={`relative hover-lift ${pkg.popular ? 'ring-2 ring-accent/ border-accent shadow-sm' : ''}`}>
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className=" px-4 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center space-y-4 p-8">
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <p className="text-muted-foreground">{pkg.description}</p>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-primary-500">
                          {pkg.price}
                        </div>
                        <div className="text-muted-foreground">{pkg.period}</div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-8 pt-0 space-y-6 items-center gap-1 cursor-pointer">
                      <div className="space-y-3">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button variant="default"
                        className={`w-full transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer `}
                      >
                        Get Started
                        <ArrowRight className="transition-transform group-hover:translate-x-1 w-4 h-4" />
                      </Button>

                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Business Packages */}
            <TabsContent value="business" className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Enterprise Market Entry Packages</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  For SMEs, exporters, and scaleups entering or expanding in MEA with aggressive market goals.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {businessPackages.map((pkg, index) => (
                  <Card key={index} className={`relative hover-lift ${pkg.popular ? 'ring-2 ring-accent/ border-accent shadow-sm' : ''}`}>
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className=" px-4 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center space-y-4 p-8">
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <p className="text-muted-foreground">{pkg.description}</p>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-primary-500">
                          {pkg.price}
                        </div>
                        <div className="text-muted-foreground">{pkg.period}</div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-8 pt-0 space-y-6">
                      <div className="space-y-3">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button variant="default"
                        className={`w-full cursor-pointer `}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-16 bg-muted animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Custom Add-on Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enhance your package with specialized services tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <Card key={index} className="hover-lift text-center p-6 cursor-default">
                <CardContent className="flex flex-col flex-1 justify-between items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/100 shadow-md">
                    <service.icon className="w-6 h-6 " />
                  </div>

                  <div className=" flex-1 flex flex-col justify-between space-y-2">
                    <h3 className="font-semibold whitespace-pre-line ">{service.name}</h3>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{service.description}</p>
                  </div>

                  <div className="text-lg font-bold tracking-wide leading-relaxed text-primary">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Our Proven Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How we help you successfully enter MEA markets in 4 simple steps.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Market Analysis",
                description: "Deep dive into your target MEA markets and opportunities",
                icon: Globe
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Create customized go-to-market strategy with localization plan",
                icon: TrendingUp
              },
              {
                step: "03",
                title: "Content & Campaigns",
                description: "Launch targeted marketing campaigns with localized content",
                icon: MessageSquare
              },
              {
                step: "04",
                title: "Sales & Support",
                description: "Dedicated sales representation and ongoing market support",
                icon: Users
              }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <process.icon className="w-10 h-10 " />
                </div>
                <div className="text-2xl font-bold text-primary-500">{process.step}</div>
                <h3 className="text-xl font-semibold">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted animate-fade-in-up">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl text-primary font-bold tracking-wide">
              Ready to Enter MEA Markets?
            </h2>
            <p className="text-xl ">
              Schedule a free consultation to discuss your market entry strategy and find the perfect package for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" size="lg" className=" transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer ring-2 ring-accent/ ">
                Download Service Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};



export default Services;

