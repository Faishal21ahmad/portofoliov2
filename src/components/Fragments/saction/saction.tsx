'use client'
import React from "react";

interface SactionProps {
    children: React.ReactNode;
    classname?: string;
    bgcolor?: string;
    id: string;
}

export default function Saction(props: SactionProps) {
    const {
        id,
        children,
        classname = "",
        bgcolor = ""
    } = props;

    return (
        <div id={id} className={`w-full ${bgcolor}`}>
            <div className={`container mx-auto flex ${classname}`}>
                {children}
            </div>
        </div>
    );
}
