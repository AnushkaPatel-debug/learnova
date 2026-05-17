export default function Footer() {
    return (
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
  
          <div>
            <h2 className="text-2xl font-bold">
              Learn<span className="text-violet-500">ova</span>
            </h2>
  
            <p className="mt-2 text-gray-400">
              Building future innovators through modern education.
            </p>
          </div>
  
          <div className="flex gap-6 text-gray-400">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
  
        </div>
      </footer>
    );
  }