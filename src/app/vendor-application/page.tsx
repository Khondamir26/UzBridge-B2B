"use client";
import CountrySelect from '@/components/CountrySelect';
import React, { useState } from 'react';
import { MultiSelect } from "@/components/ui/multi-select"
import {
    Send,
    ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import Footer from '@/components/Footer';
import Link from 'next/link';
import { useEffect } from "react";
import { toast } from "sonner";
import { Faq } from "@/components/faq";
import { PaginationDemo } from '@/components/pagination-demo';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';

// Types for your form data
interface FormData {
    // Section 1: Company Information
    legalCompanyName: string;
    brandName: string;
    country: string;
    website: string;
    yearFounded: string;
    employees: string[];
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
    productVideo: string; // keep this if used elsewhere
    productFile: File | null; // ✅ new file input
    productVideoLink: string;
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
        employees: [],
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
        productFile: null,
        productVideoLink: '',
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
    const industries = [
        { label: "Retail", value: "Retail" },
        { label: "Finance", value: "Finance" },
        { label: "Manufacturing", value: "Manufacturing" },
        { label: "Education", value: "Education" },
        { label: "Government", value: "Government" },
        { label: "Other", value: "Other" },
    ]
    const categories = [
        { label: "CRM", value: "CRM" },
        { label: "ERP", value: "ERP" },
        { label: "HR", value: "HR" },
        { label: "Accounting", value: "Accounting" },
        { label: "EdTech", value: "EdTech" },
        { label: "HealthTech", value: "HealthTech" },
        { label: "Other", value: "Other" }
    ];
    const languages = [
        { label: "English", value: "English" },
        { label: "Arabic", value: "Arabic" },
        { label: "French", value: "French" },
        { label: "Russian", value: "Russian" },
        { label: "Uzbek", value: "Uzbek" },
    ];
    const pricingModel = [
        { label: "Freemium", value: "Freemium" },
        { label: "Subscription", value: "Subscription" },
        { label: "Tiered", value: "Tiered" },
        { label: "Pay-per-use", value: "Pay-per-use" },
        { label: "One-time", value: "One-time" },
    ]

    // State for form submission
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentSection, setCurrentSection] = useState(0);

    // Handle form field changes
    function handleChange(field: string, value: string | string[] | File | null) {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    }


    const handleMultiChange = (field: keyof FormData, value: string | string[]) => {
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
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Apply to list your B2B product and make it available as a modular app feature on <span className='font-bold text-2xl'>Zaytra.ai</span>
                        </p>
                    </div>
                </div>
            </section>


            {/* Contact Form & Info */}
            <section className="py-16 animate-fade-in-up">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 items-center">
                        <div className="lg:col-span-4 text-center">
                            <h2 className="text-3xl font-semibold">Vendor Application Form</h2>
                            <p className="text-muted-foreground mt-2">
                                Apply to list your B2B product and make it available as a modular app feature on <span className="font-bold">Zaytra.ai</span>
                            </p>
                        </div>
                        {/* Company Info  --- Section 1*/}
                        <div className="lg:col-span-4 h-full ">
                            <Card className="border border-border shadow-xl bg-card text-card-foreground">
                                <CardHeader>
                                    <CardTitle className="text-xl">Vendor Application Form</CardTitle>
                                    <p className="text-muted-foreground">
                                        1. Company Information
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
                                                <Select>
                                                    <SelectTrigger className="w-full rounded-2xl">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Number</SelectLabel>
                                                            <SelectItem value="1-10">1-10</SelectItem>
                                                            <SelectItem value="11-50">11-50</SelectItem>
                                                            <SelectItem value="51–200">51–200</SelectItem>
                                                            <SelectItem value="201+">201+</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
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
                        {/* : Primary Contact ---- Section 2 */}
                        <div className="lg:col-span-4 h-full ">
                            <Card className="border border-border shadow-xl bg-card text-card-foreground">
                                <CardHeader>
                                    <CardTitle className="text-xl">Vendor Application Form</CardTitle>
                                    <p className="text-muted-foreground">
                                        2. Primary Contact
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
                                                    className='rounded-2xl'
                                                    required
                                                    type="text"
                                                    placeholder="Enter your full name"
                                                    value={formData.contactName}
                                                    onChange={(e) =>
                                                        handleChange('contactName', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Position / Title *
                                                </label>
                                                <Input
                                                    className='rounded-2xl'
                                                    required
                                                    type="string"
                                                    placeholder="Position"
                                                    value={formData.contactTitle}
                                                    onChange={(e) =>
                                                        handleChange('contactTitle', e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Email Address *
                                                </label>
                                                <Input
                                                    className='rounded-2xl'
                                                    type="email"
                                                    placeholder="your-company@gmail.com"
                                                    value={formData.contactEmail}
                                                    onChange={(e) =>
                                                        handleChange('contactEmail', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium ">
                                                    Phone Number *
                                                </label>
                                                <Input
                                                    className='rounded-2xl'
                                                    required
                                                    type="tel"
                                                    placeholder="+998 91 123 45 67"
                                                    value={formData.contactPhone}
                                                    onChange={(e) =>
                                                        handleChange('contactPhone', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium ">
                                                    LinkedIn Profile *
                                                </label>
                                                <Input
                                                    className='rounded-2xl'
                                                    required
                                                    type="url"
                                                    placeholder="https://linkedin.com/in/your-username"
                                                    value={formData.linkedin}
                                                    onChange={(e) =>
                                                        handleChange('linkedin', e.target.value)
                                                    }
                                                />
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
                        {/* : : Product Overview ---- Section 3 */}
                        <div className="lg:col-span-4 h-full ">
                            <Card className="border border-border shadow-xl bg-card text-card-foreground">
                                <CardHeader>
                                    <CardTitle className="text-xl">Vendor Application Form</CardTitle>
                                    <p className="text-muted-foreground">
                                        3. Product Overview
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Product Name *
                                                </label>
                                                <Input
                                                    className='rounded-2xl'
                                                    required
                                                    type="text"
                                                    placeholder="Name"
                                                    value={formData.productName}
                                                    onChange={(e) =>
                                                        handleChange('productName', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    One-line Product Pitch*
                                                </label>
                                                <Input
                                                    className='rounded-2xl'
                                                    required
                                                    type="text"
                                                    placeholder="Text(max 150 characters)"
                                                    value={formData.productPitch}
                                                    onChange={(e) =>
                                                        handleChange('productPitch', e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Product Category *
                                                </label>
                                                <MultiSelect
                                                    selected={formData.productCategory}
                                                    onChange={(newValues) => handleMultiChange("productCategory", newValues)}
                                                    options={categories}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium ">
                                                    Target Industries *
                                                </label>
                                                <MultiSelect
                                                    selected={formData.targetIndustries}
                                                    onChange={(newValues) => handleMultiChange("targetIndustries", newValues)}
                                                    options={industries}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium ">
                                                    Languages *
                                                </label>
                                                <MultiSelect
                                                    selected={formData.supportedLanguages}
                                                    onChange={(newValues) => handleMultiChange("supportedLanguages", newValues)}
                                                    options={languages}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium ">
                                                    Pricing Model *
                                                </label>
                                                <MultiSelect
                                                    selected={formData.pricingModel}
                                                    onChange={(newValues) => handleMultiChange("pricingModel", newValues)}
                                                    options={pricingModel}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Starting Price (USD) *
                                                </label>
                                                <Input
                                                    className='rounded-2xl'
                                                    required
                                                    type="number"
                                                    placeholder="Enter Price"
                                                    value={formData.startingPrice}
                                                    onChange={(e) =>
                                                        handleChange('startingPrice', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Link to live product/demo *
                                                </label>
                                                <Input
                                                    className="rounded-2xl"
                                                    required
                                                    type="url"
                                                    placeholder="https://your-product-demo.com"
                                                    value={formData.liveLink}
                                                    onChange={(e) =>
                                                        handleChange('liveLink', e.target.value)
                                                    }
                                                />

                                            </div>
                                            <div className="space-y-2 flex flex-col justify-between">
                                                {/* File upload UI */}
                                                <div>
                                                    <label className="text-sm font-medium">Product Video/Presentation *</label>

                                                    <label
                                                        htmlFor="productVideo"
                                                        className="flex items-center justify-between w-full rounded-2xl text-muted-foreground font-medium border border-input px-4 py-2 text-sm cursor-pointer hover:bg-accent transition"
                                                    >
                                                        {formData.productVideo ? formData.productVideo : "Upload your file here"}
                                                    </label>
                                                    <input
                                                        id="productFile"
                                                        type="file"
                                                        accept="video/*,application/pdf"
                                                        className="hidden"
                                                        onChange={(e) => {
                                                            const file = e.target.files?.[0];
                                                            if (file) {
                                                                handleChange("productFile", file);
                                                                handleChange("productVideoLink", ""); // clear link if file chosen
                                                            }
                                                        }}
                                                    />
                                                </div>

                                                {/* OR separator */}
                                                <div className="text-center text-sm text-muted-foreground font-bold tracking-wide">— OR —</div>

                                                {/* Link input */}
                                                <input
                                                    type="url"
                                                    placeholder="Paste YouTube or Vimeo link"
                                                    value={formData.productVideoLink}
                                                    onChange={(e) => {
                                                        handleChange("productVideoLink", e.target.value);
                                                        handleChange("productFile", null); // clear file if link entered
                                                    }}
                                                    className="w-full rounded-2xl border px-4 py-2 text-sm border-border font-medium"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium ">
                                                    Description *
                                                </label>
                                                <Textarea
                                                    required
                                                    rows={5}
                                                    placeholder="Tell us how we can help you..."
                                                    value={formData.productDescription}
                                                    onChange={(e) =>
                                                        handleChange('productDescription', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Is the product live and operational ?*
                                                </label>
                                                <div className="flex gap-2 h-9 py-1  ">
                                                    <label className="flex items-center space-x-2">
                                                        <input
                                                            type="radio"
                                                            name="isLive"
                                                            value="Yes"
                                                            checked={formData.isLive === 'Yes'}
                                                            onChange={(e) => handleChange('isLive', e.target.value)}
                                                            className="h-4 w-4"
                                                            required
                                                        />
                                                        <span className="text-sm">Yes</span>
                                                    </label>
                                                    <label className="flex items-center space-x-2">
                                                        <input
                                                            type="radio"
                                                            name="isLive"
                                                            value="No"
                                                            checked={formData.isLive === 'No'}
                                                            onChange={(e) => handleChange('isLive', e.target.value)}
                                                            className="h-4 w-4"
                                                            required
                                                        />
                                                        <span className="text-sm">No</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="space-y-2 ">
                                                {/* PDF upload */}
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Upload Pitch Deck *</label>
                                                    <label
                                                        htmlFor="pitchDeck"
                                                        className="flex items-center justify-between w-full rounded-2xl text-muted-foreground font-medium border border-input px-4 py-2 text-sm cursor-pointer hover:bg-accent transition"
                                                    >
                                                        {formData.pitchDeck instanceof File
                                                            ? formData.pitchDeck.name
                                                            : formData.pitchDeck
                                                                ? formData.pitchDeck
                                                                : "Upload File (PDF only)"}
                                                    </label>

                                                    <input
                                                        id="pitchDeck"
                                                        type="file"
                                                        accept="application/pdf"
                                                        className="hidden"
                                                        onChange={(e) => {
                                                            const file = e.target.files?.[0] || null;
                                                            if (file && file.type === "application/pdf") {
                                                                handleChange("pitchDeck", file);
                                                                // Optionally clear any previous URL if set:
                                                                // handleChange("pitchDeckUrl", "");
                                                            } else {
                                                                toast.warning("Please upload a PDF file only.");
                            
                                                            }
                                                        }}
                                                    />
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
                        {/* : : Product Overview ---- Section 4 */}
                        <div className="lg:col-span-4 h-full ">
                            <Card className="border border-border shadow-xl bg-card text-card-foreground">
                                <CardHeader>
                                    <CardTitle className="text-xl">Vendor Application Form</CardTitle>
                                    <p className="text-muted-foreground">
                                        3. Product Overview
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Product Name *
                                                </label>
                                                <Input
                                                    className='rounded-2xl'
                                                    required
                                                    type="text"
                                                    placeholder="Name"
                                                    value={formData.productName}
                                                    onChange={(e) =>
                                                        handleChange('productName', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    One-line Product Pitch*
                                                </label>
                                                <Input
                                                    className='rounded-2xl'
                                                    required
                                                    type="text"
                                                    placeholder="Text(max 150 characters)"
                                                    value={formData.productPitch}
                                                    onChange={(e) =>
                                                        handleChange('productPitch', e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Product Category *
                                                </label>
                                                <MultiSelect
                                                    selected={formData.productCategory}
                                                    onChange={(newValues) => handleMultiChange("productCategory", newValues)}
                                                    options={categories}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium ">
                                                    Target Industries *
                                                </label>
                                                <MultiSelect
                                                    selected={formData.targetIndustries}
                                                    onChange={(newValues) => handleMultiChange("targetIndustries", newValues)}
                                                    options={industries}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium ">
                                                    Languages *
                                                </label>
                                                <MultiSelect
                                                    selected={formData.supportedLanguages}
                                                    onChange={(newValues) => handleMultiChange("supportedLanguages", newValues)}
                                                    options={languages}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium ">
                                                    Pricing Model *
                                                </label>
                                                <MultiSelect
                                                    selected={formData.pricingModel}
                                                    onChange={(newValues) => handleMultiChange("pricingModel", newValues)}
                                                    options={pricingModel}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Starting Price (USD) *
                                                </label>
                                                <Input
                                                    className='rounded-2xl'
                                                    required
                                                    type="number"
                                                    placeholder="Enter Price"
                                                    value={formData.startingPrice}
                                                    onChange={(e) =>
                                                        handleChange('startingPrice', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Link to live product/demo *
                                                </label>
                                                <Input
                                                    className="rounded-2xl"
                                                    required
                                                    type="url"
                                                    placeholder="https://your-product-demo.com"
                                                    value={formData.liveLink}
                                                    onChange={(e) =>
                                                        handleChange('liveLink', e.target.value)
                                                    }
                                                />

                                            </div>
                                            <div className="space-y-2 flex flex-col justify-between">
                                                {/* File upload UI */}
                                                <div>
                                                    <label className="text-sm font-medium">Product Video/Presentation *</label>

                                                    <label
                                                        htmlFor="productVideo"
                                                        className="flex items-center justify-between w-full rounded-2xl text-muted-foreground font-medium border border-input px-4 py-2 text-sm cursor-pointer hover:bg-accent transition"
                                                    >
                                                        {formData.productVideo ? formData.productVideo : "Upload your file here"}
                                                    </label>
                                                    <input
                                                        id="productFile"
                                                        type="file"
                                                        accept="video/*,application/pdf"
                                                        className="hidden"
                                                        onChange={(e) => {
                                                            const file = e.target.files?.[0];
                                                            if (file) {
                                                                handleChange("productFile", file);
                                                                handleChange("productVideoLink", ""); // clear link if file chosen
                                                            }
                                                        }}
                                                    />
                                                </div>

                                                {/* OR separator */}
                                                <div className="text-center text-sm text-muted-foreground font-bold tracking-wide">— OR —</div>

                                                {/* Link input */}
                                                <input
                                                    type="url"
                                                    placeholder="Paste YouTube or Vimeo link"
                                                    value={formData.productVideoLink}
                                                    onChange={(e) => {
                                                        handleChange("productVideoLink", e.target.value);
                                                        handleChange("productFile", null); // clear file if link entered
                                                    }}
                                                    className="w-full rounded-2xl border px-4 py-2 text-sm border-border font-medium"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium ">
                                                    Description *
                                                </label>
                                                <Textarea
                                                    required
                                                    rows={5}
                                                    placeholder="Tell us how we can help you..."
                                                    value={formData.productDescription}
                                                    onChange={(e) =>
                                                        handleChange('productDescription', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Is the product live and operational ?*
                                                </label>
                                                <div className="flex gap-2 h-9 py-1  ">
                                                    <label className="flex items-center space-x-2">
                                                        <input
                                                            type="radio"
                                                            name="isLive"
                                                            value="Yes"
                                                            checked={formData.isLive === 'Yes'}
                                                            onChange={(e) => handleChange('isLive', e.target.value)}
                                                            className="h-4 w-4"
                                                            required
                                                        />
                                                        <span className="text-sm">Yes</span>
                                                    </label>
                                                    <label className="flex items-center space-x-2">
                                                        <input
                                                            type="radio"
                                                            name="isLive"
                                                            value="No"
                                                            checked={formData.isLive === 'No'}
                                                            onChange={(e) => handleChange('isLive', e.target.value)}
                                                            className="h-4 w-4"
                                                            required
                                                        />
                                                        <span className="text-sm">No</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="space-y-2 ">
                                                {/* PDF upload */}
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Upload Pitch Deck *</label>
                                                    <label
                                                        htmlFor="pitchDeck"
                                                        className="flex items-center justify-between w-full rounded-2xl text-muted-foreground font-medium border border-input px-4 py-2 text-sm cursor-pointer hover:bg-accent transition"
                                                    >
                                                        {formData.pitchDeck instanceof File
                                                            ? formData.pitchDeck.name
                                                            : formData.pitchDeck
                                                                ? formData.pitchDeck
                                                                : "Upload File (PDF only)"}
                                                    </label>

                                                    <input
                                                        id="pitchDeck"
                                                        type="file"
                                                        accept="application/pdf"
                                                        className="hidden"
                                                        onChange={(e) => {
                                                            const file = e.target.files?.[0] || null;
                                                            if (file && file.type === "application/pdf") {
                                                                handleChange("pitchDeck", file);
                                                                // Optionally clear any previous URL if set:
                                                                // handleChange("pitchDeckUrl", "");
                                                            } else {
                                                                toast.warning("Please upload a PDF file only.");
                            
                                                            }
                                                        }}
                                                    />
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
