import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import MouseGradient from "@/components/MouseGradient";

export default function Home() {
  return (
    <div className="relative">
      <MouseGradient />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:gap-12">
          <Header />
          <div className="hidden lg:block lg:w-px lg:self-stretch lg:bg-navy-lighter lg:my-24 lg:shrink-0" />
          <main className="pt-24 lg:w-[55%] lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Skills />
          </main>
        </div>
      </div>
    </div>
  );
}
