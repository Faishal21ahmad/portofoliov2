"use client";

import Saction from "@/components/Fragments/saction/saction";
import Titlesaction from "@/components/Fragments/saction/titlesaction";
import Card1 from "@/components/Fragments/card/card1";
import { sertificates } from "@/data/sertificate";
import Card2 from "@/components/Fragments/card/card2";
import { skills } from "@/data/skills";
import Card3 from "@/components/Fragments/card/card3";
import { projects } from "@/data/projects";
import Banner from "@/components/Layouts/Banner";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const visibleProjects = projects.filter((p) => p.show);

  return (
    <>
      <Banner />
      <main className="top-44 w-full">
        <Saction id="cta" bgcolor="bg-gray-100/80 dark:bg-slate-900/80 scroll-mt-16" classname="py-10 md:py-0">
          <div className="py-6 px-4 md:py-12 md:px-12 flex flex-col md:flex-row items-center gap-6 container mx-auto">
            <div className="shrink-0 ">
              <Image
                src="/img/pp2.png"
                alt="photo-profile"
                width={400}
                height={384}
                className="w-48 h-48 md:w-56 md:h-56 border-4 border-white/90 shadow-lg rounded-2xl object-cover"
                priority
                unoptimized
              />
            </div>

            <div className="p-2 w-full justify-center flex flex-col">
              <h1 className="text-2xl md:text-5xl font-bold text-slate-950 dark:text-white">FAISHALBAHY AHMAD FATHUNI</h1>
              <p className="text-base md:text-xl text-black/90 dark:text-white/80">Web Developer | IT Infrastructure | Tech Enthusiast</p>
              <p className="text-sm md:text-lg text-black/70 dark:text-white/60">Laravel • Linux • React</p>
              <br />
              <p className="text-lg text-black/70 dark:text-white/60">Hubungi :</p>
              <div className="flex items-center gap-4 mt-2">
                <Link href="mailto:faisal2017bahi@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
                  <picture>
                    <source srcSet="/icons/email-light.png" media="(prefers-color-scheme: dark)" />
                    <img src="/icons/email-dark.png" alt="Email" className="h-6" />
                  </picture>
                </Link>
                <Link href="https://www.linkedin.com/in/faishal-fathuni-436b84209/" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
                  <picture>
                    <source srcSet="/icons/linkedin-light.png" media="(prefers-color-scheme: dark)" />
                    <img src="/icons/linkedin-dark.png" alt="LinkedIn" className="h-6" />
                  </picture>
                </Link>
                <Link href="https://github.com/Faishal21ahmad" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
                  <picture>
                    <source srcSet="/icons/github-light.png" media="(prefers-color-scheme: dark)" />
                    <img src="/icons/github-dark.png" alt="GitHub" className="h-6" />
                  </picture>
                </Link>
                <Link
                  href="https://drive.google.com/file/d/14SWlK0XiPyweDsptZTzRh_Bjb804Xy8-/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-lg cursor-pointer text-lg  transition-all duration-200 bg-gray-200 dark:bg-slate-500/20 hover:bg-gray-300/80 dark:hover:bg-slate-500/40 flex items-center gap-2">
                  <span className="italic font-bold">Download</span> CV <span className="-mt-1 pl-2 scale-90">▶</span>
                </Link>
              </div>
            </div>
          </div>
        </Saction>
        <Saction id="about" bgcolor="" classname="flex-col gap-10 py-25" >
          <Titlesaction title="About Me" />
          <div className="mx-auto max-w-6xl px-5 md:px-0">
            <p className="text-xl">Hai, saya Faishalbahy Ahmad Fathuni </p>
            <p className="text-xl text-justify">seorang Web Developer yang juga memiliki ketertarikan di bidang infrastruktur IT. Dalam membangun aplikasi, terbiasa dengan tech stack Laravel, Tailwind CSS, dan React untuk menghasilkan sistem yang terstruktur, responsif, dan efisien. Tak hanya itu, saya juga mendalami pengelolaan server, deployment aplikasi, serta konfigurasi lingkungan on-premise maupun cloud memastikan sistem yang dibangun tidak hanya berfungsi, tetapi juga berjalan stabil dan optimal.</p>
          </div>
        </Saction>
        <Saction id="certification" bgcolor="bg-gray-100/80 dark:bg-slate-900/80" classname="flex-col gap-10 py-20">
          <Titlesaction title="CERTIFICATION" />
          <div className="w-full justify-center gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 container mx-auto">
            {sertificates.map((item, index) => (
              <Card1 key={index} title={item.title} link={item.link} image={item.image} />
            ))}
          </div>
        </Saction>
        <Saction id="skills" classname="flex-col gap-10 py-20">
          <Titlesaction title="SKILLS" />
          <div className="w-full justify-center gap-3 flex flex-wrap px-4 container mx-auto">
            {skills.map((skill, index) => (
              <Card2 key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </Saction>
        <Saction id="projects" classname="flex-col gap-10 py-20">
          <Titlesaction title="PROJECTS" />
          <div className="w-full justify-center gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 container mx-auto">
            {visibleProjects.map((project, index) => (
              <Card3 key={index} data={project} />
            ))}
          </div>
        </Saction>
      </main>
    </>
  );
}
