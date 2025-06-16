import Link from 'next/link';
import { ideas } from './ideas'; // Adjust the path as necessary

export default function CodePage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="animate-fadeIn text-3xl sm:text-4xl md:text-5xl font-bold">Ideas coming soon...</h1>
    </div>

    /*
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-black">Ideas</h1>
      <div className="space-y-6">
      {ideas.map((idea) => (
        <div
        key={idea.id}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch"
        >
        <div className="overflow-hidden rounded">
          <Link href={`/ideas/${idea.id}`}>
          <img
            src={idea.imageSrc}
            alt={idea.title}
            className="w-full h-full object-cover"
          />
          </Link>
        </div>
        <div className="flex flex-col justify-end">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">
          {idea.title}
          </h2>
          <p className="text-gray-700 mt-2">{idea.info}</p>
          
          <hr className="mt-2 border-t" />
        </div>
        </div>
      ))}
      </div>
    </div> ALSO ADD BRACKETS AT THE END AND START
    */
  );
}