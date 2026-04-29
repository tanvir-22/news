import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import Marq from "@/components/shared/Marq";
import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { redirect } from "next/navigation";

export default async function Home() {
  return (
    <div>
      <main>
        <Header />
        <Navbar />
        <Marq />

        {redirect("/category/01")}
      </main>
    </div>
  );
}
