import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/solid";

export function TitelSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        opacity: 1,
        transform: "scale(1)",
      },
      {
        opacity: 0,
        transform: "scale(1.5)",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "100 top",
          scrub: 0.6,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);
  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="flex justify-center items-center flex-col h-[calc(100vh-64px)] w-screen bg-gradient-to-b from-20% from-gray-900 to-neutral-600 relative"
        >
          <>
            <div className="text-4xl md:text-6xl">Afstudeerproject</div>
            <div className="flex group justify-center text-xl md:text-3xl text-neutral-100 opacity-70 hover:opacity-100">
              <span className="mr-2 mt-1">Urentool voor</span>
              <Link href="https://savvy.codes/" passHref={true} target="_blank">
                <span className="relative">
                  <Image
                    src="/savvy.svg"
                    alt="Savvy.codes Logo"
                    width={200}
                    height={20}
                    className="leading-3 text-base  transition duration-300 group-hover:cursor-pointer"
                  />
                </span>
                <div className="block -mt-2 ml-12 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-neutral-100"></div>
              </Link>
              <LinkIcon className="ml-2 my-auto opacity-0 w-5 h-5 inline-block group-hover:opacity-100 transition-all duration-500" />
            </div>
          </>
        </div>
      </div>
    </section>
  );
}
