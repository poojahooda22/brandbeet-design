'use client';

import { useEffect} from 'react';
import Navbar from "@/components/navbar/Index";
import Landing from '@/components/landing/Index';
import About from '@/components/about/Index';
import Cards from '@/components/cards/Index';
import Summary from '@/components/summary/Index';
import CurvedSec from '@/components/curved/Index';
import Work from '@/components/mywork/Index';
import Footer from '@/components/footer/Index';


export default function Home() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main className="">
      <Navbar/>
      <Landing/>
      <About/>
      <Cards/>
      <Summary/>
      <CurvedSec/>
      <Work/>
      <Footer/>
    </main>
  );
}
