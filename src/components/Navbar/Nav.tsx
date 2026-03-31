"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_TITLE = "PORTOFOLIO";
const NAV_ITEMS = [
    { label: "About", href: "/#cta" },
    { label: "Certification", href: "/#certification" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Article", href: "/article" },
];

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed h-auto top-0 left-0 w-full z-50 bg-white/20 dark:bg-black/10 backdrop-blur-xs flex flex-col">
            <div className="container mx-auto flex items-center justify-between h-16 px-4">
                <div className="flex gap-6 items-center justify-between mx-auto w-full text-black dark:text-white">
                    <Link href="/">
                        <h1 className="text-lg font-semibold text-black dark:text-white">{NAV_TITLE}</h1>
                    </Link>

                    {/* Desktop */}
                    <ul className="hidden md:flex flex-row items-center gap-3">
                        {NAV_ITEMS.map(({ label, href }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className="px-3 py-2 rounded-lg text-base transition-all duration-200 active:scale-95 hover:bg-black/5 dark:hover:bg-white/15"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Hamburger */}
                    <button
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        onClick={() => setOpen((s) => !s)}
                        className={`md:hidden hover:cursor-pointer p-2 rounded-md transition-colors hover:bg-black/5 dark:hover:bg-white/15 ${open ? "bg-white/10" : ""}`}
                    >
                        {open ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out text-black dark:text-white ${open ? "max-h-96" : "max-h-0"}`}>
                <ul className="p-3 gap-2">
                    {NAV_ITEMS.map(({ label, href }) => (
                        <li key={label}>
                            <Link
                                href={href}
                                onClick={() => setOpen(false)}
                                className="block px-3 py-2 rounded-lg text-base transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/15 active:scale-95"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}