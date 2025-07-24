"use client";

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay"
import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from 'next/image';
import willy from "@/img/willy.jpg";
import sarah from "@/img/sarah.jpg";
import alex from "@/img/alex.jpg";
import john from "@/img/john.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";


const testimonials = [
  {
    quote: "Zaytra helped us go to 120 inbound leads/month.",
    author: "Sarah Chen",
    role: "Founder, TechFlow",
    image: sarah, // Replace with actual paths
    rating: 5
  },
  {
    quote: "Finally, a marketplace that promotes local SaaS, not just global giants.",
    author: "Marcus Rodriguez",
    role: "CEO, DataSync",
    image: john, // Replace with actual paths
    rating: 5
  },
  {
    quote: "Finally, a marketplace that promotes local SaaS, not just global giants.",
    author: "Willy Wonka",
    role: "Marketing Director",
    image: willy, // Replace with actual paths
    rating: 5
  },
  {
    quote: "No-code + vendors = growth playground.",
    author: "Alex Lee",
    role: "Product Lead, CloudBase",
    image: alex, // Replace with actual paths
    rating: 5
  }
];

const Testimonials = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // каждые 4 секунды прокручивать

    return () => clearInterval(interval); // очистка на размонтировании
  }, [emblaApi]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Our <span className="text-primary">Partners</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of successful SaaS companies growing with Zaytra
          </p>
        </div>


        <Carousel
          className="relative"
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]} >
          <div ref={emblaRef}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="text-center border-0 shadow-card 
                hover:shadow-floating transition-all duration-300 group">
                    <CardContent className="p-8 space-y-6 ">
                      <Quote className="w-10 h-10 text-primary/20 mx-auto" />
                      <div className="flex justify-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-lg text-foreground leading-relaxed font-medium italic">
                        {testimonial.quote}
                      </p>
                      {/* Avatar + Name/Role */}
                      <div className="space-y-2">
                        <div className="w-24 h-24 mx-auto relative rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>

                    </CardContent>
                  </Card>

                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <CarouselPrevious />
          <CarouselNext />

        </Carousel>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 uppercase">Brands that trust us</p>
          <div className="flex flex-wrap justify-center gap-18 items-center">
            {[
              { src: "/icons/facebook.png", alt: "Facebook" },
              { src: "/icons/netflix.png", alt: "Netflix" },
              { src: "/icons/hp.png", alt: "HP" },
              { src: "/icons/kpmg.png", alt: "KPMG" },
              { src: "/icons/renault.png", alt: "Renault" },
              { src: "/icons/amazon.png", alt: "Amazon" },
            ].map((logo, index) => (
              <div key={index} className="transition-transform hover:scale-105 ">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
