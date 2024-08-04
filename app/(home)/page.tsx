import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "./components/Socials";
import Photo from "./components/Photo";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl"> CTO/Tech leader Hands-on</span>
            <h1 className="text-4xl font-bold font-secondary mt-2 mb-6">Bonjour, je suis <br/> <span className="text-primary">Junior Bernard</span></h1>
            {/* TODO: Retravailler le texte à partir de ma fiche de poste */}
            <p className="mb-9 max-w-[500px] text-foreground/80">Expert en développement web full-stack, je maîtrise la conception et implémentation d'architectures performantes, le recrutement et la gestion de projets complexes.</p>
            <div className="flex flex-col xl:flex-row justify-center items-center gap-8">
              <Button 
                variant="outline" 
                size="lg"
                className="flex items-center uppercase gap-2 ">
                  <span>Télécharger CV</span>
                  <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6" 
                  iconStyles="flex w-9 h-9 border border-accent rounded-full justify-center items-center text-accent text-base hover:bg-accent hover:text-accent-foreground hover:transition-all duration-500 hover:border-primary"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>   
      <Stats />
    </section>
  );
}