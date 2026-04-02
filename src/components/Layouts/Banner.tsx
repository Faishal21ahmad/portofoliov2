"use client";
import Image from "next/image";

const BANNER_DURATION = 50;

export default function Banner() {
    return (
        <>
            <style>{`
                @keyframes scroll-banner {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }

                .banner-track {
                    display: flex;
                    width: max-content;
                    animation: scroll-banner ${BANNER_DURATION}s linear infinite;
                }

                .banner-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

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
        </>
    );
}