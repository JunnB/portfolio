"use client"
import Socials from "./Socials"
import Photo from "./Photo"
import Stats from "./Stats"
import DownloadButton from "./DownloadButton"

const Hero = () => {
  return (
    <section className="h-full pb-20">
      <div className="h-full">
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 md:pb-20">
          <div className="text-center md:text-left order-2 md:order-none">
            <h1 className="text-4xl font-bold font-secondary mt-2 mb-4">
              Transformez vos idées <br /> en projets webs{" "}
              <span className="text-primary">performants</span>
            </h1>
            <span className="text-xl mb-2">
              Salut, je suis Junior, Tech leader full-stack
            </span>
            <p className="mb-9 max-w-[500px] text-foreground/80">
              CTO hands-on multi technologies basé à Bordeaux.
            </p>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <DownloadButton />
              <div className="mb-8 md:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="flex w-12 h-12 border border-secondary rounded-full justify-center items-center text-secondary-foreground text-lg hover:bg-secondary hover:text-secondary-foreground hover:transition-all duration-500 hover:border-primary hover:scale-110 hover:shadow-[0_0_10px] hover:shadow-primary"
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
