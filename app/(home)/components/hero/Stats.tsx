"use client"
import CountUp from "react-countup"

const stats = [
  {
    title: "Annees d'experiences",
    value: 12,
  },
  {
    title: "Missions réalisées",
    value: 9,
  },
  {
    title: "Technologies masterisées",
    value: 15,
  },
  {
    title: "Commits",
    value: 1689,
  },
]

const Stats = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap gap-6 max-w-[90vw] mx-auto md:max-w-none">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-1 gap-4 justify-center items-center"
          >
            <CountUp
              end={stat.value}
              duration={5}
              className="text-4xl md:text-4xl xl:text-6xl font-bold"
            />
            <p className="text-sm md:text-xl">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
