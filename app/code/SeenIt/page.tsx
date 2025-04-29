import Link from 'next/link';
import React from 'react';
import { projects } from '../projects';

export default function SeenItPage() {
    const project = projects.find((proj) => proj.id === 'SeenIt');
    if (!project) {
        return <div>Project not found</div>;
    }

    return (
      <div
      className="animate-fadeIn container mx-auto p-8 max-container-800"
    
      >
      <div className="flex justify-between items-center mb-8">
      <Link href="/code">
      <h1 className="text-3xl font-bold text-black cursor-pointer">Back</h1>
      </Link>
      <a
      href={project.git}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black"
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.084-.729.084-.729 1.205.084 1.84 1.235 1.84 1.235 1.07 1.835 2.807 1.305 3.495.998.108-.776.418-1.305.762-1.604-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
      </a>
    </div>
      <div className="space-y-6">
        <div key={project.id} className="flex flex-col gap-4">
        <div className="overflow-hidden rounded w-full">
          <img
          src={project.imageSrc}
          alt={project.title}
          className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">
          {project.title}
          </h2>
          <p className="text-gray-700">{project.info}</p>
          <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
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
          src={project.image2}
          alt={project.title}
          className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">
          The challenge
          </h2>
          <p className="text-gray-700">{project.info2}</p>
        </div>
        <div className="w-full flex flex-col gap-1">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">
          I gained confidence...
          </h2>
          <p className="text-gray-700">{project.info3}</p>
        </div>
        <div className="w-full flex flex-col gap-1">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">
          If we had more time...
          </h2>
          <p className="text-gray-700">{project.info4}</p>
        </div>
        </div>
      </div>
      </div>
    ) };
