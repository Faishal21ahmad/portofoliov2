'use client'

interface TitlesactionProps {
    title?: string;
}

export default function Titlesaction({ title }: TitlesactionProps) {
    return (
        <div className="items-center mx-auto flex flex-col">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <picture>
                <source srcSet="/line-light.png" media="(prefers-color-scheme: dark)" className="w-52" />
                <img src="/line-dark.png" alt="line" className="w-52" />
            </picture>
        </div>
    );
}