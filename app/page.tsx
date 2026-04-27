import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientsBar from "@/components/ClientsBar";
import Services from "@/components/Services";
import AboutSection from "@/components/AboutSection";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30]">
      <Navbar />
      <main>
        <Hero />
        <ClientsBar />
        <Services />
        <AboutSection />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <CtaSection />
        <HomeContact />
      </main>
      <Footer />
    </div>
  );
}
