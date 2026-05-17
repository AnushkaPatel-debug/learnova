"use client";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Features from "../sections/Features";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import Footer from "../sections/Footer";
import Stats from "../sections/stats";
import FAQ from "../sections/FAQ";
import CursorGlow from "../components/CursorGlow";
import Particles from "../components/Particles";
import AuthModal from "../components/AuthModal";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <main className="relative z-10">
      <div className="grid-bg fixed inset-0 z-0"></div>
      <AuthModal open={open} setOpen={setOpen} />
      <CursorGlow />
      <Particles />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Features />
      <Testimonials />
      <CTA setOpen={setOpen} />

      <FAQ />
      <Footer />

    </main>
  );
}