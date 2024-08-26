import Navbar from "@/app/components/navbar/Navbar";
import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex-grow flex h-screen flex-col items-center my-10 mx-4 sm:mx-6 lg:mx-8">
      <div className="w-full max-w-[550px]">
        <Navbar />
      </div>
      <div className="w-full max-w-[550px]">{children}</div>
    </main>
  );
}
