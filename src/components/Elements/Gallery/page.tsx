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

    // keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (selectedIndex === null) return;
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeModal();
    };

    const btnNavClass = "absolute cursor-pointer -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full z-10 mix-blend-difference";

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
                            alt={`${title} ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            priority
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute cursor-pointer inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                ))}
            </div>

            <div
                className={`fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 p-4 transition-opacity duration-300 ${selectedIndex !== null ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={closeModal}
                onKeyDown={handleKeyDown}
                tabIndex={-1}
            >
                <div
                    className="relative w-full h-[70vh] md:min-h-[80vh]"
                >
                    {images.map((img, idx) => (
                        <Image
                            key={idx}
                            src={img.url}
                            alt={`${title} preview ${idx + 1}`}
                            fill
                            sizes="100vw"
                            priority
                            unoptimized
                            className={`object-contain transition-opacity duration-200 ${idx === selectedIndex ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}

                    <button
                        onClick={prevImage}
                        className={`left-3 top-1/2 pt-2 md:pt-1 pb-2 px-3 text-xs md:text-lg lg:text-xl ${btnNavClass}`}
                    >
                        ◀
                    </button>

                    <button
                        onClick={nextImage}
                        className={`right-3 top-1/2 pt-2 md:pt-1 pb-2 px-3 text-xs md:text-lg lg:text-xl ${btnNavClass}`}
                    >
                        ▶
                    </button>

                    <button
                        onClick={closeModal}
                        className={`top-4 right-4 px-3 py-2 font-bold ${btnNavClass}`}
                    >
                        ✕
                    </button>
                </div>

                <div
                    className="mt-4 text-center text-white max-w-3xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <p className="text-sm md:text-base">
                        {selectedIndex !== null ? images[selectedIndex].label : ''}
                    </p>
                    <p className="text-xs text-white/50 mt-1">
                        {selectedIndex !== null ? `${selectedIndex + 1} / ${images.length}` : ''}
                    </p>
                </div>

                <div
                    className="flex gap-2 mt-3"
                    onClick={(e) => e.stopPropagation()}
                >
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedIndex(idx)}
                            className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-200
                                ${idx === selectedIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}