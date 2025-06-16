import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-8 max-[631px]:p-4">
      <div className="min-h-screen flex flex-col justify-center items-left md:items-start space-y-2 sm:space-y-4">
        <Link href="/graphics">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700 animate-fadeIn delay-1">
            Graphic Design
          </h1>
        </Link>
        <Link href="/photography">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700 animate-fadeIn delay-2">
            Content Creation
          </h1>
        </Link>
        <Link href="/photography">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700 animate-fadeIn delay-3">
            Photography
          </h1>
        </Link>
        <Link href="/dance">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700 animate-fadeIn delay-4">
            Iridesce
          </h1>
        </Link>

        {/*
          <Link href="/graffiti">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700 animate-fadeIn delay-5">
              Graffiti
            </h1>
          </Link>
          <Link href="/ideas">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700 animate-fadeIn delay-6">
              Ideas
            </h1>
          </Link>
        */}
      </div>
      <div>
        <img src="/images/1.jpg" alt="1" className="w-full h-auto mb-4" />
        <h2 className="mt-16 mb-16 py-16 text-3xl sm:text-4xl md:text-5xl font-bold text-black md:max-w-[50%]">
          Hello, I'm Tom Kit Wilson - A multidisciplinary designer with a passion for all things immersive.
        </h2>
      </div>
      <h2 className="mt-16 mb-16 py-16 text-3xl sm:text-4xl md:text-5xl font-bold text-black md:max-w-[50%] ml-auto text-right">
         I create engaging content that draws people in - whether it's digital, physical, or somewhere in between.
      </h2>
      <h2 className="mt-16 mb-16 py-16 text-3xl sm:text-4xl md:text-5xl font-bold text-black md:max-w-[50%]">
      I'm driven by a belief in using new media for positive, purposeful immersion - and I love working with others who share that vision. 
        </h2>
      <h3 className="mt-16 mb-16 py-16 text-3xl sm:text-4xl md:text-5xl font-bold text-black md:max-w-[50%] ml-auto text-right">
        <div>
          <a href="mailto:hello@tomkitwilson.co.uk" className="underline text-2xl sm:text-3xl md:text-4xl" target="_blank" rel="noopener noreferrer">hello@tomkitwilson.co.uk</a>
        </div>
        <div>
            <a href="/Tomasz%20Krupa%20-%202025%20CV.pdf" download="Tomasz_Krupa_-_2025_CV" className='underline text-2xl sm:text-3xl md:text-4xl' target="_blank" rel="noopener noreferrer">CV</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/tomkitwilson" className="underline text-2xl sm:text-3xl md:text-4xl" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </h3>
    </div>
  );
}