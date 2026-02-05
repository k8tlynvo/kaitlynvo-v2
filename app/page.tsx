import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center bg-[#EFEFD7] font-serif pt-2 px-2">
      <main className="relative flex flex-row h-[99vh] w-[99.8%] items-center overflow-hidden p-2 sm:items-start bg-linear-to-b from-[#FFFBFA] from-50%">
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
        {/* yellow */}
        <div 
          className="animate-float-1 absolute -right-20 -top-20 h-[700px] w-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #F0CB2D 0%, #F0CB2D 5%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* pink */}
        <div 
          className="animate-float-2 absolute bottom-0 left-1/4 h-[600px] w-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #F0B8B8 0%, #F0B8B8 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* green */}
        <div 
          className="animate-float-3 absolute -bottom-10 right-10 h-[300px] w-[300px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #A3A353 0%, #A3A353 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>
      {/* text content */}
      <div className="relative z-10 flex flex-row items-center w-full h-[96vh] self-center">
        <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left self-center ml-20 w-md">
          <h1 className="text-2xl leading-18 tracking-tight text-black ">
            hi, i&apos;m kaitlyn vo.
          </h1>
          <p className="text-lg text-zinc-600 italic ml-18">
            a{" "}
            <Link href="/swe" className="font-medium link-glow-yellow">
              software engineer.
            </Link>
          </p>
          <p className="text-lg text-zinc-600 italic ml-18">
            a{" "}
            <Link href="/fitness" className="font-medium link-glow-pink">
              fitness professional.
            </Link>
          </p>
          <p className="text-lg text-zinc-600 italic ml-18 w-fit">
            a{" "}
            <Link href="/florals" className="font-medium link-glow-green">
              florist.
            </Link>
          </p>
        </div>
        <footer className="w-full self-end">
          <div className="text-[#696969] text-sm self-end text-right mt-2">
            <b>contact</b> -{" "}
            <a href="mailto:kaitlynqvo@gmail.com" title="kaitlynqvo@gmail.com" className="link-glow-green">email</a>
            {" "}|{" "}
            <a href="https://www.linkedin.com/in/kaitlynqvo" target="_blank" rel="noopener noreferrer" className="link-glow-green">linkedin</a>
          </div>
        </footer>
      </div>
      </main>
    </div>
  );
}
