import Link from 'next/link';
import React from 'react';
import { ideas } from '../ideas';

export default function DigitalSpotifyTurntablePage() {
    const idea = ideas.find((proj) => proj.id === 'Digital_Spotify_Turntable');
    if (!idea) {
        return <div>Idea not found</div>;
    }

    return (
      <div className="animate-fadeIn container mx-auto p-8 max-container-800">
        <Link href="/code">
          <h1 className="text-3xl font-bold mb-8 text-black cursor-pointer">Back</h1>
        </Link>
        <div className="space-y-6">
          <div key={idea.id} className="flex flex-col gap-4">
            <div className="overflow-hidden rounded w-full">
              <img
                src={idea.imageSrc}
                alt={idea.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">
                {idea.title}
              </h2>
              <p className="text-gray-700">{idea.info}</p>
              <div className="flex flex-wrap gap-2">
                {idea.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-gray-500 rounded-full px-3 py-1 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <hr className="border-t mt-2 w-full" />
            </div>
            <div className="w-full">
              <img
                src={idea.image2}
                alt={idea.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">
                The challenge
              </h2>
              <p className="text-gray-700">{idea.info2}</p>
            </div>
            <div className="w-full flex flex-col gap-1">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">
                I gained confidence...
              </h2>
              <p className="text-gray-700">{idea.info3}</p>
            </div>
            <div className="w-full flex flex-col gap-1">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">
                If we had more time...
              </h2>
              <p className="text-gray-700">{idea.info4}</p>
            </div>
          </div>
        </div>
      </div>
    );
}
