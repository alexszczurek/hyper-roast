import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-black text-center min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 relative">
        <div className="w-[28.45px] h-[28.44px] left-[1.78px] top-[1.78px] absolute">
        </div>
      </div>
      <p className="text-black text-[42px] font-medium font-['Inter Display']">Everything in one place</p>
    </div>
  );
}
