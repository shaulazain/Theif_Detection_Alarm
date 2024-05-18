import ObjectDetection from "@/components/object-detection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex p-8 bg-black min-h-screen flex-col items-center">
      <h1 className="gradient-title font-extrabold lg:text-8xl tracking-tighter md:px-6 text-center text-white text-3xl md:text-6xl">Thief Detection Alarm</h1> 
      <ObjectDetection/>
    </main>
  );
}
