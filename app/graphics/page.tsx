'use client'

import React, { useState } from "react";

export default function GraphicsPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        { src: "/images/A1.JPG", alt: "Photo 1" },
        { src: "/images/A2.JPG", alt: "Photo 2" },
        { src: "/images/A3.png", alt: "Photo 3" },
        { src: "/images/A4.png", alt: "Photo 4" },
        { src: "/images/A5.png", alt: "Photo 5" },
        { src: "/images/A6.png", alt: "Photo 6" },
        { src: "/images/A7.png", alt: "Photo 7" },
        { src: "/images/A8.png", alt: "Photo 8" },
        { src: "/images/A9.png", alt: "Photo 9" },
        { src: "/images/A10.png", alt: "Photo 10" },
        { src: "/images/A11.png", alt: "Photo 11" },
        { src: "/images/A12.png", alt: "Photo 12" },
        { src: "/images/A13.png", alt: "Photo 13" },
        { src: "/images/A14.png", alt: "Photo 14" },
        { src: "/images/A15.png", alt: "Photo 15" },
        { src: "/images/A16.png", alt: "Photo 16" },
        { src: "/images/A17.png", alt: "Photo 17" },
        { src: "/images/A18.png", alt: "Photo 18" },
        { src: "/images/A19.png", alt: "Photo 19" },
        { src: "/images/A20.png", alt: "Photo 20" },
        { src: "/images/A21.png", alt: "Photo 21" },
        { src: "/images/A22.png", alt: "Photo 22" },
        { src: "/images/A23.png", alt: "Photo 23" },
        { src: "/images/A24.png", alt: "Photo 24" },
        { src: "/images/A25.png", alt: "Photo 25" },
        { src: "/images/A26.png", alt: "Photo 26" },
        { src: "/images/A27.png", alt: "Photo 27" },
        { src: "/images/A28.png", alt: "Photo 28" },
        { src: "/images/A29.png", alt: "Photo 29" },
        { src: "/images/A30.png", alt: "Photo 30" },
        { src: "/images/A31.png", alt: "Photo 31" },
        { src: "/images/A32.png", alt: "Photo 32" },
        { src: "/images/A33.png", alt: "Photo 33" },
        { src: "/images/A34.png", alt: "Photo 34" },
        { src: "/images/A35.png", alt: "Photo 35" },
        { src: "/images/A36.png", alt: "Photo 36" },
        { src: "/images/A37.png", alt: "Photo 37" },
        { src: "/images/A38.png", alt: "Photo 38" },
        { src: "/images/A39.png", alt: "Photo 39" },
    ];

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4 text-black">Graphic Design</h1>
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
