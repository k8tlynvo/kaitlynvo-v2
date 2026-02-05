import Link from "next/link";
import Image from "next/image";

export default function FloralsPage() {
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
          {/* green */}
          <div 
            className="animate-float-3 absolute -bottom-5 left-20 h-[400px] w-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, #A3A353 0%, #A3A353 40%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
        </div>

        {/* text content */}
        <div className="relative z-10 flex flex-col w-full h-[96vh] self-center">
          <main className="h-fit w-[95%] justify-self-center mt-[25vh]">
            <h1 className="mt-8 text-2xl text-zinc-600">hi, i&apos;m a florist</h1>
            <div className="flex flex-row justify-between w-[94%] ml-auto italic">
              <a href="https://www.instagram.com/floweringquyen?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"><p className="mt-4 text-black w-fit link-glow-green">@floweringquyen.</p></a>
              <div className="flex flex-col text-sm ">
                <Image 
                  className="m-2 shrink-0 rounded-sm"
                  width={200}
                  height={200}
                  src="/floweringquyen.jpg"
                  alt="flower bouquet"
                />
                <p className="text-zinc-600 w-fit self-end hover:underline">make yours</p>
              </div>
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
