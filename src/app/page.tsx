"use client";

import Header from  "layout/Header";
import Footer from  "layout/Footer";
import Section from "layout/Section";

import Title from "ui/Title";
import CardLink from "ui/CardLink";

import Loottie from "react-lottie";
import lottieData from '#/assets/persona.json';

import { 
  ExternalLink,
  MailIcon
} from "lucide-react";

import config from "@/config";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: lottieData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const App = () => {

  return (
    <>

      <div className="flex justify-center bg-emerald-500 font-bold text-emerald-800 text-sm">
        Trabalhando atualmente no&nbsp;
        <a className="flex items-center text-emerald-950 underline" href={config.actual.url} target="_blank" rel="noreferrer">
          { config.actual.name } 
          <ExternalLink className="flex h-4"/>
        </a>
      </div>

      <Header/>

      <main className="flex flex-col text-foreground-2">
        
        <Section>
          <div className="flex gap-2 flex-col items-center w-1/2">
            <h1 className="text-4xl lg:text-7xl text-center">
              Olá, eu sou <span className="font-bold text-primary">{config.name}</span>.

              <div className="text-sm sm:text-2xl lg:text-4xl">
                Seja bem-vindo(a) ao meu portifólio&nbsp;
                <span className="relative">
                  digital 
                  <div className="absolute text-4xl lg:text-8xl font-bold -right-3 -top-2 lg:-right-7 lg:-top-5 rotate-12 text-primary">!</div>
                </span>
              </div>           
            </h1>

            <button 
              className="flex gap-2 w-fit items-center border-2 border-primary bg-primary hover:bg-inherit hover:border-primary hover:text-primary rounded-lg p-1 px-2 text-2xl transition-all"
              onClick={() => window.open("https://google.com", "_blank") }
            >
              <MailIcon/>
              Me contate
            </button>
          </div>

          <div className="w-1/2 pointer-events-none relative">
            <div className="relative z-10">
              <Loottie options={defaultOptions}/>
            </div>
            <span className="absolute bg-primary/5 rounded-full size-full block top-0 blur-3xl" />
          </div>
        </Section>

        <Section id="projects" className="flex-col">
            <Title>Projetos</Title>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                { config.projects.map((project) => (
                    <CardLink 
                      key={project.name}
                      title={project.name}
                      description={project.description}
                      href={project.url}
                      languages={project.languages}
                    />
                  )) 
                }
              </div>
            </div>
            <span className="absolute bg-primary/5 rounded-full w-[40rem] h-[40rem] block bottom-0 left-0 blur-3xl z-0" />
        </Section>

      </main>

      <Footer/>
    </>
  );
}

export default App;