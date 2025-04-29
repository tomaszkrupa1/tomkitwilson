import Link from 'next/link';
import { projects } from './projects'; // Adjust the path as necessary

export default function CodePage() {
  return (
    <div className="animate-fadeIn container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-black">Coding Projects</h1>
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch"
          >
            <div className="overflow-hidden rounded">
              <Link href={`/code/${project.id}`}>
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
            <div className="flex flex-col justify-end">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">
                {project.title}
              </h2>
              <p className="text-gray-700 mt-2">{project.info}</p>
              <div className="flex flex-wrap mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-gray-500 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <hr className="mt-2 border-t" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}