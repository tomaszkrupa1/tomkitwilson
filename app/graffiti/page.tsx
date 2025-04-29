'use client'

import React, { useState } from "react";

export default function GraffitiPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        { src: "/images/G1.jpg", alt: "Photo 1" },
        { src: "/images/G2.png", alt: "Photo 2" },
        { src: "/images/G3.jpg", alt: "Photo 3" },
        { src: "/images/G4.jpg", alt: "Photo 4" },
        { src: "/images/G5.jpg", alt: "Photo 5" },
        { src: "/images/G6.jpg", alt: "Photo 6" },
        { src: "/images/G7.jpg", alt: "Photo 7" },
        { src: "/images/G8.jpg", alt: "Photo 8" }
    
    ];

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4 text-black">Graffiti</h1>
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
