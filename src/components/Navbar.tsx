"use client";

import * as React from "react";
import Link from "next/link";
import { ReactNode, ElementType } from "react";
import {
    LogOut,
    Moon,
    Settings,
    Sun,
    User,
    CircleHelpIcon,
    CircleIcon,
    CircleCheckIcon,
    BarChart3,
    Building2,
    Users,
    MessageSquare,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { useTheme } from "next-themes";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

// Optional demo content:
const components = [
    {
        title: "CRM Platform",
        href: "/crm",
        description: "Manage your customers efficiently.",
        icon: BarChart3,
    },
    {
        title: "Marketplace",
        href: "/marketplace",
        description: "B2B software directory.",
        icon: Building2,
    },
    {
        title: "Agency Services",
        href: "/services",
        description: "Market entry support.",
        icon: Users,
    },
    {
        title: "Consultation",
        href: "/contact",
        description: "Free strategy session.",
        icon: MessageSquare,
    },
];

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const { toggleSidebar } = useSidebar();

    return (
        <nav className="flex items-center justify-between px-4 py-2 border-b ">
            {/* LEFT */}
            <SidebarTrigger />

            {/* CENTER: Navigation Menu */}
            <NavigationMenu >
                <NavigationMenuList className="space-x-2">

                    {/* Home */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/" className={navigationMenuTriggerStyle()}>Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* Marketplace */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/marketplace" className={navigationMenuTriggerStyle()}>Marketplace</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* Services */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/services" className={navigationMenuTriggerStyle()}>Services</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* About */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/about" className={navigationMenuTriggerStyle()}>About</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* Contact */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/contact" className={navigationMenuTriggerStyle()}>Contact</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* Solutions */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-2 p-4 w-[500px] md:grid-cols-2">
                                {components.map((item) => (
                                    <ListItem key={item.href} href={item.href} icon={item.icon} title={item.title}>
                                        {item.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                </NavigationMenuList>

            </NavigationMenu>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
                <Link href="/dashboard">Dashboard</Link>

                {/* Theme Toggle */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-5 w-5 dark:hidden" />
                            <Moon className="h-5 w-5 hidden dark:block" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Avatar Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage src="https://avatars.githubusercontent.com/u/82398768" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" /> Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" /> Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem variant="destructive">
                            <LogOut className="mr-2 h-4 w-4" /> Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
};

// Helper component
function ListItem({
  title,
  children,
  href,
  icon: Icon, 
}: {
  title: string;
  children: React.ReactNode;
  href: string;
  icon?: React.ElementType; 
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-md p-3 hover:bg-muted transition-colors"
        >
          <div className="flex items-center space-x-2 text-sm font-medium">
            {Icon && <Icon className="w-4 h-4 text-primary-500" />} {/*  */}
            <span>{title}</span>
          </div>
          <p className="text-xs text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default Navbar;
