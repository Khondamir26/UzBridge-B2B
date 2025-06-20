"use client"

import React from 'react';
import { Check, ArrowRight, Zap, Users, TrendingUp, MessageSquare, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Footer from '@/components/Footer';

const Services = () => {
  const startupsPackages = [
    {
      name: "LaunchPad",
      price: "$250",
      period: "per month",
      description: "Perfect for startups entering MEA markets",
      popular: false,
      features: [
        "1 platform (LinkedIn or META), 4 posts/month",
        "1 blog/article per month",
        "Post image creation",
        "Monthly summary report",
        "1 case study",
        "Newsletter feature",
        "Access to events calendar"
      ]
    },
    {
      name: "Growth",
      price: "$750",
      period: "per month",
      description: "Accelerate your market presence",
      popular: true,
      features: [
        "2 platforms, 8 posts/month",
        "2 blogs + 1 visual content (video/infographic)",
        "Bi-weekly performance report",
        "3 case studies",
        "Up to 3 spotlight features/year",
        "Regional startup media pitch",
        "Event reminders (newsletter)",
        "1 support/onboarding video"
      ]
    },
    {
      name: "Pro Package",
      price: "$1,500",
      period: "per month",
      description: "Complete market domination strategy",
      popular: false,
      features: [
        "3 platforms, 12 posts/month + engagement",
        "4 content pieces: blogs, visuals, explainer",
        "Weekly report + insights + competitor check",
        "1 case study per month + design & layout",
        "2 interviews (video or written)",
        "Multi-platform publication support",
        "Personalized event curation + invites",
        "User guides, onboarding video etc.",
        "Result-driven per-lead strategy"
      ]
    }
  ];

  const businessPackages = [
    {
      name: "Market Ready",
      price: "$1,000",
      period: "per month",
      description: "For established businesses entering MEA",
      popular: false,
      features: [
        "2 platforms, 12 posts/month + monitoring",
        "2 blogs/articles + visuals",
        "Monthly KPI dashboards",
        "1 bilingual case study/quarter",
        "1 exec interview/year",
        "Newsletter inclusion",
        "General calendar access"
      ]
    },
    {
      name: "Regional Reach",
      price: "$2,500",
      period: "per month",
      description: "Comprehensive regional expansion",
      popular: true,
      features: [
        "3 platforms, 16 posts/month + comment moderation",
        "4 premium assets (blogs, reels, reports)",
        "Bi-weekly performance reports",
        "1 case study/month with landing page",
        "2 exec interviews/year + platform posting",
        "Outreach to 2 industry platforms",
        "Pre-event briefings + local intros (MEA)",
        "Dedicated account manager"
      ]
    },
    {
      name: "Global Play",
      price: "$4,500",
      period: "per month",
      description: "Enterprise-level market penetration",
      popular: false,
      features: [
        "Full coverage + paid ad management (budget excl.)",
        "6 content assets/month + localization (AR/FR)",
        "Full funnel reporting + competitor benchmarking",
        "2 case studies/month + interactive content",
        "Quarterly features + press release drafting",
        "Guaranteed feature in 3 regional publications",
        "Event rep or booth support (GITEX, Africa Tech)",
        "Brand manager + custom campaign quarterly"
      ]
    }
  ];

  const addOnServices = [
    {
      name: "Dedicated Video Production",
      price: "From $500/project",
      description: "Professional video content creation"
    },
    {
      name: "Event Representation",
      price: "From $1,000/event",
      description: "Booth support and networking at major events"
    },
    {
      name: "Paid Ad Campaign Setup",
      price: "From $350/month",
      description: "Professional ad campaign management"
    },
    {
      name: "Arabic Content Localization",
      price: "$200/page",
      description: "Native Arabic translation and cultural adaptation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <section className="pt-24 pb-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge className="text-primary-500 border-primary-200">
              Professional Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Market Entry <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive packages designed to help Uzbek tech companies successfully
              enter and thrive in Middle Eastern and African markets.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="startups" className="w-full">
            <div className="text-center mb-12">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-muted">
                <TabsTrigger
                  value="startups"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black text-muted-foreground"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Startups
                </TabsTrigger>

                <TabsTrigger
                  value="business"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black text-muted-foreground"
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
                <p className="mx-auto ">
                  Perfect for startups and tech companies looking for visibility and export opportunities in MEA markets.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {startupsPackages.map((pkg, index) => (
                  <Card key={index} className={`relative hover-lift ${pkg.popular ? 'ring-2 ring-accent border-accent' : ''}`}>
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-accent text-white px-4 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center space-y-4 p-8">
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <p className="text-gray-600">{pkg.description}</p>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-primary-500">
                          {pkg.price}
                        </div>
                        <div className="text-gray-500">{pkg.period}</div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-8 pt-0 space-y-6">
                      <div className="space-y-3">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button className={`w-full ${pkg.popular ? 'bg-accent hover:bg-accent/90' : 'bg-primary-500 hover:bg-primary-600'}`}>
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
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
                <p className="text-gray-600 max-w-2xl mx-auto">
                  For SMEs, exporters, and scaleups entering or expanding in MEA with aggressive market goals.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {businessPackages.map((pkg, index) => (
                  <Card key={index} className={`relative hover-lift ${pkg.popular ? 'ring-2 ring-accent border-accent' : ''}`}>
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-accent text-white px-4 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center space-y-4 p-8">
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <p className="text-gray-600">{pkg.description}</p>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-primary-500">
                          {pkg.price}
                        </div>
                        <div className="text-gray-500">{pkg.period}</div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-8 pt-0 space-y-6">
                      <div className="space-y-3">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button className={`w-full ${pkg.popular ? 'bg-accent hover:bg-accent/90' : 'bg-primary-500 hover:bg-primary-600'}`}>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Custom Add-on Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your package with specialized services tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <Card key={index} className="hover-lift text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-uzbek rounded-full flex items-center justify-center mx-auto">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold">{service.name}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                  <div className="text-lg font-bold text-primary-500">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Our Proven Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we help you successfully enter MEA markets in 4 simple steps.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Market Analysis",
                description: "Deep dive into your target MEA markets, competitors, and opportunities",
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
                <div className="w-20 h-20 bg-gradient-uzbek rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <process.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary-500">{process.step}</div>
                <h3 className="text-xl font-semibold">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
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
              Ready to Enter MEA Markets?
            </h2>
            <p className="text-xl text-white/90">
              Schedule a free consultation to discuss your market entry strategy and find the perfect package for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-500 hover:bg-gray-100">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-500">
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
