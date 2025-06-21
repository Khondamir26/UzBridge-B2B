"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
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

const Footer = () => {
  return (
    <footer className="">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 ">
              <Button variant="ghost" className="flex items-center cursor-pointer">
                  <Building2 className="w-6 h-6 " />
                <span className="text-xl font-bold ">UzBridge</span>
              </Button>

            </Link>
            <p className="text-gray-400 leading-relaxed">
              Empowering Uzbek tech companies to scale globally by offering a
              curated marketplace and market entry support in the Middle East
              and Africa.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-gray-800 cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-gray-800 cursor-pointer"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-gray-800 cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-gray-800 cursor-pointer"
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
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Link href="mailto:info@uzbridge.com">
                  <Mail className="w-5 h-5 " />
                </Link>
                <Link href="mailto:info@uzbridge.com"><span>info@uzbridge.com</span>

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
            <p className="text-sm text-gray-400">
              Get the latest updates on MEA market opportunities
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className=" "
              />
              <Button variant="default" type="submit" className=" cursor-pointer ">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 UzBridge. All rights reserved.
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
                  className="text-gray-400 hover:text-white text-sm transition-colors"
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
