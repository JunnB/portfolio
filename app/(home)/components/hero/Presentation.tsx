"use client"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import DownloadButton from "./DownloadButton"
import Socials from "./Socials"

export default function Presentation() {
  const words = [
    {
      text: "un CTO hands-on",
    },
    {
      text: "orienté",
      className: "text-primary",
    },
    {
      text: "solutions",
      className: "text-primary",
    },
  ]

  return (
    <div className="text-center md:text-left order-2 md:order-none">
      <h1 className="text-4xl font-bold font-secondary mt-2 mb-4">
        <span className="font-normal text-xl text-foreground/80 font-primary">
          Bonjour, je m&apos;appelle Junior 👋
        </span>
        <TypewriterEffectSmooth words={words} />
      </h1>
      <div className="text-xl text-foreground/80 mb-10">
        Basé à Bordeaux, je concrétise vos idées en applications web
        performantes.
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <DownloadButton />
        <div className="mb-8 md:mb-0">
          <Socials
            containerStyles="flex gap-6"
            iconStyles="flex w-12 h-12 border border-foreground bg-secondary text-secondary-foreground rounded-full justify-center items-center text-lg hover:bg-primary hover:text-primary-foreground hover:transition-all duration-500 hover:border-primary hover:scale-110 hover:shadow-[0_0_10px] hover:shadow-primary"
          />
        </div>
      </div>
    </div>
  )
}
