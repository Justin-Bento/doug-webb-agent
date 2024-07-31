import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function page() {
  return (
    <>
    <Navigation />
      <main className="container mx-auto min-h-dvh px-4 py-5 sm:p-6">
        <h1>Home</h1>
      </main>
    <Footer/>
    </>
  );
}
