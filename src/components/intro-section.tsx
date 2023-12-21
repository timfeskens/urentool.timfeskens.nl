import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

function IntroSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
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

  useEffect(() => {
    const pin = gsap.fromTo(
      ".img-gsap",
      {
        opacity: 0,
      },
      {
        opacity: 0.5,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: ".img-gsap",
          start: "center -60%",
          scrub: 1,
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
          className="h-screen w-[400vw] flex flex-row relative bg-gradient-to-b from-neutral-600 to-neutral-100 text-black leading-8 "
        >
          <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex items-center h-[80vh] md:h-[50vh] max-w-6xl mx-8 shadow-md p-8 bg-white overflow-hidden">
              <div className=" flex-col">
                <div className="font-bold text-4xl mb-2">
                  In 't <span className="text-blue-600">kort</span>
                </div>
                <div className="tracking-wider text-neutral-700 flex justify-between gap-2 md:gap-x-10 overflow-auto">
                  <div>
                    Deze website gaat over de ontwikkeling van een innovatieve
                    urenregistratie-applicatie voor
                    <span className="text-black"> Savvy.codes. </span>Aanleiding
                    voor deze ontwikkeling was de vaststelling dat de huidige
                    uren- en projectadministratie, die beheerd werd in
                    <span className="text-black"> Moneybird</span>, beperkingen
                    kende qua functionaliteit en flexibiliteit.
                  </div>
                  <div>
                    Savvy.codes is gespecialiseerd in het ontwerpen,
                    ontwikkelen, onderhouden en optimaliseren van
                    gebruiksvriendelijke digitale producten en software zoals
                    applicaties, dashboards, tools, portalen, websites en
                    automatiseringen.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex justify-between h-[80vh] md:h-[50vh] max-w-4xl mx-8 shadow-md p-8 bg-white relative overflow-hidden">
              <div className="w-1/2 hidden md:flex items-center">
                <Image
                  src="/moneybird.png"
                  alt="hero"
                  width={500}
                  height={500}
                  className="h-auto my-auto px-2 md:px-20 "
                />
              </div>
              <div className="w-full md:w-1/2 flex items-center">
                <div className=" flex-col">
                  <div className="font-bold text-4xl mb-1 z-50 relative">
                    Het <span className="text-blue-600">probleem</span>
                  </div>

                  <div className="tracking-wider text-neutral-700 overflow-auto">
                    De huidige uren en projectadministratie van
                    <span className="text-black"> Savvy.codes</span> zit in het
                    programma <span className="text-black">Moneybird</span>.
                    Daar houden de collega's hun uren bij voor de projecten waar
                    ze aan werken. De uren- module in Moneybird is alleen onwijs
                    beperkt en voldoet niet aan hun vraag, daarom wilden zij een
                    eigen applicatie bouwen die met de administratie van
                    Moneybird praat.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex items-center h-[80vh] md:h-[50vh] max-w-3xl mx-8 shadow-md p-8 bg-white relative">
              <div className="absolute bottom-[17vh] -left-[25vw]">
                <Image
                  src="/react.png"
                  alt="hero"
                  width={150}
                  height={150}
                  className="p-2 img-gsap"
                />
              </div>
              <div className="absolute bottom-[50%] -right-[25vw]">
                <Image
                  src="/nextjs.png"
                  alt="hero"
                  width={200}
                  height={200}
                  className="p-2 img-gsap"
                />
              </div>
              <div className="flex-col">
                <div className="font-bold text-4xl mb-1 z-50 relative">
                  De <span className="text-blue-600">oplossing</span>
                </div>

                <div className="tracking-wider text-neutral-700 overflow-auto">
                  <div>
                    Het originele project omvatte de ontwikkeling van een eigen
                    <span className="text-black">
                      urenregistratie-applicatie
                    </span>{" "}
                    voor <span className="text-black">Savvy.codes</span>, als
                    reactie op de beperkingen van de bestaande module in{" "}
                    <span className="text-black">Moneybird</span>. De applicatie
                    moest naadloos integreren met Moneybird en functionaliteiten
                    bieden zoals{" "}
                    <span className="text-black">
                      flexibele urenregistratie{" "}
                    </span>
                    samen met <span className="text-black">project-</span> en{" "}
                    <span className="text-black">contact selectie</span>.
                    Technologieën zoals{" "}
                    <span className="text-black">Next.js</span>,{" "}
                    <span className="text-black">Tailwind</span>,{" "}
                    <span className="text-black">Headless UI</span>,{" "}
                    <span className="text-black">React Hook Form</span> en{" "}
                    <span className="text-black">Yup</span>-validatie werden
                    gebruikt.{" "}
                    <div className="mt-2">
                      Het primaire doel was het optimaliseren van de
                      administratieve processen en het voldoen aan specifieke
                      behoeften van werknemers voor nauwkeurige urenregistratie.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex items-center h-[80vh] md:h-[55vh] max-w-3xl mx-8 shadow-md p-8 bg-white relative overflow-hidden">
              <div className="flex-col">
                <div className="font-bold text-4xl mb-1 z-50 relative">
                  De <span className="text-blue-600">uitbreidingen</span>
                </div>

                <div className="tracking-wider text-neutral-700 overflow-auto">
                  <div>
                    De applicatie is uiteindelijk geëvolueerd tot een meer
                    omvattende oplossing met verbeterde integraties met
                    Employes. Deze uitbreiding maakte het niet alleen mogelijk
                    voor uurloners om hun extra uren te verwerken, maar ook voor
                    oproepkrachten om hun werktijd efficiënt te registreren.
                  </div>
                  <div className="mt-2">
                    Een andere toevoeging aan het project was de ontwikkeling
                    van een planning component. Deze nieuwe functionaliteit
                    stelt gebruikers in staat om hun planning en werkplekken in
                    te zien. Deze verbetering is van grote waarde voor zowel het
                    management als de teamleden, aangezien het bijdraagt aan een
                    helder overzicht van de beschikbaarheid en de werkplek
                    verdeling binnen het bedrijf.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
