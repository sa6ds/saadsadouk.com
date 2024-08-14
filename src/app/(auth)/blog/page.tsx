import Navbar from "@/app/assets/components/navbar/Navbar";

export default function Blog() {
  return (
    <main className="flex-grow flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[550px]">
        <Navbar />
      </div>
      <div className="w-full max-w-[550px]">
        <h1 className="text-5xl md:text-6xl lg:text-7xl">
          <span className="flex flex-col">
            <span className="mb-[-10px] text-slate-800 dark:text-slate-50 font-semibold tracking-tight sm:tracking-tighter">
              blog
            </span>
          </span>
        </h1>

        <div className="mt-10"></div>
      </div>
    </main>
  );
}
