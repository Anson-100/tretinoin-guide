import Navbar from "@/components/Navbar";
import Hero from "@/components/scenes/Hero";
import Information from "@/components/scenes/Information";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Information />
      </main>
    </>
  );
}
