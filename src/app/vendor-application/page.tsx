"use client";
import CountrySelect from '@/components/CountrySelect';
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
import { Faq } from "@/components/faq";
import { PaginationDemo } from '@/components/pagination-demo';

// Types for your form data
interface FormData {
    // Section 1: Company Information
    legalCompanyName: string;
    brandName: string;
    country: string;
    website: string;
    yearFounded: string;
    employees: string;
    itParkResident: string;

    // Section 2: Primary Contact
    contactName: string;
    contactTitle: string;
    contactEmail: string;
    contactPhone: string;
    linkedin: string;

    // Section 3: Product Overview
    productName: string;
    productPitch: string;
    productCategory: string[];
    productDescription: string;
    targetIndustries: string[];
    supportedLanguages: string[];
    pricingModel: string[];
    startingPrice: string;
    isLive: string;
    liveLink: string;
    productVideo: string;
    pitchDeck: File | null;

    // Section 4: Integration & Compatibility
    hasApiOrSdk: string;
    integrationMethods: string[];
    modularCompatible: string;
    modularFeaturesDescription: string;
    apiDocsLink: string;
    hasSandbox: string;
    leadResponseTime: string;

    // Section 5: Commercial Terms
    listingPlan: string;
    acceptedCommission: string;
    needsLegalEntityPerDeal: string;
    localizedSupport: string;
    preferredMarkets: string[];

    // Section 6: Additional Materials
    caseStudies: File | null;
    testimonials: string;
    certifications: File | null;
    pressLinks: string;
    extraInfo: string;

