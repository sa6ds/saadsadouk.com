import Navbar from "@/app/assets/components/navbar/Navbar";
import Link from "next/link";

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
            I am currently a software developer pursuing my Bachelor of Science
            in Computer Science at George Mason University. Originally from the
            Virginia Beach area, I’ve developed a deep passion for software
            development and open-source projects.
          </p>
          <p className="mt-4">
            My journey into the world of technology began in my early teens,
            sparked by a curiosity about how computers and the software we use
            every day actually work. This fascination drove me to pursue an
            Associate of Computer Science at Virginia Peninsula Community
            College, where I achieved a GPA of 3.9.
          </p>
          <p className="mt-4">
            I gained some valuable experience as a Software Developer Intern at
            IPConfigure Inc., where I worked on developing features for a
            web-based UI using Angular and TypeScript. This internship was my
            first real taste of the professional software development world, and
            I loved collaborating with a talented team. It taught me how to
            navigate the challenges of the software development life cycle and
            deepened my understanding of industry standards and practices.
          </p>
          <p className="mt-4">
            As a former reseller, I knew firsthand the challenges of managing
            inventory and the need for a comprehensive toolkit. This insight
            inspired me to create{" "}
            <Link
              target="_blank"
              className="border-b border-gray-300 transition-[border-color] hover:border-gray-600 dark:border-gray-500 dark:hover:border-white"
              href={"https://github.com/sa6ds/flipassist"}
            >
              flipassist
            </Link>
            , a full-stack web application designed to simplify inventory
            management for resellers.
          </p>

          <p className="mt-4">
            I saw a gap in the market for an all-in-one solution, so I thought,
            “What if I could build something that really helps?” I dedicated my
            evenings to developing the app, focusing on features that would
            address the specific needs of resellers. When I launched the beta
            version, I was thrilled to see it quickly gain traction among others
            in the community. It felt rewarding to create something that I knew
            would make a difference for people like me.
          </p>

          <p className="mt-4">
            I am passionate about building quality software that enhances user
            experiences. My goal is to contribute to meaningful projects and
            develop innovative solutions that make a positive impact. I look
            forward to joining a team where I can apply my skills as a software
            engineer to create valuable products.
          </p>

          <h3 className="text-slate-800 mt-5 mb-1 dark:text-slate-50 font-bold text-xl tracking-normal">
            Technical Contributions
          </h3>
          <ul className="list-disc pl-5 mt-2">
            <li className="mb-2">
              Interned at{" "}
              <Link
                target="_blank"
                className="border-b border-gray-300 transition-[border-color] hover:border-gray-600 dark:border-gray-500 dark:hover:border-white"
                href={"https://www.ipconfigure.com/"}
              >
                IPConfigure Inc.
              </Link>
              , where I developed a web-based UI using Angular and TypeScript,
              making it easier for users to interact with IP camera streams.
            </li>
            <li className="mb-2">
              Founder and developer of{" "}
              <Link
                target="_blank"
                className="border-b border-gray-300 transition-[border-color] hover:border-gray-600 dark:border-gray-500 dark:hover:border-white"
                href={"https://github.com/sa6ds/flipassist"}
              >
                flipassist
              </Link>
              , a successful full-stack web app for resellers that streamlines
              inventory management and boosts profitability.
            </li>
            <li className="mb-2">
              Actively contributed to high-profile open source projects,
              including a library with over 500 stars on GitHub, improving code
              quality and adding new features.
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
