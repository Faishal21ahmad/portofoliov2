'use client'

import Image from "next/image";
import { skill } from "@/types/skillsType";

export default function card1(props: skill) {
    const {
        name: title,
        icon: image,
    } = props;

    return (
        <div className="card2">
            <div className="w-28 h-28 flex items-center">
                <Image
                    src={image}
                    alt="icons skills"
                    className="scale-80"
                    width={300}
                    height={300}
                    priority
                    unoptimized
                />
            </div>
            <span className="font-semibold text-lg text-center">
                {title}
            </span>
        </div>
    );
}
