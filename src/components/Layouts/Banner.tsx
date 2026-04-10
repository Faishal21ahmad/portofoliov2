"use client";
import Image from "next/image";

export default function Banner() {
    return (
        <section
            id="carousel-banner"
            aria-label="Banner"
            className="h-full w-full overflow-hidden"
        >
            <div className="banner-track">
                <Image
                    src="/img/banner.jpg"
                    alt="Banner"
                    width={3000}
                    height={500}
                    className="h-56 md:h-96 w-auto object-cover"
                    loading="eager"
                    unoptimized
                />
                <Image
                    src="/img/banner.jpg"
                    alt="Banner"
                    width={3000}
                    height={500}
                    className="h-56 md:h-96 w-auto object-cover"
                    loading="eager"
                    unoptimized
                />
            </div>
        </section>
    );
}