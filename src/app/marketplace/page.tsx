'use client';

import Image, { StaticImageData } from 'next/image';


import erp from "@/img/erp.png";
import finance from "@/img/finance.jpg";
import hospital from "@/img/hospital.png";
import hrms from "@/img/hrms.png";
import scm from "@/img/scm.jpeg";
import sis from "@/img/sis.jpg";

import {
  Search,
  Filter,
  Star,
  ArrowRight,
  Users,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  company: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  currency?: string;
  billing?: string;
  price: number | string;
  languages: string[];
  clients: number;
  demo: boolean;
  featured: boolean;
  image: StaticImageData;
  tags: string[];
}

const Marketplace = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 100);
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

  // useEffect(() => {
  //   setTimeout(() => setIsLoading(false), 200);
  // }, []);

  const categories = [
    { id: 'all', label: 'All Software', count: 142 },
    { id: 'erp', label: 'ERP Systems', count: 28 },
    { id: 'crm', label: 'CRM Software', count: 24 },
    { id: 'fintech', label: 'Fintech', count: 18 },
    { id: 'hr', label: 'HR Management', count: 15 },
    { id: 'education', label: 'Education', count: 22 },
    { id: 'logistics', label: 'Logistics', count: 19 },
    { id: 'healthcare', label: 'Healthcare', count: 16 },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "UzERP Pro",
      company: "TechFlow Solutions",
      category: "erp",
      description: "Complete enterprise resource planning solution for medium to large businesses with advanced inventory and financial management.",
      rating: 4.8,
      reviews: 156,
      price: 299,
      currency: "USD",
      billing: "month",
      languages: ["EN", "RU", "AR"],
      clients: 450,
      demo: true,
      featured: true,
      image: erp,
      tags: ["Cloud-based", "Multi-language", "API Integration"]
    },
    {
      id: 2,
      name: "FinanceUz Banking",
      company: "FinTech Innovations",
      category: "fintech",
      description: "Digital banking platform with comprehensive loan management, payment processing, and regulatory compliance for MEA markets.",
      rating: 4.9,
      reviews: 89,
      price: "Custom pricing",
      currency: "USD",
      billing: "month",
      languages: ["EN", "AR", "FR"],
      clients: 120,
      demo: true,
      featured: false,
      image: finance,
      tags: ["Banking", "Compliance", "Mobile-first"]
    },
    {
      id: 3,
      name: "EduSoft Campus",
      company: "Education Tech UZ",
      category: "education",
      description: "Integrated campus management system with student information, learning management, and parent communication modules.",
      rating: 4.7,
      reviews: 203,
      price: 89,
      currency: "USD",
      billing: "month",
      languages: ["EN", "RU", "AR"],
      clients: 780,
      demo: true,
      featured: true,
      image: sis,
      tags: ["LMS", "Student Portal", "Analytics"]
    },
    {
      id: 4,
      name: "LogiFlow Pro",
      company: "Smart Logistics UZ",
      category: "logistics",
      description: "Advanced logistics and supply chain management platform with real-time tracking and route optimization.",
      rating: 4.6,
      reviews: 134,
      price: 199,
      currency: "USD",
      billing: "month",
      languages: ["EN", "RU"],
      clients: 320,
      demo: true,
      featured: false,
      image: scm,
      tags: ["Real-time", "Route Opt", "Warehouse Mgmt"]
    },
    {
      id: 5,
      name: "HealthCare UZ",
      company: "MedTech Solutions",
      category: "healthcare",
      description: "Comprehensive hospital management system with patient records, appointment scheduling, and billing integration.",
      rating: 4.8,
      reviews: 97,
      price: "Custom pricing",
      currency: "USD",
      billing: "month",
      languages: ["EN", "AR"],
      clients: 85,
      demo: true,
      featured: false,
      image: hospital,
      tags: ["HIPAA Compliant", "Telemedicine", "Analytics"]
    },
    {
      id: 6,
      name: "HRMax Pro",
      company: "WorkFlow Technologies",
      category: "hr",
      description: "Complete human resources management suite with payroll, performance tracking, and employee self-service portal.",
      rating: 4.7,
      reviews: 178,
      price: 149,
      currency: "USD",
      billing: "month",
      languages: ["EN", "RU", "AR"],
      clients: 560,
      demo: true,
      featured: true,
      image: hrms,
      tags: ["Payroll", "Performance Mgmt", "Self-service"]
    }
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="pt-24 pb-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-80 bg-muted rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      <section className="pt-18 pb-12 bg-muted ">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Discover <span className="text-primary">Uzbek Software</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore premium B2B software solutions built by innovative Uzbek
              companies, tailored for Middle East and African markets.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search software, companies, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 text-lg"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent className="bg-popover text-popover-foreground border-border">
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.label} ({category.count})
                    </SelectItem>                                   
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" className="md:w-auto">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>

            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="h-full w-full grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-2 ring-1 ring-muted/">
                {categories.slice(0, 8).map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="text-xs lg:text-sm"
                  >
                    {category.label.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">
                {filteredProducts.length} Software Solutions
              </h2>
              <p className="text-muted-foreground">
                {selectedCategory === 'all'
                  ? 'All categories'
                  : categories.find((c) => c.id === selectedCategory)?.label}
              </p>
            </div>
            <Select defaultValue="featured">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover text-popover-foreground border-border">
                <SelectItem value="featured">Featured First</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className={`group hover:shadow-lg transition duration-300 ${product.featured ? 'ring-primary/20' : ''
                  }`}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background text-foreground">
                        {categories.find((c) => c.id === product.category)?.label || product.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-1">
                      {product.languages.map((lang) => (
                        <Badge
                          key={lang}
                          variant="outline"
                          className="text-xs bg-background/80"
                        >
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {product.name}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {product.company}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>

                  <div className=" flex flex-wrap gap-2">
                    {product.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{product.rating}</span>
                        <span>({product.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{product.clients}+ clients</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="space-y-1">
                      <div className="flex items-center text-lg font-bold text-primary gap-1">
                        {typeof product.price === "number" ? (
                          <>
                            <span>
                              From {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: product.currency || "USD",
                              }).format(product.price)}
                              /{product.billing}
                            </span>
                          </>
                        ) : (
                          <span>{product.price}</span>
                        )}
                      </div>

                      {product.demo && (
                        <div className="flex items-center text-green-600 dark:text-green-400 text-sm">
                          <Clock className="w-3 h-3 mr-1" />
                          Free demo available
                        </div>
                      )}
                    </div>
                    <div className="flex space-x-2 ">
                      <Link className="inline-flex items-center justify-center gap-1 px-2 py-0.5 text-xs font-medium whitespace-nowrap w-fit 
                                  rounded-full border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer" href="/marketplace" >
                        Learn More
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer ring-2 ring-accent/ bg-muted">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketplace;
