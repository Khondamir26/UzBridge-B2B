import type { Metadata } from "next";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // adjust as needed
  variable: "--font-poppins",
  display: "swap",
});



export const metadata: Metadata = {
  title: "TechBridge.AI",
  description: "Connecting Uzbek tech with MEA market opportunities.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} font-sans antialiased`}>
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <SidebarProvider defaultOpen={defaultOpen}>

            <AppSidebar />
            <main className="w-full">
              <Navbar />
              <div>{children}</div>
            </main>

          </SidebarProvider>

        </ThemeProvider>

        <Toaster position="top-center" richColors duration={5000} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
