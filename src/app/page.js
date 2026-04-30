import { redirect } from "next/navigation";

export default async function Home() {
  return (
    <div>
      <main>{redirect("/category/01")}</main>
    </div>
  );
}