    // Agreement & Submission
    submitterName: string;
    submitterPosition: string;
    agreeToTerms: boolean;
    agreeToContact: boolean;
    submissionDate: string;
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



const VendorApp = () => {


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
        // Section 1: Company Information
        legalCompanyName: '',
        brandName: '',
        country: '',
        website: '',
        yearFounded: '',
        employees: '',
        itParkResident: '', // 'yes' or 'no'

        // Section 2: Primary Contact
        contactName: '',
        contactTitle: '',
        contactEmail: '',
        contactPhone: '',
        linkedin: '',

        // Section 3: Product Overview
        productName: '',
        productPitch: '',
        productCategory: [], // array of selected categories
        productDescription: '',
        targetIndustries: [],
        supportedLanguages: [],
        pricingModel: [],
        startingPrice: '',
        isLive: '', // 'yes' or 'no'
        liveLink: '',
        productVideo: '',
        pitchDeck: null, // File or null

        // Section 4: Integration & Compatibility
        hasApiOrSdk: '', // 'yes' or 'no'
        integrationMethods: [],
        modularCompatible: '', // 'yes' or 'no'
        modularFeaturesDescription: '',
        apiDocsLink: '',
        hasSandbox: '', // 'yes' or 'no'
        leadResponseTime: '',

        // Section 5: Commercial Terms
        listingPlan: '', // 'freemium', 'standard', etc.
        acceptedCommission: '',
        needsLegalEntityPerDeal: '', // 'yes' or 'no'
        localizedSupport: '', // 'yes' or 'no'
        preferredMarkets: [],

        // Section 6: Additional Materials (Optional)
        caseStudies: null, // File or string URL
        testimonials: '',
        certifications: null, // File
        pressLinks: '',
        extraInfo: '',

        // Agreement & Submission
        submitterName: '',
        submitterPosition: '',
        agreeToTerms: false,
        agreeToContact: false,
        submissionDate: '',
    });

    // State for form submission
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentSection, setCurrentSection] = useState(0);

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
                        <Link
                            className="inline-flex items-center justify-center gap-1 px-2 py-0.5 text-xs font-medium whitespace-nowrap
        w-fit rounded-full border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer hover-lift transition-transform duration-200"
                            href="/marketplace"
                        >
                            Join the Marketplace
                            <ArrowRight className="w-3 h-3" />
                        </Link>
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                            Become a Vendor
                            <span className="font-bold block">on Zaytra.ai </span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            List your modular B2B software on Zaytra.ai to reach MEA customers and grow your business.
                            Apply now to join our curated platform.
                        </p>
                    </div>
                </div>
            </section>


            {/* Contact Form & Info */}
            <section className="py-16 animate-fade-in-up">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12 items-center">
                        {/* Contact Information */}
                        <div className="h-full">
                            <div className="flex flex-col justify-between h-full space-y-8">
                                {/* Top Part: Contact Info */}
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold">Contact Information</h2>

                                    <div className="space-y-6">
                                        {[
                                            {
                                                icon: MapPin,
                                                title: 'Office Locations',
                                                details: ['Tashkent, Uzbekistan', 'Business Bay, Dubai, UAE'],
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
                                </div>

                                {/* Bottom Part: Quick Actions */}
                                <div className="space-y-4">
                                    <h3 className="font-semibold">Quick Actions</h3>
                                    <div className="space-y-2">
                                        <Button variant="default" className="rounded-2xl w-full justify-start cursor-pointer">
                                            <Globe className="w-4 h-4 mr-2" />
                                            Schedule Video Call
                                        </Button>
                                        <Button variant="outline" className="rounded-2xl w-full justify-start cursor-pointer">
                                            <CheckCircle className="w-4 h-4 mr-2" />
                                            Download Company Brochure
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>



                        return (
                        <>
                            {/* Секция */}
                            {currentSection === 0 && <Section1 />}
                            {currentSection === 1 && <Section2 />}
                            {/* и т.д. */}

                            {/* Пагинация */}
                            <PaginationDemo
                                currentSection={currentSection}
                                setCurrentSection={setCurrentSection}
                            />
                        </>
                        );

                        {/* Company Info  --- Section 1*/}
                        <div className="lg:col-span-2 h-full ">
                            <Card className="border border-border shadow-xl bg-card text-card-foreground">
                                <CardHeader>
                                    <CardTitle className="text-2xl">Vendor Application Form</CardTitle>
                                    <p className="text-muted-foreground">
                                        Apply to list your B2B product and make it available as a modular app feature on <span className='font-bold'>Zaytra.ai</span>
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Legal Company Name *
                                                </label>
                                                <Input
                                                    className='rounded-2xl'
                                                    required
                                                    type="text"
                                                    placeholder="Enter your full name"
                                                    value={formData.legalCompanyName}
                                                    onChange={(e) =>
                                                        handleChange('legalCompanyName', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Brand / Product Name *
                                                </label>
                                                <Input
                                                    className='rounded-2xl'
                                                    required
                                                    type="text"
                                                    placeholder="Enter your full name"
                                                    value={formData.brandName}
                                                    onChange={(e) =>
                                                        handleChange('brandName', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <CountrySelect
                                                value={formData.country}
                                                onChange={(val) => handleChange('country', val)}
                                            />

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Company Website *
                                                </label>
                                                <Input
                                                    className="rounded-2xl"
                                                    required
                                                    type="url"
                                                    placeholder="https://yourcompany.com"
                                                    value={formData.website}
                                                    onChange={(e) =>
                                                        handleChange('website', e.target.value)
                                                    }
                                                />

                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Year Founded *
                                                </label>
                                                <Input
                                                    required
                                                    className='rounded-2xl'
                                                    type="string"
                                                    placeholder="2025"
                                                    value={formData.yearFounded}
                                                    onChange={(e) =>
                                                        handleChange('yearFounded', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Number of Employees *
                                                </label>
                                                <Input
                                                    required
                                                    className="rounded-2xl"
                                                    type="text"
                                                    placeholder="e.g. 1–10, 11–50, 51–200, 201+"
                                                    value={formData.employees}
                                                    onChange={(e) =>
                                                        handleChange('employees', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    IT Park Resident ?*
                                                </label>
                                                <div className="flex gap-2 h-9 py-1  ">
                                                    <label className="flex items-center space-x-2">
                                                        <input
                                                            type="radio"
                                                            name="itParkResident"
                                                            value="Yes"
                                                            checked={formData.itParkResident === 'Yes'}
                                                            onChange={(e) => handleChange('itParkResident', e.target.value)}
                                                            className="h-4 w-4"
                                                            required
                                                        />
                                                        <span className="text-sm">Yes</span>
                                                    </label>
                                                    <label className="flex items-center space-x-2">
                                                        <input
                                                            type="radio"
                                                            name="itParkResident"
                                                            value="No"
                                                            checked={formData.itParkResident === 'No'}
                                                            onChange={(e) => handleChange('itParkResident', e.target.value)}
                                                            className="h-4 w-4"
                                                            required
                                                        />
                                                        <span className="text-sm">No</span>
                                                    </label>
                                                </div>
                                            </div>

                                        </div>

                                        <PaginationDemo
                                            currentSection={currentSection}
                                            setCurrentSection={setCurrentSection}
                                        />
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Button
                                                type="submit"
                                                className="rounded-2xl cursor-pointer hover:opacity-90 flex-1"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4 mr-2 " />
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
                                                <Button type="button" variant="outline" className="rounded-2xl cursor-pointer w-full">
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
            <Faq />
            <Footer />
        </div>
    );
};

export default VendorApp;
