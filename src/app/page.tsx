import Navbar from "@/components/Navbar";
import Hero from "@/components/scenes/Hero";
import Information from "@/components/scenes/Information";
import Cleansers from "@/components/scenes/Cleansers";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Information />
        <Cleansers />
      </main>
    </>
  );
}
