import BackgroundPattern from "@/components/BackgroundPattern";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

export default function page() {
  return (
    <>
      <Navigation />
      <main className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <section className="md:col-span-12 relative overflow-hidden">
          <BackgroundPattern className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-gradient-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent" />
          <div className="absolute inset-0 z-20 flex flex-col items-start justify-center container mx-auto">
            <h1 className="max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-black dark:text-white sm:text-6xl">
              Contact.
            </h1>
          </div>
        </section>
        <section className="w-full h-auto md:col-span-4 space-y-4 p-8">
          <div className="">
            <p className="font-semibold text-black dark:text-white">Douglas John Webb</p>
            <p className="font-semibold text-black dark:text-white">Real Estate Representative</p>
            <p className="font-semibold text-black dark:text-white">Right At Home Realty Inc.</p>
          </div>
          <div className="w-full h-[0.05rem] bg-black"></div>
          <div className="">
            <p className="font-medium text-black/50 dark:text-white">Direct: 416.845.9322</p>
            <p className="font-medium text-black/50 dark:text-white">Office: 905.663.250</p>
            <p className="font-medium text-black/50 dark:text-white">Email: abc123@gmail.com</p>
          </div>
        </section>
        <section className="w-full h-auto md:col-span-8">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
