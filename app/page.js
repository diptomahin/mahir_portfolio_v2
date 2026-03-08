import { Suspense } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PerformanceGrid from "@/components/PerformanceGrid";
import Playbook from "@/components/Playbook";
import CaseStudies from "@/components/CaseStudies";
import QualificationForm from "@/components/QualificationForm";
import ContactFooter from "@/components/ContactFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 overflow-x-hidden">
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
      <Suspense fallback={null}>
        <PerformanceGrid />
      </Suspense>
      <Suspense fallback={null}>
        <Playbook />
      </Suspense>
      <Suspense fallback={null}>
        <CaseStudies />
      </Suspense>
      <Suspense fallback={null}>
        <QualificationForm />
      </Suspense>
      <Suspense fallback={null}>
        <ContactFooter />
      </Suspense>
      <FloatingWhatsApp />
    </div>
  );
}

