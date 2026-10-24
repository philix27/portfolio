import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Featured } from "@/components/Featured";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Interests } from "@/components/Interests";
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
        <Interests />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
