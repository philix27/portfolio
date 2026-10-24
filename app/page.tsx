import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Featured } from "@/components/Featured";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Featured />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
