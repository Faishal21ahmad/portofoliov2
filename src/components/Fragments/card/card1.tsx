'use client'

import Image from "next/image";
import { sertificate } from "@/types/sertificateType";
import Link from "next/link";

export default function card1(props: sertificate) {
    const {
        title,
        link,
        image,
    } = props;

    return (
        <Link target="_blank" href={link} className="card1">
            <div className="rounded-md overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    className="scale-125"
                    width={1242}
                    height={782}
                    unoptimized
                    priority
                />
            </div>
            <span className="font-semibold text-lg">
                {title}
            </span>
        </Link>
    );
}
