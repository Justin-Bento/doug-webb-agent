import Link from "next/link";
import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navigation from "../../components/Navigation";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="container mx-auto min-h-dvh px-4 py-5 sm:p-6 my-16">
        <section id="header">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="font-semibold text-2xl md:text-4xl md:leading-tight">Contact us</h2>
            <p className="mt-1 text-neutral-400">Whatever your goal - we will get you there.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
              <form>
                <div className="space-y-4">
                  {/* Input */}
                  <div className="relative">
                    <input
                      type="text"
                      id="hs-tac-input-name"
                      className="peer p-4 block w-full border border-black/50 rounded-lg text-sm  placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-primary disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                      placeholder="Name"
                    />
                    <label
                      htmlFor="hs-tac-input-name"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Name
                    </label>
                  </div>
                  {/* End Input */}
                  {/* Input */}
                  <div className="relative">
                    <input
                      type="email"
                      id="hs-tac-input-email"
                      className="peer p-4 block w-full border border-black/50 rounded-lg text-sm  placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-primary disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="hs-tac-input-email"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Email
                    </label>
                  </div>
                  {/* End Input */}
                  {/* Input */}
                  <div className="relative">
                    <input
                      type="text"
                      id="hs-tac-input-company"
                      className="peer p-4 block w-full border border-black/50 rounded-lg text-sm  placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-primary disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                      placeholder="Company"
                    />
                    <label
                      htmlFor="hs-tac-input-company"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Company
                    </label>
                  </div>
                  {/* End Input */}
                  {/* Input */}
                  <div className="relative">
                    <input
                      type="text"
                      id="hs-tac-input-phone"
                      className="peer p-4 block w-full border border-black/50 rounded-lg text-sm  placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-primary disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                      placeholder="Phone"
                    />
                    <label
                      htmlFor="hs-tac-input-phone"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Phone
                    </label>
                  </div>
                  {/* End Input */}
                  {/* Textarea */}
                  <div className="relative">
                    <textarea
                      id="hs-tac-message"
                      className="peer p-4 block w-full border border-black/50 rounded-lg text-sm  placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-primary disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                      placeholder="This is a textarea placeholder"
                      defaultValue={""}
                    />
                    <label
                      htmlFor="hs-tac-message"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Tell us about your project
                    </label>
                  </div>
                  {/* End Textarea */}
                </div>
                <div className="mt-2">
                  <p className="text-xs text-neutral-500">All fields are required</p>
                  <Link className="" href="#">
                    <Button size="sm" className=" mt-5">
                      Submit
                    </Button>
                  </Link>
                </div>
              </form>
            </div>
            {/* End Col */}
            <div className="space-y-14">
              {/* Item */}
              <div className="flex gap-x-5">
                <svg
                  className="shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <div className="grow">
                  <h4 className=" font-semibold">Our address:</h4>
                  <address className="mt-1 text-neutral-400 text-sm not-italic">
                    300 Bath Street, Tay House
                    <br />
                    Glasgow G2 4JR, United Kingdom
                  </address>
                </div>
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="flex gap-x-5">
                <svg
                  className="shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <div className="grow">
                  <h4 className=" font-semibold">Email us:</h4>
                  <a
                    className="mt-1 text-neutral-400 text-sm hover:text-neutral-200 focus:outline-none focus:text-neutral-200"
                    href="#mailto:example@site.co"
                    target="_blank"
                  >
                    hello@example.so
                  </a>
                </div>
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="flex gap-x-5">
                <svg
                  className="shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 11 18-5v12L3 14v-3z" />
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
                <div className="grow">
                  <h4 className=" font-semibold">We&#39;re hiring</h4>
                  <p className="mt-1 text-neutral-400">
                    We&#39;re thrilled to announce that we&#39;re expanding our team and looking for talented
                    individuals like you to join us.
                  </p>
                  <p className="mt-2">
                    <a
                      className="group inline-flex items-center gap-x-2 font-medium text-sm text-black decoration-2 hover:underline focus:outline-none focus:underline"
                      href="#"
                    >
                      Job openings
                      <svg
                        className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
              {/* End Item */}
            </div>
            {/* End Col */}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
