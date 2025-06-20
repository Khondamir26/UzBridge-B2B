'use client';

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
  TabsContent,
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

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

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

const products = [
    {
      id: 1,
      name: "UzERP Pro",
      company: "TechFlow Solutions",
      category: "ERP Systems",
      description: "Complete enterprise resource planning solution for medium to large businesses with advanced inventory and financial management.",
      rating: 4.8,
      reviews: 156,
      price: "Starting from $299/month",
      languages: ["EN", "RU", "AR"],
      clients: 450,
      demo: true,
      featured: true,
      image: "photo-1460925895917-afdab827c52f",
      tags: ["Cloud-based", "Multi-language", "API Integration"]
    },
    {
      id: 2,
      name: "FinanceUz Banking",
      company: "FinTech Innovations",
      category: "Fintech",
      description: "Digital banking platform with comprehensive loan management, payment processing, and regulatory compliance for MEA markets.",
      rating: 4.9,
      reviews: 89,
      price: "Custom pricing",
      languages: ["EN", "AR", "FR"],
      clients: 120,
      demo: true,
      featured: false,
      image: "photo-1551288049-bebda4e38f71",
      tags: ["Banking", "Compliance", "Mobile-first"]
    },
    {
      id: 3,
      name: "EduSoft Campus",
      company: "Education Tech UZ",
      category: "Education",
      description: "Integrated campus management system with student information, learning management, and parent communication modules.",
      rating: 4.7,
      reviews: 203,
      price: "From $89/month",
      languages: ["EN", "RU", "AR"],
      clients: 780,
      demo: true,
      featured: true,
      image: "photo-1522202176988-66273c2fd55f",
      tags: ["LMS", "Student Portal", "Analytics"]
    },
    {
      id: 4,
      name: "LogiFlow Pro",
      company: "Smart Logistics UZ",
      category: "Logistics",
      description: "Advanced logistics and supply chain management platform with real-time tracking and route optimization.",
      rating: 4.6,
      reviews: 134,
      price: "Starting from $199/month",
      languages: ["EN", "RU"],
      clients: 320,
      demo: true,
      featured: false,
      image: "photo-1586528116311-ad8dd3c8310d",
      tags: ["Real-time tracking", "Route optimization", "Warehouse management"]
    },
    {
      id: 5,
      name: "HealthCare UZ",
      company: "MedTech Solutions",
      category: "Healthcare",
      description: "Comprehensive hospital management system with patient records, appointment scheduling, and billing integration.",
      rating: 4.8,
      reviews: 97,
      price: "Custom pricing",
      languages: ["EN", "AR"],
      clients: 85,
      demo: true,
      featured: false,
      image: "photo-1576091160399-112ba8d25d1f",
      tags: ["HIPAA Compliant", "Telemedicine", "Analytics"]
    },
    {
      id: 6,
      name: "HRMax Pro",
      company: "WorkFlow Technologies",
      category: "HR Management",
      description: "Complete human resources management suite with payroll, performance tracking, and employee self-service portal.",
      rating: 4.7,
      reviews: 178,
      price: "From $149/month",
      languages: ["EN", "RU", "AR"],
      clients: 560,
      demo: true,
      featured: true,
      image: "photo-1552664730-d307ca884978",
      tags: ["Payroll", "Performance management", "Self-service"]
    }
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' ||
      product.category.toLowerCase().includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-80 bg-muted rounded-lg animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-24 pb-12">
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
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
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

            <Tabs
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 bg-muted text-muted-foreground">
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

      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold ">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className={`group hover:shadow-lg transition duration-300 ${
                  product.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={`https://images.unsplash.com/${product.image}?w=400&h=250&fit=crop`}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background text-foreground">
                        {product.category}
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

                  <div className="flex flex-wrap gap-2">
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
                      <div className="text-lg font-bold text-primary">
                        {product.price}
                      </div>
                      {product.demo && (
                        <div className="flex items-center text-green-600 dark:text-green-400 text-sm">
                          <Clock className="w-3 h-3 mr-1" />
                          Free demo available
                        </div>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                      <Button size="sm" className="bg-gradient-uzbek">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="px-8">
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

  
