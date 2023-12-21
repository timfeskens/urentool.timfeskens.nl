import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function DesignSection() {
  const line = useRef<HTMLDivElement>(null);
  const lineWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: lineWrapper.current,
        // top of the trigger element
        start: "top center",
        // end: () => "+=" + lineWrapper.current?.offsetHeight!,
        end: "bottom top",
        scrub: true,
      },
    });
    tl.fromTo(line.current, { scaleY: 0 }, { scaleY: 0.9, ease: "none" });

    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      tl.kill();
    };
  }, []);

  return (
    <div
      className="mx-auto px-4 sm:px-6 md:px-48 bg-gradient-to-b from-20% from-neutral-100 to-gray-900  text-black leading-8 relative"
      ref={lineWrapper}
    >
      <div
        className="lineInitial absolute left-[50%] top-20 w-1 -translate-x-1/2 h-full bg-white drop-shadow-sm shadow-black origin-top scale-y-0 z-0"
        ref={line}
      ></div>

      <div className="min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <div className="font-bold text-4xl relative drop-shadow-md">
            <div className="mb-4 ">
              van
              <span className="ml-2 text-blue-600">design..</span>
            </div>
            <div className="max-w-4xl">
              <Image
                src="/figma_1.png"
                alt="hero"
                width={1920}
                height={1080}
                className="h-auto w-auto my-auto"
              />
            </div>
          </div>
          <div className="font-bold text-4xl mt-48 relative drop-shadow-md">
            <div className="mb-4 ">
              naar het eerste
              <span className="ml-2 text-blue-600">product..</span>
            </div>
            <div className="max-w-4xl">
              <Image
                src="/moneybird_uren.png"
                alt="hero"
                width={1920}
                height={1080}
                className="h-auto w-auto my-auto"
              />
            </div>
          </div>
          <div className="font-bold text-4xl mt-48 relative drop-shadow-md">
            <div className="mb-4 text-white">
              en een
              <span className="ml-2 text-blue-600">uitbreiding..</span>
            </div>
            <div className="max-w-4xl">
              <Image
                src="/figma_2.png"
                alt="hero"
                width={1920}
                height={1080}
                className="h-auto w-auto my-auto"
              />
            </div>
          </div>
          <div className="font-bold text-4xl mt-48 relative drop-shadow-md">
            <div className="mb-4 text-white">
              tot het uiteindelijke
              <span className="ml-2 text-blue-600">product</span>
            </div>
            <div className="max-w-4xl">
              <Image
                src="/moneybird_planning.png"
                alt="hero"
                width={1920}
                height={1080}
                className="h-auto w-auto my-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignSection;
