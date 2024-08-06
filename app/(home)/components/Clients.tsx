"use client"
import React from "react"
import Image from "next/image"

// TODO: Mettre les logos blancs, Ajouter Capgemini, TF1, Orange, Presstalis
const clients = [
  {
    name: "Cdiscount",
    logo: "/assets/logo-cdiscount.png",
  },
  {
    name: "Betclic",
    logo: "/assets/logo-betclic.jpg",
  },
  {
    name: "Floa",
    logo: "/assets/logo-floa.png",
  },
  {
    name: "MaVilleMonShopping",
    logo: "/assets/logo-mvms.png",
  },
  {
    name: "ArtPhotoLimited",
    logo: "/assets/logo-artphotolimited.png",
  },
]

const Clients = () => {
  return (
    <section id="clients">
      <div className="w-full bg-primary py-6 px-8 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {clients.map((client) => (
            <div key={client.name} className="w-28 h-10 relative">
              <Image
                src={client.logo}
                alt={`Logo ${client.name}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
