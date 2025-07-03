"use client";

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Globe,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useEffect } from "react";
import { toast } from "sonner";

// Types for your form data
interface FormData {
  name: string;
  email: string;
  company?: string;
  phone: string;
  service?: string;
  message: string;
}

interface ApiResponse {
  message?: string;
  error?: string;
  details?: string[];
  contact?: {
    id: string;
    name: string;
    email: string;
    createdAt: string;
  };
}



const Contact = () => {


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

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: undefined,
    message: '',
  });
  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);


  // Handle form field changes
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // ✅ THIS IS THE UPDATED handleSubmit FUNCTION
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to your API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (response.ok) {
        // Success - show success message
        toast.success("Message sent successfully!", {
          description: "We'll get back to you soon.",
        });

        // Reset form to empty state
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        // Handle API errors
        console.error('API Error:', data.error);
        toast.error("Error", {
          description: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error);
      toast.error("Network Error", {
        description: "Please check your connection and try again.",
      });
    } finally {
      // Always set submitting back to false
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen bg-background text-foreground ">
      {/* Header */}
      <section className="pt-24 pb-16 bg-muted bg-gradient-to-br to-accent animate-fade-in-up ">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Link className="inline-flex items-center justify-center gap-1 px-2 py-0.5 text-xs font-medium whitespace-nowrap
             w-fit rounded-full border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer hover-lift transition-transform duration-200 "
              href="/contact" >
              Get In Touch
              <ArrowRight className="w-3 h-3" />
            </Link>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Let&apos;s Start Your{' '}
              <span className="font-bold block">Global Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to expand your Uzbek tech business into MEA markets?
              Schedule a free consultation or explore our marketplace to connect
              with opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground">
                  Get in touch with our team to discuss your market entry
                  strategy and find the perfect solution for your business.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: 'Office Locations',
                    details: [
                      'Tashkent, Uzbekistan',
                      'Business Bay, Dubai, UAE',
                    ],
                  },
                  {
                    icon: Phone,
                    title: 'Phone Numbers',
                    details: ['+998 91 123 45 67 (UZ)', '+971 50 123 45 67 (UAE)'],
                  },
                  {
                    icon: Mail,
                    title: 'Email Addresses',
                    details: ['info@uzbridge.com', 'partnerships@uzbridge.com'],
                  },
                  {
                    icon: Clock,
                    title: 'Business Hours',
                    details: [
                      'Mon-Fri: 9:00 AM - 6:00 PM (GMT+5)',
                      'Sat: 10:00 AM - 2:00 PM (GMT+5)',
                    ],
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{item.title}</h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="font-semibold">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="default" className="w-full justify-start cursor-pointer" >
                    <Globe className="w-4 h-4 mr-2" />
                    Schedule Video Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start cursor-pointer">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Download Company Brochure
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border border-border shadow-xl bg-card text-card-foreground">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you within 24
                    hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Full Name *
                        </label>
                        <Input
                          required
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) =>
                            handleChange('name', e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Email Address *
                        </label>
                        <Input
                          required
                          type="email"
                          placeholder="your.email@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange('email', e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Company Name
                        </label>
                        <Input
                          type="text"
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={(e) =>
                            handleChange('company', e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Phone Number *
                        </label>
                        <Input
                          required
                          type="tel"
                          placeholder="+998 91 123 45 67"
                          value={formData.phone}
                          onChange={(e) =>
                            handleChange('phone', e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Service Interest
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleChange('service', value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service you're interested in" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover text-popover-foreground border-border">
                          <SelectItem value="marketplace">
                            Marketplace Listing
                          </SelectItem>
                          <SelectItem value="startup-package">
                            Startup Package
                          </SelectItem>
                          <SelectItem value="business-package">
                            Business Package
                          </SelectItem>
                          <SelectItem value="crm-platform">
                            CRM Platform
                          </SelectItem>
                          <SelectItem value="custom-solution">
                            Custom Solution
                          </SelectItem>
                          <SelectItem value="partnership">
                            Partnership Opportunity
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message *</label>
                      <Textarea
                        required
                        rows={5}
                        placeholder="Tell us about your business, target markets, and how we can help you..."
                        value={formData.message}
                        onChange={(e) =>
                          handleChange('message', e.target.value)
                        }
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        className="cursor-pointer hover:opacity-90 flex-1"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                      <Link
                        href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1rg4TOS2A6ZBwxCNsTekCavRGrw5Zckt4yujmekISbEpd8hf9ER--clf0BNO54B4-vrt6n1wkf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button type="button" variant="outline" className="cursor-pointer w-full">
                          Schedule Call Instead
                        </Button>
                      </Link>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions about our services and how we can help your
              business expand into MEA markets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: 'How long does it take to enter a new MEA market?',
                answer:
                  'Typically 3-6 months depending on the complexity of your product and target market. We provide a detailed timeline during our initial consultation.',
              },
              {
                question: 'Do you provide local language support?',
                answer:
                  'Yes, we offer content localization in Arabic, French, and other regional languages as part of our comprehensive packages.',
              },
              {
                question: 'What makes UzBridge different from other agencies?',
                answer:
                  'We specialize exclusively in Uzbek tech companies and MEA markets, providing deep cultural understanding and proven local partnerships.',
              },
              {
                question: 'Can you help with regulatory compliance?',
                answer:
                  'Absolutely. Our team includes local experts who guide you through regulatory requirements and compliance procedures in each target market.',
              },
              {
                question: "What's included in the marketplace listing?",
                answer:
                  'Professional company profile, product showcase, lead generation tools, analytics dashboard, and direct buyer connections.',
              },
              {
                question: 'Do you offer flexible payment terms?',
                answer:
                  'Yes, we offer various payment options including monthly subscriptions, quarterly packages, and custom enterprise agreements.',
              },
            ].map((faq, index) => (
              <Card key={index} className="hover-lift cursor-default transition-transform duration-200 ">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
