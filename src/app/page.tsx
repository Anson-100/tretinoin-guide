import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/scenes/Hero";
import Information from "@/components/scenes/Information";
import Videos from "@/components/scenes/Videos";
import Conclusion from "@/components/scenes/Conclusion";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Information />
        <Videos />
        <Conclusion />
      </main>
      <Footer />
    </>
  );
}
