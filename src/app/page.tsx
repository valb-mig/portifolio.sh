"use client";

import Header from  "layout/Header";
import Footer from  "layout/Footer";
import Section from "layout/Section";

import Title from "ui/Title";
import CardLink from "ui/CardLink";
import LanguageCard from "ui/LanguageCard";

import Loottie from "react-lottie";
import lottieData from '#/assets/persona.json';

import { 
  ExternalLink,
  MailIcon,
  Download,
  Dot
} from "lucide-react";

import userConfig from "@/config/userConfig";

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

      <div className="flex justify-center bg-emerald-500 font-bold text-emerald-800 text-xs sm:text-sm">
        Trabalhando atualmente no projeto&nbsp;
        <a className="flex items-center text-emerald-950 underline" href={userConfig.actual.url} target="_blank" rel="noreferrer">
          { userConfig.actual.name } 
          <ExternalLink className="flex h-4"/>
        </a>
      </div>

      <Header/>

      <main className="flex flex-col text-foreground-2">

        <Section id="about" className="flex-col sm:flex-row">

          <div className="sm:hidden block w-1/2 pointer-events-none relative">
            <div className="relative z-10">
              <Loottie options={defaultOptions}/>
            </div>
            <span className="absolute bg-primary/5 rounded-full size-full block top-0 blur-3xl" />
          </div>

          <div className="flex gap-2 flex-col items-center w-full pb-4 sm:pb-0 sm:w-1/2">
            <h1 className="text-4xl lg:text-7xl text-center">
              Olá, eu sou <span className="font-bold text-primary">{userConfig.name}</span>.

              <div className="text-sm sm:text-2xl lg:text-4xl">
                Seja bem-vindo(a) ao meu portifólio&nbsp;
                <span className="relative">
                  digital 
                  <div className="absolute text-4xl lg:text-8xl font-bold -right-3 -top-2 lg:-right-7 lg:-top-5 rotate-12 text-primary">!</div>
                </span>
              </div>           
            </h1>

            <div className="flex gap-2">
              <button 
                className="flex gap-2 w-fit items-center border-2 border-primary bg-primary hover:bg-inherit hover:border-primary hover:text-primary rounded-lg p-1 px-2 text-sm lg:text-2xl transition-all"
                onClick={() => window.open("https://google.com", "_blank") }
              >
                <MailIcon/>
                Me contate
              </button>
              <button 
                className="flex gap-2 w-fit items-center border-2 bg-inherit hover:bg-primary border-primary text-primary hover:text-foreground-1 rounded-lg p-1 px-2 text-sm lg:text-2xl transition-all"
                onClick={() => window.open("https://google.com", "_blank") }
              >
                <Download/>
                Currículo
              </button>
            </div>
          </div>

          <div className="hidden sm:block w-1/2 pointer-events-none relative">
            <div className="relative z-10">
              <Loottie options={defaultOptions}/>
            </div>
            <span className="absolute bg-primary/5 rounded-full size-full block top-0 blur-3xl" />
          </div>
        </Section>

        <Section id="technologies" className="flex-col gap-4">
          
          <div className="flex items-center gap-2 text-sm sm:text-lg bg-shade-4 border-2 border-shade-3 px-4 py-1 rounded-full">
            <p>Linguagens</p>
            <Dot className="text-shade-2"/>
            <p>Ferramentas</p>
            <Dot className="text-shade-2"/>
            <p>Frameworks</p>
          </div>

          <div className="flex w-full gap-2 justify-around wrapper">
            { userConfig.technologies.map((technology, index) => (
                <LanguageCard key={index} id={index} name={technology}/>
              )) 
            }
          </div>
        </Section>

        <Section id="projects" className="flex-col">
            <Title>Projetos</Title>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                { userConfig.projects.map((project) => (
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