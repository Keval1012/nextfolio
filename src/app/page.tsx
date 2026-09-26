import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { EngineeringHighlights } from "@/components/sections/EngineeringHighlights";
import { Education } from "@/components/sections/Education";
import { GithubSection } from "@/components/sections/GithubSection";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { BackToTop } from "@/components/common/BackToTop";
import { BackgroundEffect } from "@/components/common/BackgroundEffect";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-cyan-500/20 selection:text-cyan-400">
      {/* Scroll indicator at top */}
      <ScrollProgress />

      {/* Futuristic subtle background glow & grid */}
      <BackgroundEffect />

      {/* Sticky header navigation */}
      <Navbar />

      {/* Main page content landmarks */}
      <main className="flex-1 w-full" id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EngineeringHighlights />
        <Education />
        <GithubSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back-To-Top button */}
      <BackToTop />
    </div>
  );
}
