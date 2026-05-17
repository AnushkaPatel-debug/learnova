export default function Testimonials() {
    return (
      <section
        id="testimonials"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            What Students <span className="text-violet-500">Say</span>
          </h2>
  
          <p className="mt-6 text-gray-400">
            Thousands of learners are building their future with Learnova.
          </p>
        </div>
  
        <div className="mt-16 grid gap-8 md:grid-cols-3">
  
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-violet-500/40">
            <p className="text-gray-300">
              “The best learning platform I’ve used. The projects helped me land internships.”
            </p>
  
            <div className="mt-6">
              <h4 className="text-lg font-semibold">Anushka patel</h4>
              <p className="text-gray-500">Frontend Developer</p>
            </div>
          </div>
  
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-violet-500/40">
            <p className="text-gray-300">
              “Amazing UI, mentors, and practical teaching style. Highly recommended.”
            </p>
  
            <div className="mt-6">
              <h4 className="text-lg font-semibold">Soumya Rai</h4>
              <p className="text-gray-500">AI Student</p>
            </div>
          </div>
  
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-violet-500/40">
            <p className="text-gray-300">
              “I improved my full stack skills and built real-world projects confidently.”
            </p>
  
            <div className="mt-6">
              <h4 className="text-lg font-semibold">Priyanjali Swami</h4>
              <p className="text-gray-500">Software Engineer</p>
            </div>
          </div>
  
        </div>
      </section>
    );
  }