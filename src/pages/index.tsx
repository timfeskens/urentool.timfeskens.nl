import { TitelSection } from "@/components/titel-section";
import IntroSection from "@/components/intro-section";
import DesignSection from "@/components/design-section";

export default function Home() {
  return (
    <div className="">
      <div className="flex h-[calc(100vh-64px)] w-full bg-gradient-to-b from-20% from-gray-900 to-neutral-600">
        <div className="text-neutral-100 m-auto font-medium">
          <TitelSection />
        </div>
      </div>
      <IntroSection />
      <DesignSection />
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="flex items-center h-[50vh] max-w-6xl mx-8 shadow-md p-8 bg-white">
          <div className=" flex-col">
            <div className="font-bold text-4xl mb-2 text-black">
              Het<span className="text-blue-600"> nawoord</span>
            </div>
            <div className="tracking-wider text-neutral-700">
              <div>
                Terugkijkend op dit project, ben ik zeer tevreden met het
                uiteindelijke resultaat. Toen ik begon, was mijn ervaring met
                React beperkt, en het idee van werken met een framework zoals
                Next.js was ook nieuw voor me. De weg van concept tot realisatie
                was er een van constante groei en ontdekking.
              </div>
              <div className="mt-4">
                Ik wil graag nog even mijn dank uitspreken aan mijn
                stagebegeleiders Daan en Jerom van Savvy.codes voor hun
                onmisbare steun en begeleiding.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
