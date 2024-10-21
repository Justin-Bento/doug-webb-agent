import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Navigation />
      <main className="wrapper min-h-dvh my-24">
        <h1 className="text-xl font-bold"> Hello, Additional Information Page!</h1>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <Link href="/real-estate-process/additional-information/1" className="hover:underline">
              Additional Information - Step #1
            </Link>
          </li>
          <li>
            <Link href="/real-estate-process/additional-information/2" className="hover:underline">
              Additional Information - Step #2
            </Link>
          </li>
          <li>
            <Link href="/real-estate-process/additional-information/3" className="hover:underline">
              Additional Information - Step #3
            </Link>
          </li>
          <li>
            <Link href="/real-estate-process/additional-information/4" className="hover:underline">
              Additional Information - Step #4
            </Link>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
