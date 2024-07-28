import Navbar from "@/app/assets/components/navbar/Navbar";

export default function About() {
  return (
    <main className="flex-grow flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[550px]">
        <Navbar />
      </div>
      <div className="w-full max-w-[550px]">
        <h1 className="text-5xl md:text-6xl lg:text-7xl">
          <span className="flex flex-col">
            <span className="mb-[-10px] text-slate-800 dark:text-slate-50 font-semibold tracking-tight sm:tracking-tighter">
              about
            </span>
          </span>
        </h1>

        <div className="mt-10">
          <h3 className="text-slate-800 mt-5 mb-1 dark:text-slate-50 font-bold text-xl tracking-normal">
            About me
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
            unde. Quisquam, molestiae! Atque quasi, blanditiis exercitationem
            amet, praesentium fugiat voluptas, vel soluta tenetur aliquid
            perspiciatis recusandae pariatur odit deleniti quisquam.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            amet vero, deserunt quod eligendi magnam molestias tempora dolor?
            Impedit quasi facilis iure sequi veritatis unde optio fugiat
            reprehenderit doloribus culpa?
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            amet vero, deserunt quod eligendi magnam molestias tempora dolor?
            Impedit quasi facilis iure sequi veritatis unde optio fugiat
            reprehenderit doloribus culpa? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Blanditiis amet vero, deserunt quod
            eligendi magnam molestias tempora dolor? Impedit quasi facilis iure
            sequi veritatis unde optio fugiat reprehenderit doloribus culpa?
          </p>
          <h3 className="text-slate-800 mt-5 mb-1 dark:text-slate-50 font-bold text-xl tracking-normal">
            Technical Contributions
          </h3>
          <ul className="list-disc pl-5 mt-2">
            <li className="mb-2">
              Interned at IPConfigure Inc., where I developed a web-based UI
              using Angular and TypeScript, making it easier for users to
              interact with IP camera streams.
            </li>
            <li className="mb-2">
              Founder and developer of flipassist, a successful full-stack web
              app for resellers that streamlines inventory management and boosts
              profitability.
            </li>
            <li className="mb-2">
              Organized and led coding workshops at local community centers,
              teaching programming basics and sparking interest in tech among
              high school students.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
