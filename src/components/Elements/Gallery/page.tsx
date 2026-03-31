'use client';

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
    label: string;
    url: string;
}

interface GalleryProps {
    images: GalleryImage[];
    title: string;
}

export default function Gallery({ images, title }: GalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openImage = (index: number) => setSelectedIndex(index);
    const closeModal = () => setSelectedIndex(null);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev! + 1) % images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
    };

    return (
        <>
            {/* Grid Galeri */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        onClick={() => openImage(idx)}
                        className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
                    >
                        <Image
                            src={img.url}
                            alt={`${title} ${idx}`}
                            fill
                            loading="eager"
                            sizes="100vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                ))}
            </div>

            {/* Modal Pop-up Carousel */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div className="relative max-w-8xl w-full h-[70vh] md:h-[80vh]">
                        <Image
                            src={images[selectedIndex].url}
                            alt={`${title} preview`}
                            fill
                            className="object-contain"
                        />

                        {/* Tombol Navigasi */}
                        <button
                            onClick={prevImage}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full pt-2 md:pt-1 pb-2 px-3  text-xs md:text-lg lg:text-xl"
                        >
                            ◀
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full pt-2 md:pt-1 pb-2 px-3 text-xs md:text-lg lg:text-xl"
                        >
                            ▶
                        </button>

                        {/* Tombol Tutup */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-gray-900 rounded-full px-3 py-2 font-bold"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Label Gambar */}
                    <div className="mt-4 text-center text-white text-sm md:text-base max-w-3xl">
                        {images[selectedIndex].label}
                    </div>
                </div>
            )}
        </>
    );
}
