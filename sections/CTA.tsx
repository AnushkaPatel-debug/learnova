export default function CTA() {
    return (
      <section className="px-6 py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] p-[1px]">
        <div className="animate-border absolute inset-0 rounded-[40px] bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500"></div>
        <div className="relative rounded-[40px] bg-[#0b1120] p-12 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Start Your Tech Journey Today
          </h2>
  
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Learn AI, Full Stack Development, and future-ready skills
            with immersive modern education.
          </p>
  
          <button className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
            Join Learnova
          </button>
  </div>
        </div>
      </section>
    );
  }