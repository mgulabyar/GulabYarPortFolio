import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";

export default function Main() {
  return (
    <div className="relative z-10 max-w-350 mx-auto px-6 md:px-12">
      <Hero />
      <About />
      <Contact />
    </div>
  );
}
