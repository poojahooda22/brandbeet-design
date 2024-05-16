'use client';

import { useEffect} from 'react';
import Navbar from "@/components/navbar/Index";
import Landing from '@/components/landing/Index';


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
    </main>
  );
}
