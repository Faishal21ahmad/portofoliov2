'use client'

import { useParams } from 'next/navigation';
import { getProjectById } from '@/lib/dataProjectService';
import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/Elements/Gallery/page";

const btnStyle = "bg-gray-700/10 hover:bg-gray-700/20 dark:bg-white/10 dark:hover:bg-white/20 rounded-md";

export default function page() {
    const params = useParams();
    const id = params.id;

    console.log("Project ID:", id)
    const project = getProjectById(Number(id))

    if (!project) {
        return (
            <div className="text-center py-10 h-svw text-gray-600 dark:text-gray-300">
                <h1 className="text-2xl font-semibold">Project tidak ditemukan</h1>
                <p>Pastikan URL project valid.</p>
            </div>
        );
    }

    return (
        <main className="container mx-auto py-5 px-4 md:px-0 scroll-mt-16">
            <div className="mb-6">
                <Link
                    href="/#projects"
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 ${btnStyle}`}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to Projects
                </Link>
            </div>

            {/* Banner / Gambar Utama */}
            <div className="relative h-56 sm:h-56 hover:md:h-85 hover:lg:h-120 hover:xl:h-150 transition-all duration-300 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                <Link href={`/project/${id}/#gallery`} >
                    <Image
                        src={project.images[0].url ?? "/default.png"}
                        alt={project.title ?? "Project image"}
                        width={1920}
                        height={1080}
                        className="w-full object-contain transition-all duration-300 rounded-lg"
                        priority
                        unoptimized
                    />
                </Link>
            </div>

            {/* Info Utama */}
            <div className="mt-8 space-y-2">
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                    <span className="font-medium">{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                    {project.description}
                </p>
            </div>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap gap-4 mt-6">
                {project.url_demo && (
                    <Link href={project.url_demo} target="_blank" className={`px-5 py-2 ${btnStyle}`}>
                        💻 Demo
                    </Link>
                )}
                {project.url_github && (
                    <Link href={project.url_github} target="_blank" className={`px-5 py-2 ${btnStyle}`}>
                        🔗 Source Code
                    </Link>
                )}
            </div>

            {/* Teknologi */}
            {project.list_stack.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-3">
                        Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {project.list_stack.map((tech, index) => (
                            <span key={index} className={`text-md px-2 py-1 ${btnStyle}`}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Project Scope */}
            {project.scopes.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-3">Project Scope</h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        {project.scopes.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/*  Fitur */}
            {project.fiturs.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-3">Fitur</h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        {project.fiturs.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Galeri Gambar */}
            {project.images?.length > 0 && (
                <div id="gallery" className="mt-10 scroll-mt-20">
                    <h2 className="text-xl font-semibold mb-3">Gallery</h2>
                    <Gallery images={project.images} title={project.title} />
                </div>
            )}
        </main>
    );
}