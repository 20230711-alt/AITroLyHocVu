import AIBackground from "./AIBackground";

interface Props{
  children: React.ReactNode;
}

export default function AILayout({children}:Props){

  return(
    <div className="min-h-screen bg-[#020b1f] text-white relative overflow-hidden">

      <AIBackground/>

      <div className="relative z-10">
        {children}
      </div>

    </div>
  )
}
