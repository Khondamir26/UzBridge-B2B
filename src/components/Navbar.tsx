"use client";

import * as React from "react";
import Link from "next/link";
import {
    Moon,
    Sun,
    BarChart3,
    Building2,
    Users,
    MessageSquare,
    Globe,
    ChevronDown,
    Check,
    Languages,
    Laptop2,
    Menu,
    LayoutDashboard
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
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
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Optional demo content:
const components = [
    {
        title: "CRM Platform",
        href: "/crm",
        description: "Manage your customers efficiently.",
        icon: BarChart3,
    },
    {
        title: "Dashboard",
        href: "/dashboard",
        description: "B2B software directory.",
        icon: LayoutDashboard,
    },
    {
        title: "Services",
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
const vendorComponents = [
    {
        title: "Vendor Portal",
        href: "/vendor-portal",
        description: "Access and manage your vendor dashboard.",
        icon: LayoutDashboard,
    },
    {
        title: "Product Listing",
        href: "/vendor/products",
        description: "Add, update, and manage your offerings.",
        icon: BarChart3,
    },
    {
        title: "Order Management",
        href: "/vendor/orders",
        description: "Track orders, shipments, and returns.",
        icon: Users,
    },
    {
        title: "Vendor Application",
        href: "/vendor-application",
        description: "Apply to list your product on UzBridge Marketplace.",
        icon: Building2,
    },
];



const Navbar = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [language, setLanguage] = React.useState("EN");
    const pathname = usePathname();
    const [open, setOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const navbarRef = useRef<HTMLElement>(null);

    // ПЕРВЫЙ useEffect - для высоты навбара
    useEffect(() => {
        const updateNavbarHeight = () => {
            if (navbarRef.current) {
                const height = navbarRef.current.offsetHeight;
                setNavbarHeight(height);
                document.documentElement.style.setProperty('--navbar-height', `${height}px`);

                // Добавляем padding-top к body для компенсации фиксированного навбара
                document.body.style.paddingTop = `${height}px`;
            }
        };

        // Сразу устанавливаем приблизительную высоту до измерения
        if (navbarHeight === 0) {
            document.body.style.paddingTop = '64px'; // примерная высота навбара
        }

        // Точное измерение после рендера
        updateNavbarHeight();

        // Дополнительная проверка через requestAnimationFrame
        requestAnimationFrame(updateNavbarHeight);

        return () => {
            // Очищаем padding при размонтировании компонента
            document.body.style.paddingTop = '0px';
        };
    }, [navbarHeight]);

    // ВТОРОЙ useEffect - для скролла
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); // change threshold if needed
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => pathname === path;

    const languages = [
        { code: "EN", label: "English", icon: "🇺🇸" },
        { code: "RU", label: "Русский", icon: "🇷🇺" },
        { code: "AR", label: "العربية", icon: "🇸🇦" },
    ];

    return (
        <nav
            ref={navbarRef}
            className={` flex items-center justify-between px-4 py-2 fixed top-0 w-full z-50
                  duration-300 bg-background transition-shadow ${isScrolled
                    ? 'shadow-lg'
                    : ''
                }`}
            style={{
                height: navbarHeight > 0 ? `${navbarHeight}px` : 'auto',
                width: "-webkit-fill-available"
            }}

        >

            <div className="flex items-center ">
                {/* LEFT:Sidebar Trigger */}
                <SidebarTrigger />
            </div>
            <div className="container mx-auto flex items-center justify-between px-4 py-2 ">
                {/* Logo */}
                <div className="md:flex items-center gap-4 flex-shrink-0">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/icons/zaytra_ai.png" // путь к логотипу
                            alt="Zaytra.AI Logo"
                            width={32}
                            height={32}
                            className="object-contain"
                        />
                        <span className="text-lg font-semibold ">Zaytra.ai</span>
                    </Link>
                </div>
                {/* CENTER: Navigation Menu */}
                <div className="hidden lg:flex flex-1 justify-center ">
                    <NavigationMenu >
                        <NavigationMenuList>
                            {/* Home */}
                            <NavigationMenuItem >
                                <NavigationMenuLink className="hover:rounded-full p-2 hover:ring-1 ring-accent/ hover:text-black dark:hover:text-white transition-all duration-200 hover:[text-shadow:0_0_0.5px_currentColor] cursor-pointer" asChild>
                                    <Link href="/" className={navigationMenuTriggerStyle()}>Home</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            {/* Marketplace */}
                            <NavigationMenuItem>
                                <NavigationMenuLink className="hover:rounded-full p-2 hover:ring-1 ring-accent/ hover:text-black dark:hover:text-white transition-all duration-200 hover:[text-shadow:0_0_0.5px_currentColor] cursor-pointer" asChild>
                                    <Link href="/marketplace" className={navigationMenuTriggerStyle()}>Marketplace</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            {/* Marketing */}
                            <NavigationMenuItem>
                                <NavigationMenuLink className="hover:rounded-full p-2 hover:ring-1 ring-accent/ hover:text-black dark:hover:text-white transition-all duration-200 hover:[text-shadow:0_0_0.5px_currentColor] cursor-pointer" asChild>
                                    <Link href="/services" className={navigationMenuTriggerStyle()}>Marketing</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            {/* App Builder */}
                            <NavigationMenuItem>
                                <NavigationMenuLink className="hover:rounded-full p-2 hover:ring-1 ring-accent/ hover:text-black dark:hover:text-white transition-all duration-200 hover:[text-shadow:0_0_0.5px_currentColor] cursor-pointer" asChild>
                                    <Link href="/about" className={navigationMenuTriggerStyle()}>App Builder</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            {/* Contact */}
                            {/* <NavigationMenuItem>
                                <NavigationMenuLink className="rounded-xl p-2 hover:ring-1 ring-accent/ hover:text-black dark:hover:text-white transition-all duration-200 hover:[text-shadow:0_0_0.5px_currentColor] cursor-pointer" asChild>
                                    <Link href="/contact" className={navigationMenuTriggerStyle()}>Contact</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem> */}

                            {/* Solutions */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="hover:rounded-full p-2 hover:ring-1 ring-accent/ hover:text-black dark:hover:text-white transition-all duration-200 hover:[text-shadow:0_0_0.5px_currentColor] cursor-pointer" >Vendors</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-2 p-4 w-[500px] md:grid-cols-2 cursor-pointer">
                                        {vendorComponents.map((item) => (
                                            <ListItem key={item.href} href={item.href} icon={item.icon} title={item.title}>
                                                {item.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="hover:rounded-full p-2 hover:ring-1 ring-accent/ hover:text-black dark:hover:text-white transition-all duration-200 hover:[text-shadow:0_0_0.5px_currentColor] cursor-pointer" >Solutions</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-2 p-4 w-[500px] md:grid-cols-2 cursor-pointer">
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
                </div>
                {/* RIGHT */}
                <div className="hidden md:flex items-center gap-4 ">
                    <div className="flex items-center gap-4">
                        {/* Language Selector */}
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="rounded-full p-2 hover:ring-1 ring-accent/ hover:text-black dark:hover:text-white transition-all duration-200 hover:[text-shadow:0_0_0.5px_currentColor] cursor-pointer">
                                    <Globe className="w-4 h-4" />
                                    <span>{languages.find((l) => l.code === language)?.code}</span>
                                    <ChevronDown className="w-3 h-3" />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" className="bg-background border shadow-md w-40 ">
                                {languages.map((lang) => (
                                    <DropdownMenuItem
                                        key={lang.code}
                                        onClick={() => setLanguage(lang.code)}
                                        className="flex items-center justify-between space-x-2 cursor-pointer hover:bg-muted"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <Languages className="w-4 h-4" />
                                            <span>{lang.label}</span>
                                        </div>
                                        {language === lang.code && <Check className="w-4 h-4 text-primary" />}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link href="/login"  >
                            <Button variant="default" size="sm" className="cursor-pointer rounded-full  ">
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/signup">
                            <Button variant="ghost" size="sm" className="rounded-full p-2 hover:ring-1 ring-accent/ hover:text-black dark:hover:text-white transition-all duration-200 hover:[text-shadow:0_0_0.5px_currentColor] cursor-pointer  ">
                                Sign Up
                            </Button>
                        </Link>

                        {/* Theme Toggle */}
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <Button className="rounded-2xl" variant="outline" size="icon">
                                    {/* Icon depends on actual theme */}
                                    <Sun className="h-5 w-5 dark:hidden" />
                                    <Moon className="h-5 w-5 hidden dark:block" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    <div className="flex items-center gap-2 w-full">
                                        <Sun className="h-4 w-4" />
                                        <span className="flex-1">Light</span>
                                        {resolvedTheme === "light" && <Check className="h-4 w-4 text-primary" />}
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    <div className="flex items-center gap-2 w-full">
                                        <Moon className="h-4 w-4" />
                                        <span className="flex-1">Dark</span>
                                        {resolvedTheme === "dark" && <Check className="h-4 w-4 text-primary" />}
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    <div className="flex items-center gap-2 w-full">
                                        <Laptop2 className="h-4 w-4" />
                                        <span className="flex-1">System</span>
                                        {resolvedTheme === "system" && <Check className="h-4 w-4 text-primary" />}
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                {/* MOBILE MENU (only visible on mobile) */}
                <div className="flex items-center gap-4 md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="rounded-xl">
                                <Sun className="h-5 w-5 dark:hidden" />
                                <Moon className="h-5 w-5 hidden dark:block" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                <Sun className="h-4 w-4" />
                                <span className="flex-1">Light</span>
                                {resolvedTheme === "light" && <Check className="h-4 w-4 text-primary" />}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                <Moon className="h-4 w-4" />
                                <span className="flex-1">Dark</span>
                                {resolvedTheme === "dark" && <Check className="h-4 w-4 text-primary" />}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                <Laptop2 className="h-4 w-4" />
                                <span className="flex-1">System</span>
                                {resolvedTheme === "system" && <Check className="h-4 w-4 text-primary" />}
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="sm">
                                <Menu className="w-full h-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background text-foreground">
                            <div className="flex flex-col mt-8 space-y-6">
                                {[
                                    { label: "Home", href: "/" },
                                    { label: "Marketplace", href: "/marketplace" },
                                    { label: "Services", href: "/services" },
                                    { label: "About", href: "/about" },
                                    { label: "Contact", href: "/contact" },
                                ].map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={navigationMenuTriggerStyle({
                                            className: isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-primary",
                                        })}
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}

                                <div className="flex flex-col pt-6 border-t space-y-4">
                                    <Link href="/login" onClick={() => setOpen(false)}>
                                        <Button variant="outline" className="w-full">Login</Button>
                                    </Link>
                                    <Link href="/dashboard" onClick={() => setOpen(false)}>
                                        <Button className="w-full">Dashboard</Button>
                                    </Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
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