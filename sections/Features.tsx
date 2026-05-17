import { Brain, Briefcase, Users } from "lucide-react";
import FadeIn from "../components/FadeIn";

export default function Features() {
    
    return (
        <FadeIn>
<section
        id="features"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Explore Our <span className="text-cyan-400">Programs</span>
          </h2>
  
          <p className="mt-6 text-gray-400">
            Modern courses designed for future innovators.
          </p>
        </div>
  
        <div className="mt-16 grid gap-8 md:grid-cols-3">
  
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-violet-500/40">
            <h3 className="text-2xl font-semibold">
              Full Stack Development
            </h3>
  
            <p className="mt-4 text-gray-400">
              Learn React, Next.js, Node.js, databases, APIs and deployment.
            </p>
  
            <button className="mt-8 rounded-full bg-violet-600 px-6 py-3 hover:bg-violet-500">
              Learn More
            </button>
          </div>
  
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-violet-500/40">
            <h3 className="text-2xl font-semibold">
              Artificial Intelligence
            </h3>
  
            <p className="mt-4 text-gray-400">
              Build AI apps using Machine Learning and Generative AI.
            </p>
  
            <button className="mt-8 rounded-full bg-cyan-500 px-6 py-3 hover:bg-cyan-400">
              Learn More
            </button>
          </div>
  
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-violet-500/40">
            <h3 className="text-2xl font-semibold">
              UI/UX Design
            </h3>
  
            <p className="mt-4 text-gray-400">
              Design modern interfaces with Figma and design systems.
            </p>
  
            <button className="mt-8 rounded-full bg-pink-500 px-6 py-3 hover:bg-pink-400">
              Learn More
            </button>
          </div>
  
        </div>
        </section>
        </FadeIn>
    );
  }