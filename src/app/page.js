import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Navbar />
        <p>Welcome to the home page</p>
      </main>
    </div>
  );
}
