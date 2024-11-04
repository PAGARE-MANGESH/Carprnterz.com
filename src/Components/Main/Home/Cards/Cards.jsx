"use client";
import React from "react";
import { StickyScroll } from "./CardsConf"
import { useTranslation } from 'react-i18next';
import ContentImg1 from '../../../../assets/Custum.jpg'
import ContentImg2 from '../../../../assets/realTime.jpg'
import ContentImg3 from '../../../../assets/Dureable.jpg'
import ContentImg4 from '../../../../assets/Precision.jpg'




const content = [
    {
        title: "Custom Furniture Design",
        description:
            "Collaborate with our master carpenters to design custom furniture that matches your style and space perfectly. From rustic to modern, our team brings your vision to life with quality craftsmanship.",
        content: (
            <div className="flex items-center justify-center w-full h-full text-white">
                <img
                    src={ContentImg1}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                    alt="Project update demo" />
            </div>
        ),
    },
    {
        title: "Real-time Project Updates",
        description:
            "Stay updated with real-time progress on your custom furniture or renovation project. Track every step, from material selection to finishing touches, and rest assured that your project is on schedule.",
        content: (
            <div className="flex items-center justify-center w-full h-full text-white">
                <img
                    src={ContentImg2}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                    alt="Project update demo" />
            </div>
        ),
    },
    {
        title: "Durable Materials",
        description:
            "Our craftsmen select only high-quality, durable materials to ensure your furniture stands the test of time. We work with various types of wood, metal, and finishes to create pieces that are not only beautiful but also built to last.",
        content: (
            <div className="flex items-center justify-center w-full h-full text-white">
                <img
                    src={ContentImg3}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                    alt="Project update demo" />
            </div>
        ),
    },
    {
        title: "Precision Craftsmanship",
        description:
            "Our team prides itself on attention to detail. From intricate carvings to seamless joints, we ensure every piece is crafted with the highest level of precision and care.",
        content: (
            <div className="flex items-center justify-center w-full h-full text-white">
                <img
                    src={ContentImg4}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                    alt="Project update demo" />
            </div>
        ),
    },
];


export default function StickyScrollRevealDemo() {
    const { t } = useTranslation();

    return (
        (<div className="p-10" >
            <h1 className="my-4 text-2xl font-bold text-center text-blue-500">  {t("Compotitle")} 😇</h1>
            <StickyScroll content={content} />
        </div>)
    );
}
