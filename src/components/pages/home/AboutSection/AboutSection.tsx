// components/about/AboutHero.tsx
import { ArrowRight } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative bg-black min-h-screen py-16 md:py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
      {/* Optional subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-purple-950/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN - Headline + Placeholder + Button */}
        <div className="space-y-10 lg:space-y-14 order-2 lg:order-1">
          {/* Small label + decorative wave */}
          <div className="relative">
            <p className="text-sm md:text-base font-semibold text-blue-400 tracking-wider flex items-center gap-2.5">
              <span className="text-2xl leading-none">•</span>
              ABOUT US
            </p>

            {/* Dotted wavy line (SVG for perfect curve) */}
            <svg
              className="absolute -top-8 left-0 w-40 md:w-64 h-14 text-blue-600/50"
              viewBox="0 0 200 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 25 Q 50 5, 100 25 T 200 25"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8 6"
              />
            </svg>
          </div>

          {/* Main headline - matches size hierarchy & italic parts */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
            We Are <span className="text-blue-500">Digital</span>
            <br />
            Game-Changers With
            <br />
            A Good Vibe Attitude,
            <br />
            Driven By <span className="italic font-light text-gray-300">Human Connection</span>.
            <br />
            And A <span className="italic font-light text-gray-300">Growth Mindset</span>.
          </h1>

          {/* Blue button */}
          <div className="pt-4">
            <button className="
              group inline-flex items-center gap-3 
              bg-blue-600 hover:bg-blue-700 
              text-white font-medium 
              px-8 py-4 rounded-lg
              transition-all duration-300
              shadow-lg shadow-blue-900/30
              hover:shadow-xl hover:shadow-blue-800/40
              active:scale-[0.98]
            ">
              Learn More
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Gray placeholder rectangle (bottom left) */}
          <div className="mt-12 lg:mt-16">
            <div className="
              aspect-[4/3] w-full max-w-md lg:max-w-lg 
              bg-gray-800/40 rounded-2xl 
              border border-gray-700/50 
              flex items-center justify-center 
              text-gray-500 text-xl font-medium
            ">
              [ Your Image / Graphic / Video Here ]
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - CEO Message */}
        <div className="space-y-8 md:space-y-10 order-1 lg:order-2 text-gray-200">
          <div className="space-y-4">
            <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-gray-400">
              MESSAGE FROM OUR CEO
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Rakibul Hassan
            </h2>
          </div>

          <div className="space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              We're a passionate team of UI/UX designers dedicated to creating intuitive digital experiences. With years of experience, we blend creativity and strategy to design solutions that engage users and drive business success.
            </p>

            <p>
              We turn ideas into seamless, beautiful designs. Let's build digital experiences that not only look stunning but also deliver real results.
            </p>

            <p className="text-gray-400 italic">
              In a changing environment, we create digital solutions that help brands move forward, adapt, and thrive. Each project drives their evolution with vision, focus, and results.
            </p>

            <p>
              We're a passionate team of UI/UX designers dedicated to creating intuitive experiences. With years of experience, we blend creativity and strategy to design solutions that engage users and drive business success.
            </p>

            <p>
              We turn ideas into seamless, beautiful designs. Let's build digital experiences that not only look stunning but also deliver real results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}