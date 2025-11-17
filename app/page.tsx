import ContentSection from "@/components/content-3";
import Features from "@/components/features-3";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-6";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <Features/>
      <IntegrationsSection />
      <Footer />
    </>
  );
}
