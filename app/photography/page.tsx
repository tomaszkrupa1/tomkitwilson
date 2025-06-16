'use client'

import React, { useState } from "react";

export default function PhotographyPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        { src: "/images/P1.jpg", alt: "Photo 1" },
        { src: "/images/P2.jpg", alt: "Photo 2" },
        { src: "/images/P3.jpg", alt: "Photo 3" },
        { src: "/images/P4.jpg", alt: "Photo 4" },
        { src: "/images/P5.jpg", alt: "Photo 5" },
        { src: "/images/P6.jpg", alt: "Photo 6" },
        { src: "/images/P7.jpg", alt: "Photo 7" },
        { src: "/images/P8.jpg", alt: "Photo 8" },
        { src: "/images/P9.jpg", alt: "Photo 9" },
        { src: "/images/P10.jpg", alt: "Photo 10" },
        { src: "/images/P11.jpg", alt: "Photo 11" },
        { src: "/images/P12.jpg", alt: "Photo 12" },
        { src: "/images/P13.jpg", alt: "Photo 13" },
        { src: "/images/P14.jpg", alt: "Photo 14" },
        { src: "/images/P15.jpg", alt: "Photo 15" },
        { src: "/images/P16.jpg", alt: "Photo 16" },
        { src: "/images/P17.jpg", alt: "Photo 17" },
        { src: "/images/P18.jpg", alt: "Photo 18" },
        { src: "/images/P19.jpg", alt: "Photo 19" },
        { src: "/images/P20.jpg", alt: "Photo 20" },
        { src: "/images/P21.jpg", alt: "Photo 21" },
        { src: "/images/P22.jpg", alt: "Photo 22" },
        { src: "/images/P23.jpg", alt: "Photo 23" },
        { src: "/images/P24.jpg", alt: "Photo 24" },
        { src: "/images/P25.jpg", alt: "Photo 25" },
        { src: "/images/P26.jpg", alt: "Photo 26" },
        { src: "/images/P27.jpg", alt: "Photo 27" },
        { src: "/images/P28.jpg", alt: "Photo 28" },
        { src: "/images/P29.jpg", alt: "Photo 29" },
        { src: "/images/P30.jpg", alt: "Photo 30" },
        { src: "/images/P31.jpg", alt: "Photo 31" },
        { src: "/images/P32.jpg", alt: "Photo 32" },
        { src: "/images/P33.jpg", alt: "Photo 33" },
        { src: "/images/P34.jpg", alt: "Photo 34" },
        { src: "/images/P35.jpg", alt: "Photo 35" },
        { src: "/images/P36.jpg", alt: "Photo 36" },
        { src: "/images/P37.jpg", alt: "Photo 37" },
        { src: "/images/P38.jpg", alt: "Photo 38" },
        { src: "/images/P39.jpg", alt: "Photo 39" },
    ];

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4 text-black">Photography</h1>
            <div className="animate-fadeIn columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                {images.map((image) => (
                    <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        className="fade-in w-full h-auto mb-4 cursor-pointer"
                        onClick={() => setSelectedImage(image.src)}
                    />
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="Fullscreen"
                            className="fade-in max-w-[90vw] max-h-[90vh] object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}

            
        </div>
    );
}
