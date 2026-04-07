"use client";

type AlinkProps = { title: string, link: string };

function Alink({ title, link }: AlinkProps) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-black/50 hover:text-black dark:text-white/50 hover:dark:text-white transition">
            {title}
        </a>
    );
}

export default function Footer() {
    return (
        <footer className="relative w-full h-72 md:h-full bg-gray-100 dark:bg-slate-900">
            <div className="container flex justify-between w-full mx-auto p-10 gap-4">
                <div className=""></div>
                <div className="">
                    <ul className="text-right gap-4 flex flex-col text-lg text-white/50 ">
                        <Alink link="mailto:faisal2017bahi@gmail.com" title="Email" />
                        <Alink link="https://github.com/Faishal21ahmad" title="Github" />
                        <Alink link="https://www.linkedin.com/in/faishal-fathuni-436b84209/" title="LinkedIn" />
                        <Alink link="https://drive.google.com/file/d/16IPQUb-rDZBD9iAGZyCDBOxkyshZQVr_/view?usp=sharing" title="Download CV" />
                    </ul>
                </div>
            </div>
            <p className="absolute top-28  rotate-90 -left-24  md:left-5 md:top-30 md:rotate-0 font-bold text-6xl md:text-8xl text-gray-500/30 dark:text-slate-800">ixal.my.id</p>
        </footer>
    );
}