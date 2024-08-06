"use client"
import Photo from "./hero/Photo"
import Stats from "./hero/Stats"
import Presentation from "./hero/Presentation"

const Hero = () => {
  return (
    <section className="h-full pb-20">
      <div className="container mx-auto">
        <div className="h-full">
          <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 md:pb-20">
            <Presentation />
            <div className="order-1 md:order-none mb-8 md:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Hero
