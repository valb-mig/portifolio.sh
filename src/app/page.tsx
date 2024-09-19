"use client";

import { useState } from "react";

import Header from  "layout/Header";
import Footer from  "layout/Footer";
import Section from "layout/Section";

import Title from "ui/Title";
import Button from "ui/Button";
import CardLink from "ui/CardLink";
import LanguageCard from "ui/LanguageCard";
import Subtitle from "ui/Subtitle";

import Loottie from "react-lottie";
import lottieData from '#/assets/persona.json';

import { 
  ExternalLink,
  MailIcon,
  Dot,
  Calendar,
  Eye
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

  const [lang, setLang] = useState('pt');

  const changeLanguage = (lng: string) => {
    setLang(lng);
  }

  return (
    <>
      <Button onClick={() => changeLanguage(lang === 'pt' ? 'en' : 'pt')} className="fixed bottom-2 right-2 z-50">
        {
          lang === 'pt' ? 
          (
           <span>🇧🇷</span>
          )
          :
          (
            <span>🇺🇸</span>
          )
        }
        
      </Button>

      <div className="flex justify-center bg-emerald-500 font-bold text-emerald-800 text-xs sm:text-sm">
        Trabalhando atualmente no projeto&nbsp;
        <a className="flex items-center text-emerald-950 underline" href={userConfig.actual.url} target="_blank" rel="noreferrer">
          { userConfig.actual.name } 
          <ExternalLink className="flex h-4"/>
        </a>
      </div>

      <Header/>

      <main className="flex flex-col text-foreground-2 px-2 gap-8">

        <Section className="flex-col sm:flex-row mx-auto max-w-screen-xl">

          <div className="sm:hidden block w-1/2 pointer-events-none relative">
            <div className="relative z-10">
              <Loottie options={defaultOptions}/>
            </div>
            <span className="absolute bg-primary/5 rounded-full size-full block top-0 blur-3xl" />
          </div>

          <div className="flex gap-5 flex-col items-center w-full pb-4 sm:pb-0 sm:w-1/2">
            <h1 className="text-2xl lg:text-5xl text-center w-full">
              Olá, eu sou <span className="font-bold text-primary">{userConfig.name}</span>.

              <div className="text-sm sm:text-lg lg:text-2xl text-foreground-4">
                Seja bem-vindo(a) ao meu portifólio&nbsp;
                <span className="relative">
                  digital 
                  <div className="absolute text-4xl lg:text-8xl font-bold -right-3 -top-2 lg:-right-7 lg:-top-5 rotate-12 text-emerald-500">!</div>
                </span>
              </div>           
            </h1>

            <div className="flex gap-2">              
              <a 
                className="flex gap-2 w-fit items-center bg-inherit text-primary rounded-lg p-1 px-2 text-sm lg:text-2xl transition-all"
                href="doc/ivalber-miguel.pdf"
                target="_blank"
              >
                <Eye/>
                Visualizar CV
              </a>
              <a 
                href="mailto:valb-mig@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 w-fit items-center border-2 border-primary bg-primary hover:bg-inherit hover:border-primary hover:text-primary rounded-lg p-1 px-2 text-sm lg:text-2xl transition-all"
              >
                <MailIcon/>
                Me contate
              </a>
            </div>
          </div>

          <div className="hidden sm:block w-1/2 pointer-events-none relative">
            <div className="relative z-10">
              <Loottie options={defaultOptions}/>
            </div>
            <span className="absolute bg-primary/5 rounded-full size-full block top-0 blur-3xl" />
          </div>
        </Section>

        <Section id="about" className="gap-2 w-full mx-auto max-w-screen-xl mb-10">
          <div className="hidden sm:flex justify-center w-1/3">
            <img src="img/me.png" alt="me" className="size-[10rem] lg:size-[20rem] rounded-full"/>
          </div>
          <article className="w-full sm:w-2/3">
            <Title>Sobre</Title>
            <div className="sm:hidden flex w-full justify-center items-center">
              <img src="img/me.png" alt="me" className="size-[5rem] lg:size-[20rem] rounded-full"/>
            </div>
            <p className="text-xs text-justify lg:text-2xl text-foreground-3">
              &quot;Olá! 👋 Eu sou Ivalber Miguel, um desenvolvedor web com um ano de experiência, 
              apaixonado por transformar código em soluções incríveis. 
              Desde março de 2022, tenho me dedicado ao desenvolvimento web, 
              trabalhando com&nbsp;
              <span className="text-emerald-500 font-bold">PHP</span>, 
              <span className="text-emerald-500 font-bold">CSS</span>, 
              <span className="text-emerald-500 font-bold">HTML</span>, 
              <span className="text-emerald-500 font-bold">JavaScript</span>, 
              <span className="text-emerald-500 font-bold">ReactJS</span>, 
              <span className="text-emerald-500 font-bold">Laravel</span>, 
              <span className="text-emerald-500 font-bold">Next.js</span> e&nbsp;
              <span className="text-emerald-500 font-bold">SQL</span>.
              Sempre buscando aprimorar minhas habilidades. 
              Aos 20 anos, sou fluente em inglês e motivado pela paixão, pela programação e desafios tecnológicos. 
              Confira meu progresso no meu GitHub! 🚀&quot;</p>
          </article>
        </Section>

        <Section id="technologies" className="flex-col gap-12">
          
          <div className="flex items-center gap-2 text-sm sm:text-lg bg-shade-4 border-2 border-shade-3 px-4 py-1 rounded-full">
            <p>Linguagens</p>
            <Dot className="text-shade-2"/>
            <p>Ferramentas</p>
            <Dot className="text-shade-2"/>
            <p>Frameworks</p>
          </div>

          <div className="flex w-full gap-2 wrapper">
            { userConfig.technologies.map((technology, index) => (
                <LanguageCard key={index} id={index} name={technology}/>
              )) 
            }
          </div>
        </Section>

        <Section id="experience" className="flex-col gap-4 py-20 mx-auto max-w-screen-xl">
          <Title>Experiência</Title>

          <div id="grupo_abraz" className="flex flex-col gap-8 border-2 border-dashed border-shade-4 p-8 rounded">
            <div className="flex w-full gap-2 py-10 ">
              <div className="flex flex-col justify-center w-3/4">

                <div className="flex gap-2 justify-start items-center">
                  <Subtitle>
                    Grupo ABRAZ
                    <span className="absolute -top-2 -left-2 bg-emerald-500 px-2 text-xs sm:text-lg rounded-full text-emerald-950 shadow-lg shadow-emerald-400/20">
                      atual
                    </span>
                  </Subtitle>
                  <span className="flex gap-2 text-foreground-3 text-xs underline items-center">
                    <Calendar className="size-4"/> desde 2023
                  </span>
                </div>

                <article className="w-full text-xs text-justify lg:text-2xl text-foreground-3">
                No Grupo Abraz, atuo no desenvolvimento e aprimoramento contínuo dos sistemas utilizados, 
                contribuindo para a melhoria da experiência dos usuários e a eficiência dos processos internos.
                </article>
              </div>
              <div className="flex justify-center items-center w-1/4">
                <img src="/img/logos/grupo_abraz.png" alt="me" className="w-full rounded-full"/>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm sm:text-lg">
              <p className="bg-shade-4 border-2 border-shade-3 px-4 py-1 rounded-full">Sistemas Auxiliados</p>
            </div>

            <div className="flex justify-between w-full gap-12 sm:gap-36 sm:px-20">
              <a href="https://www.abraz.srv.br/" target="_blank" rel="noreferrer" className="hover:scale-105 transition-all">
                <img src="/img/logos/grupo_abraz.png" alt="grupo abraz" className="w-full rounded-full" />
              </a>
              <a href="https://www.abraz.adv.br/" target="_blank" rel="noreferrer" className="hover:scale-105 transition-all">
                <img src="/img/logos/abvm.png" alt="abvm" className="w-full rounded-full" />
              </a>
              <a href="https://debitozero.com.br/" target="_blank" rel="noreferrer" className="hover:scale-105 transition-all">
                <img src="/img/logos/debito_zero.png" alt="debitozero" className="w-full rounded-full" />
              </a>
            </div>
          </div>

        </Section>

        <Section id="projects" className="flex-col mx-auto max-w-screen-xl">
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
                      type={project.type}
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