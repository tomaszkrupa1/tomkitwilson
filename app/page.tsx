import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-8 max-[631px]:p-4">
      <div className="min-h-screen flex flex-col justify-center items-left md:items-start space-y-2 sm:space-y-4">
        <Link href="/code">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700 animate-fadeIn delay-1">
            Code
          </h1>
        </Link>
        <Link href="/photography">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700 animate-fadeIn delay-2">
            Photography
          </h1>
        </Link>
        <Link href="/art">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700 animate-fadeIn delay-3">
            Art
          </h1>
        </Link>
        <Link href="/dance">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black cursor-pointer transition-colors duration-300 hover:text-gray-700 animate-fadeIn delay-4">
            Dance
          </h1>
        </Link>
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
      </div>
      <div>
        <img src="/images/1.jpg" alt="1" className="w-full h-auto mb-4" />
        <h2 className="mt-16 mb-16 py-16 text-3xl sm:text-4xl md:text-5xl font-bold text-black md:max-w-[50%]">
          Hi, I'm Tomasz, a passionate developer with interests spanning code, visual arts, and design.
        </h2>
      </div>
      <h2 className="mt-16 mb-16 py-16 text-3xl sm:text-4xl md:text-5xl font-bold text-black md:max-w-[50%] ml-auto text-right">
        I currently work for Fujitsu in a 1st line support role. I also do freelance design and development under <a href="https://iridesce.digital" className="underline" target="_blank" rel="noopener noreferrer">iridesceDigital</a>.
      </h2>
      <h2 className="mt-16 mb-16 py-16 text-3xl sm:text-4xl md:text-5xl font-bold text-black md:max-w-[50%]">
      Check out my new startup, an online designer clothing marketplace, <a href="https://highstreetmarketplace.com" className="underline" target="_blank" rel="noopener noreferrer">HIGHSTREET.</a>
        </h2>
      <h3 className="mt-16 mb-16 py-16 text-3xl sm:text-4xl md:text-5xl font-bold text-black md:max-w-[50%] ml-auto text-right">
        <div>
          <a href="mailto:hello@tomaszkrupa.co.uk" className="underline text-2xl sm:text-3xl md:text-4xl" target="_blank" rel="noopener noreferrer">hello@tomaszkrupa.co.uk</a>
        </div>
        <div>
            <a href="/Tomasz%20Krupa%20-%202025%20CV.pdf" download="Tomasz_Krupa_-_2025_CV" className='underline text-2xl sm:text-3xl md:text-4xl' target="_blank" rel="noopener noreferrer">CV</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/tomaszkrupa1999" className="underline text-2xl sm:text-3xl md:text-4xl" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div>
          <a href="https://github.com/tomaszkrupa1" className="underline text-2xl sm:text-3xl md:text-4xl" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </h3>
    </div>
  );
}