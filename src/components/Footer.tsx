"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Image from "next/image";


const Footer = () => {
  // добавлено: стейт и отправка формы
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        setEmail("");
      } else {
        toast.error(data.message || "Subscription failed");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  //
  return (
    <footer className="bg-muted/30">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icons/zaytra_ai.png" // путь к логотипу
                alt="Zaytra.AI Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-lg font-semibold">Zaytra.ai</span>
            </Link>
            <p className="leading-relaxed text-muted-foreground">
              Empowering Uzbek tech companies to scale globally by offering a
              curated marketplace and market entry support in the Middle East
              and Africa.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className=" rounded-full p-2 hover:ring-1 ring-accent/ hover:text-black dark:hover:text-white transition-all duration-200 hover:[text-shadow:0_0_0.5px_currentColor] cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className=" rounded-full p-2 hover:ring-1 ring-accent/ hover:text-black dark:hover:text-white transition-all duration-200 hover:[text-shadow:0_0_0.5px_currentColor] cursor-pointer"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full p-2 hover:ring-1 ring-accent/ hover:text-black dark:hover:text-white transition-all duration-200 hover:[text-shadow:0_0_0.5px_currentColor] cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full p-2 hover:ring-1 ring-accent/ hover:text-black dark:hover:text-white transition-all duration-200 hover:[text-shadow:0_0_0.5px_currentColor] cursor-pointer"
                aria-label="Instagram"
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-3">
              {[
                { label: "Marketplace", href: "/marketplace" },
                { label: "Services", href: "/services" },
                { label: "CRM Platform", href: "/crm" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-black dark:hover:text-white transition-all duration-200 hover:[text-shadow:0_0_0.5px_currentColor]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Link href="mailto:info@uzbridge.com">
                  <Mail className="w-5 h-5 " />
                </Link>
                <Link href="mailto:info@uzbridge.com"><span>info@zaytra.com</span>

                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Link href="tel:+44 7990 113943">
                  <Phone className="w-5 h-5 " />
                </Link>
                <Link href="tel:+44 7990 113943"><span>+44 7990 113943</span>
                </Link>

              </div>
              <div className="flex items-start space-x-3">
                <Link href="https://maps.app.goo.gl/sYWq4tavJdwGZzMm7" target="_blank">
                  <MapPin className="w-5 h-5 mt-1" />
                </Link>
                <Link href="https://maps.app.goo.gl/sYWq4tavJdwGZzMm7" target="_blank">
                  <span>
                    Tashkent, Uzbekistan
                    <br />
                    Dubai, UAE
                  </span>
                </Link>

              </div>
            </div>


          </div>
          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-sm text-muted-foreground">
              Get the latest updates on <br />MEA market opportunities
            </p>
            <form className="flex space-x-2" onSubmit={handleSubscribe}>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="rounded-full"
                required
              />
              <Button
                variant="default"
                type="submit"
                className="cursor-pointer rounded-full"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-foreground">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className=" text-sm">
              © 2025 Zaytra.ai. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:underline block text-sm text-muted-foreground hover:text-black dark:hover:text-white transition-all duration-200 hover:[text-shadow:0_0_0.5px_currentColor]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
