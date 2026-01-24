"use client";

import { useState, useEffect } from "react";

import { Navbar, Footer } from "@/components/common";
import {
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
} from "@/components/sections";
import { PreLoader, Background } from "@/components/common";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(loadTimer);
  }, []);

  if (loading) return <PreLoader />;

  return (
    <div className="min-h-screen relative">
      <Background />
      <Navbar />
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <Footer />


    </div>
  );
}
