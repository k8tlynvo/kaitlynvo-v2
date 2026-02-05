"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function FitnessPage() {
  type Glow = "yellow" | "pink" | "green" | null;

  const [activeGlow, setActiveGlow] = useState<Glow>(null);
  const [paused, setPaused] = useState(false);
  const glowTimeout = useRef<NodeJS.Timeout | null>(null);


  useEffect(() => {
    if (paused) return;
  
    const order: Glow[] = ["pink"];
    let index = 0;
  
    const interval = setInterval(() => {
      setActiveGlow(order[index]);
  
      if (glowTimeout.current) {
        clearTimeout(glowTimeout.current);
      }
  
      glowTimeout.current = setTimeout(() => {
        setActiveGlow(null);
      }, 1000);
  
      index = (index + 1) % order.length;
    }, 6000);
  
    return () => {
      clearInterval(interval);
      if (glowTimeout.current) {
        clearTimeout(glowTimeout.current);
      }
    };
  }, [paused]);

  return (
    <div className="flex flex-col min-h-screen w-full items-center bg-[#EFEFD7] font-serif pt-2 px-2">
      <div className="relative flex flex-row h-[99vh] w-[99.8%] items-center overflow-hidden p-2 sm:items-start bg-linear-to-b from-[#FFFBFA] from-50%">
        {/* logo */}
        <Link href="/">
          <Image 
            className="m-2 shrink-0"
            width={34}
            height={34}
            src="./kvlogo.svg"
            alt="kv initials"
          />
        </Link>
        {/* gradient blurs */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {/* pink */}
          <div 
            className="animate-float-2 absolute bottom-0 left-1/2 h-[600px] w-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, #F0B8B8 0%, #F0B8B8 40%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
        </div>

        {/* text content */}
        <div className="relative z-10 flex flex-col w-full h-[96vh] self-center">
          <main className="h-fit w-[95%] justify-self-center mt-[25vh]">
            <h1 className="mt-8 text-2xl text-zinc-600">hi, i&apos;m a fitness professional</h1>
            <div className="flex flex-col justify-between w-[94%] ml-22 text-sm">
              <p className="mt-4 text-black w-fit">Certified Personal Trainer, American Council on Exercise (ACE)</p>
              <p className="mt-4 text-black w-fit">Senior Fitness Specialist, ACE</p>
              <p className="mt-4 text-black w-fit">First Aid/CPR/AED Certified, American Red Cross</p>
            </div>
            <div className="flex flex-row justify-between w-[94%] ml-auto italic">
              <a href="https://campusrecreation.ucdavis.edu/people/kaitlyn-vo">
                <p
                  className={`mt-4 text-black w-fit link-glow-pink transition-all duration-200 ${ activeGlow === "pink" ? "glow-pink" : ""}`} 
                  onMouseEnter={() => {
                    setPaused(true);
                
                    if (glowTimeout.current) {
                      clearTimeout(glowTimeout.current);
                      glowTimeout.current = null;
                    }
                
                    setActiveGlow("pink");
                  }}
                  onMouseLeave={() => {
                    setPaused(false);
                    setActiveGlow(null);
                  }}
                >at UC Davis Living Well.</p>
              </a>
              <p className="mt-4 text-black w-fit">Apr. - Dec. 2025</p>
            </div>
          </main>
          <footer className="w-full self-end mt-auto">
            <div className="text-[#696969] text-sm self-end text-right mt-2">
              <b>contact</b> -{" "}
              <a href="mailto:kaitlynqvo@gmail.com" title="kaitlynqvo@gmail.com" className="link-glow-green">email</a>
              {" "}|{" "}
              <a href="https://www.linkedin.com/in/kaitlynqvo" target="_blank" rel="noopener noreferrer" className="link-glow-green">linkedin</a>
            </div>
        </footer>
        </div> 
      </div>
    </div>
  );
}
