import { LanguageProvider } from "@/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Quiz } from "@/components/Quiz";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Litigation } from "@/components/Litigation";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Quiz />
        <HowItWorks />
        <About />
        <FAQ />
        <Litigation />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

