'use client'

import React, { useState } from "react";

export default function ArtPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        { src: "/images/A1.jpg", alt: "Photo 1" },
        { src: "/images/A2.jpg", alt: "Photo 2" },
        { src: "/images/A3.jpg", alt: "Photo 3" },
        { src: "/images/A4.jpg", alt: "Photo 4" },
        { src: "/images/A5.jpg", alt: "Photo 5" },
        { src: "/images/A6.jpg", alt: "Photo 6" },
        { src: "/images/A7.jpg", alt: "Photo 7" },
        { src: "/images/A8.jpg", alt: "Photo 8" },
        { src: "/images/A9.jpg", alt: "Photo 9" },
        { src: "/images/A10.jpg", alt: "Photo 10" },
        { src: "/images/A11.jpg", alt: "Photo 11" },
        { src: "/images/A12.jpg", alt: "Photo 12" },
        { src: "/images/A13.jpg", alt: "Photo 13" },
        { src: "/images/A14.jpg", alt: "Photo 14" },
        { src: "/images/A15.jpg", alt: "Photo 15" },
        { src: "/images/A16.jpg", alt: "Photo 16" },
        { src: "/images/A17.jpg", alt: "Photo 17" },
    ];

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4 text-black">Art</h1>
            <div className="animate-fadeIn columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                {images.map((image) => (
                    <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto mb-4 cursor-pointer"
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
                            className="max-w-[90vw] max-h-[90vh] object-contain "
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
