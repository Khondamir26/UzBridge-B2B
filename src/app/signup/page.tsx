"use client";

import { GiSuspensionBridge } from "react-icons/gi";
import { SignUpForm } from "@/components/signup-form"
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center font-medium text-2xl text-primary">
          <div className="flex items-center justify-center">
            <GiSuspensionBridge className="size-10" />
          </div>
          UzBridge.AI
        </Link>
        <SignUpForm />
      </div>
    </div>
  )
}