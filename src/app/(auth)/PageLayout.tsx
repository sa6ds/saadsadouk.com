import Navbar from "@/app/components/navbar/Navbar";
import { Footer } from "@/app/components/footer/Footer";
import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center my-10 mx-4 sm:mx-6 lg:mx-8">
      <div className="w-full max-w-[550px]">
        <Navbar />
      </div>
      <div className="w-full max-w-[550px] flex-grow">{children}</div>
      <Footer />
    </main>
  );
}
