import dynamic from 'next/dynamic';
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

// Import komponen yang memerlukan akses ke DOM hanya di sisi klien
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Grid = dynamic(() => import('@/components/Grid'), { ssr: false });
const RecentProject = dynamic(() => import('@/components/RecentProject'), { ssr: false });
const Certificates = dynamic(() => import('@/components/Certificates'), { ssr: false });
const Experiences = dynamic(() => import('@/components/Experiences'), { ssr: false });
const Approach = dynamic(() => import('@/components/Approach'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Certificates />
        <Experiences />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
