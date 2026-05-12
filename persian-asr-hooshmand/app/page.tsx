"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/campaigns");
  };

  return (
    <main className="grid min-h-screen place-items-center overflow-hidden bg-white px-6 py-24 md:px-8 md:py-32">
      <div className="text-center">
        <h1 className="text-text-primary mt-4 text-lg font-bold tracking-tight md:text-2xl">
          تسک انجام شده توسط حمیدرضا هزاری
        </h1>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={handleNavigate}
            className="inline-flex h-auto w-full max-w-md items-center justify-center rounded-md bg-[linear-gradient(90deg,#6D28D9_0%,#8B5CF6_100%)] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:outline-none md:max-w-2xl md:text-base"
          >
            مشاهده تسک
          </button>
        </div>
      </div>
    </main>
  );
}
