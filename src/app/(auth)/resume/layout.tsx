// src/app/(auth)/resume/layout.tsx

import Navbar from "@/app/assets/components/navbar/Navbar";
import { ReactNode } from "react";

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex-grow flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[550px]">
        <Navbar />
      </div>
      <div className="w-full max-w-[550px]">{children}</div>
    </main>
  );
}
