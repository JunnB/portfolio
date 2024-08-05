"use client"
import Socials from "./Socials"
import Photo from "./Photo"
import Stats from "./Stats"
import DownloadButton from "./DownloadButton"

const Hero = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 md:pb-24">
          <div className="text-center md:text-left order-2 md:order-none">
            <span className="text-xl"> CTO/Tech leader Hands-on</span>
            <h1 className="text-4xl font-bold font-secondary mt-2 mb-6">
              Bonjour, je suis <br />
              <span className="text-primary">Junior Bernard</span>
            </h1>
            {/* TODO: Retravailler le texte à partir de ma fiche de poste */}
            <p className="mb-9 max-w-[500px] text-foreground/80">
              Expert en développement web full-stack, je maîtrise la conception
              et implémentation d&apos;architectures performantes, le
              recrutement et la gestion de projets complexes.
            </p>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <DownloadButton />
              <div className="mb-8 md:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="flex w-9 h-9 border border-accent rounded-full justify-center items-center text-accent text-base hover:bg-accent hover:text-accent-foreground hover:transition-all duration-500 hover:border-primary"
                />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-none mb-8 md:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Hero
