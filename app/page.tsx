import { Hero } from "../components/sections/hero";
import { Work } from "@/components/sections/work";
import { Contact } from "@/components/sections/contact";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}
