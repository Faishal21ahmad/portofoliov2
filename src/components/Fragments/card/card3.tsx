'use client'

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { project } from "@/types/projectsType";

type CardProps = {
    data: project;
};

export default function Card3({ data }: CardProps) {
    const { title, description, url_demo, url_github, list_stack, images, id } = data;
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(id ? `/project/${id}` : '/projects')}
            className="card3"
        >
            <div className="rounded-md overflow-hidden h-60">
                <Image
                    src={images[0].url}
                    alt={title}
                    className="w-full h-full object-cover"
                    width={1920}
                    height={384}
                    priority
                />

                {/* Button links */}
                <div className="absolute top-4 right-4 flex gap-1">
                    {url_github && (
                        <Link href={url_github} target="_blank" rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center">
                            <Image
                                src="/icons/github-dark.png"
                                alt="GitHub"
                                className="w-6 h-6"
                                width={24}
                                height={24}
                                priority
                                unoptimized
                            />
                        </Link>
                    )}
                    {url_demo && (
                        <Link href={url_demo} target="_blank" rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center overflow-hidden">
                            <Image
                                src="/icons/link.png"
                                alt="Demo"
                                className="w-6 h-6"
                                width={24}
                                height={24}
                                draggable={false}
                                priority
                                unoptimized
                            />
                        </Link>
                    )}
                </div>
            </div>

            <div className="p-2">
                <span className="font-semibold text-xl text-dark dark:text-white">{title}</span>
                <p className="text-md text-black/70 dark:text-white/70 line-clamp-3">{description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {list_stack.map((tech, index) => (
                        <span key={index} className="bg-slate-800 text-white text-xs px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}