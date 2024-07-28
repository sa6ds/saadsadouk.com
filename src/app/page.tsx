import Image from "next/image";
import Navbar from "./assets/components/navbar/Navbar";

const ImageItem = ({ src, rotate }: { src: string; rotate: boolean }) => (
  <div className="relative h-64 w-48 md:h-72 md:w-56">
    <Image
      src={src}
      alt="Picture of the author"
      layout="fill"
      className={`object-cover overflow-hidden rounded-xl ${
        rotate ? "rotate-1" : "-rotate-1"
      }`}
    />
  </div>
);

export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[550px] h-96">
        <Navbar />

        <div className="text-slate-800 dark:text-slate-50 font-semibold tracking-[-2.3px] sm:tracking-[-3.3px] md:tracking-[-4.3px]">
          <h1 className="text-5xl sm:text-6xl md:text-7xl">
            <span className="flex flex-col items-start">
              <span className="mb-[-5px] sm:mb-[-10px]">meet saad,</span>
              <span className="text-5xl sm:text-6xl md:text-7xl whitespace-nowrap">
                software engineer
              </span>
            </span>
          </h1>
        </div>

        <div className="mt-4">
          <p>Full-Stack Developer and student at George Mason University</p>
        </div>
      </div>

      <div className="w-full pointer-events-none py-2 -mt-40 sm:-mt-36 md:-mt-28 overflow-x-visible">
        <div className="flex justify-center -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="min-w-max min-h-max flex flex-nowrap space-x-4 md:space-x-8">
            <ImageItem src="/img-2.jpg" rotate />
            <ImageItem src="/img-1.jpg" rotate={false} />
            <ImageItem src="/img-5.jpg" rotate />
            <ImageItem src="/img-4.jpg" rotate={false} />
            <ImageItem src="/img-3.jpg" rotate />
          </div>
        </div>
      </div>
    </main>
  );
}
