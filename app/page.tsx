"use client";
import { LangProvider } from "@/components/LangContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Systems from "@/components/Systems";
import Platform from "@/components/Platform";
import Industries from "@/components/Industries";
import Newsroom from "@/components/Newsroom";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <div className="bg-black min-h-screen">
        <Navbar />
        <main className="pt-14">
          <Hero />
          <Mission />
          <Systems />
          <Platform />
          <Industries />
          <Newsroom />
          <Vision />
          <Contact />
          <Footer />
        </main>
      </div>
    </LangProvider>
  );
}
