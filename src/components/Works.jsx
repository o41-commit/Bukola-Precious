import React, { useState } from 'react';

const books = [
  {
    id: 'midnight-manuscript',
    title: 'The Midnight Manuscript',
    coverTitle: <>The Midnight<br />Manuscript</>,
    year: '2023',
    genre: 'Gothic Mystery',
    tagline: 'An ancient book, a cursed author, and the ink of the damned.',
    description: 'An ancient book, a cursed author, and the ink of the damned. As I uncover its secrets, the manuscript begins to rewrite reality itself. Every word written in its pages bleeds into the waking world, blurring the line between fiction and fatal consequence.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'A shadowy forest wrapped in mist',
    coverStyle: 'font-[Cinzel,serif] text-white',
    pages: '342 Pages',
    publisher: 'Ravenwood Press',
  },
  {
    id: 'shadows-of-the-mind',
    title: 'Shadows of the Mind',
    coverTitle: <>Shadows<br />of the Mind</>,
    year: '2024',
    genre: 'Dark Fantasy',
    tagline: 'Not all demons lurk in the dark — some whisper in your own voice.',
    description: 'Not all demons lurk in the dark — some whisper in your own voice. When nightmares seep into waking life, where does madness end and reality begin? A psychological descent into the labyrinth of human paranoia and forgotten vows.',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'A deep woodland scene beneath a canopy of trees',
    coverStyle: 'font-[Cinzel_Decorative,serif] text-[#38bdf8]',
    pages: '298 Pages',
    publisher: 'Obsidian Guild',
  },
  {
    id: 'eternal-echoes',
    title: 'Eternal Echoes',
    coverTitle: <>Eternal<br />Echoes</>,
    year: '2025',
    genre: 'Supernatural Gothic',
    tagline: 'Love and death entwine in an immortal waltz.',
    description: 'Love and death entwine in an immortal waltz. A poet trapped between worlds must decide: fade into eternity or embrace the curse of the living dead. Set against the backdrop of Victorian decay and timeless longing.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'A distant landscape fading into dusk',
    coverStyle: 'font-[Julius_Sans_One,sans-serif] text-white',
    pages: '416 Pages',
    publisher: 'Nocturne Editions',
  },
];

const Works = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <section
      id="works"
      aria-labelledby="works-title"
      className="relative isolate overflow-hidden border-y-[10px] border-[#38bdf8]/40 bg-[#0f1d3d] px-5 pb-24 pt-16 text-[#e2e8f0] sm:px-8 sm:pt-20"
    >
      {/* Immersive Atmospheric Radial Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,189,248,.25),transparent_55%),linear-gradient(145deg,#0b1329_0%,#0f1d3d_50%,#050814_100%)]" />

      {/* Floating Luminous Embers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span className="absolute left-[12%] top-[15%] h-1.5 w-1.5 rounded-full bg-white/40 motion-safe:animate-[float-mote_8s_ease-in-out_infinite]" />
        <span className="absolute right-[18%] top-[35%] h-2 w-2 rounded-full bg-[#bae6fd]/60 motion-safe:animate-[float-mote_10s_ease-in-out_2s_infinite]" />
        <span className="absolute bottom-[20%] left-[25%] h-1.5 w-1.5 rounded-full bg-[#38bdf8]/50 motion-safe:animate-[float-mote_7s_ease-in-out_4s_infinite]" />
      </div>

      {/* Section Header */}
      <header className="mx-auto mb-16 max-w-[932px] text-center motion-safe:animate-[works-rise_.8s_cubic-bezier(.16,1,.3,1)_both]">
        <div className="mb-3 inline-flex items-center gap-2.5 rounded-full border border-[#38bdf8]/35 bg-[#38bdf8]/10 px-4 py-1 backdrop-blur-sm">
          <span className="text-[10px] text-[#38bdf8]">◆</span>
          <p className="font-sans text-[11px] font-bold uppercase tracking-[.3em] text-[#bae6fd]">
            A library of darker worlds
          </p>
          <span className="text-[10px] text-[#38bdf8]">◆</span>
        </div>

        <h2 id="works-title" className="m-0 text-[clamp(40px,6vw,72px)] font-black leading-tight text-[#bae6fd] drop-shadow-[0_2px_15px_rgba(56,189,248,0.25)]">
          Books <span className="text-white drop-shadow-[0_2px_15px_rgba(255,255,255,0.3)]">&amp; Works</span>
        </h2>

        <p className="mx-auto mt-4 max-w-3xl font-['Roboto_Slab',Georgia,serif] text-base font-semibold leading-relaxed text-[#e2e8f0]/90 sm:text-[21px]">
          Step into the darkness, where every word is a whisper from the abyss.
        </p>
      </header>

      {/* Books Grid with 3D Card Hover */}
      <div className="mx-auto grid max-w-[1170px] grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {books.map((book, index) => (
          <article
            key={book.id}
            style={{ animationDelay: `${index * 140}ms` }}
            className="group relative mx-auto h-[638px] w-full max-w-[356px] rounded-[42px] bg-gradient-to-b from-[#1d4ed8] to-[#1e3a8a] p-1 shadow-[0_20px_50px_rgba(7,11,25,0.45)] transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_30px_70px_rgba(56,189,248,0.25)] motion-safe:animate-[works-rise_.85s_cubic-bezier(.16,1,.3,1)_both]"
          >
            {/* Card Inner Container */}
            <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-[#0b1329]">
              
              {/* Bottom Dark Velvet Flap */}
              <div className="absolute inset-x-0 top-[373px] h-[265px] rounded-b-[38px] bg-gradient-to-b from-[#070b19] to-[#03050c]" />
              
              {/* Book Title Banner */}
              <div className="absolute inset-x-0 top-[362px] z-20 flex min-h-[64px] items-center justify-center bg-[#38bdf8] px-4 text-center shadow-md">
                <h3 className="m-0 text-lg font-black leading-tight text-[#050814] sm:text-xl">
                  {book.title}
                </h3>
              </div>

              {/* Suspended 3D Book Cover Thumbnail */}
              <div
                onClick={() => setSelectedBook(book)}
                className="absolute left-1/2 top-11 z-10 h-[304px] w-[190px] -translate-x-1/2 cursor-pointer overflow-hidden rounded-md bg-[#070b19] shadow-[18px_14px_30px_rgba(3,5,12,0.8)] transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-[-1deg] group-hover:scale-[1.03]"
              >
                <img
                  src={book.image}
                  alt={book.imageAlt}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Vignette & Foil Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/85 via-[#0b1329]/20 to-[#050814]/30" />
                <div className="absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-[#bae6fd]/30 to-transparent transition-opacity duration-700 group-hover:opacity-100" />

                <div className={`absolute inset-x-2 top-[18%] text-center text-xl font-bold leading-[1.3] drop-shadow-[0_2px_8px_rgba(0,0,0,.8)] sm:text-2xl ${book.coverStyle}`}>
                  {book.coverTitle}
                </div>

                <div className="absolute inset-x-2 bottom-5 text-center font-['Baskervville_SC',serif] text-[19px] tracking-wide text-[#bae6fd] drop-shadow-[0_2px_8px_rgba(0,0,0,.9)]">
                  Bukola Precious
                </div>
              </div>

              {/* Year & Genre Meta Row */}
              <div className="absolute inset-x-6 top-[446px] flex items-center justify-between gap-3">
                <span className="font-['Roboto_Slab',serif] text-sm font-black tracking-widest text-[#38bdf8]">
                  {book.year}
                </span>
                <span className="rounded-full border border-[#38bdf8]/40 bg-black/30 px-3.5 py-1 font-['Merriweather',serif] text-xs italic text-[#bae6fd] backdrop-blur-sm sm:text-sm">
                  {book.genre}
                </span>
              </div>

              {/* Book Description Snippet */}
              <p className="absolute left-6 right-6 top-[486px] m-0 line-clamp-3 font-['Roboto_Slab',Georgia,serif] text-[13.5px] leading-[1.7] text-[#e2e8f0]/90 sm:text-[14.5px]">
                {book.description}
              </p>

              {/* Discover Action Button */}
              <button
                type="button"
                onClick={() => setSelectedBook(book)}
                className="absolute bottom-5 right-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-[#bae6fd] transition-all duration-300 hover:gap-3 hover:text-white"
              >
                <span>Discover the story</span>
                <span className="grid size-6 place-items-center rounded-full bg-[#38bdf8]/25 text-xs text-[#bae6fd] transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </button>

            </div>
          </article>
        ))}
      </div>

      {/* Immersive Book Details Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4 backdrop-blur-md motion-safe:animate-[modal-fade_0.3s_ease-out_both]"
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[#38bdf8]/40 bg-[#0b1329] p-6 text-[#e2e8f0] shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedBook(null)}
              className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-[#38bdf8]/40 bg-white/5 text-[#bae6fd] transition-all hover:bg-white/10 hover:scale-105"
              aria-label="Close dialog"
            >
              ✕
            </button>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              {/* Modal Book Cover */}
              <div className="relative mx-auto h-[260px] w-[170px] shrink-0 overflow-hidden rounded-lg shadow-xl sm:h-[300px] sm:w-[195px]">
                <img
                  src={selectedBook.image}
                  alt={selectedBook.imageAlt}
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/80 via-transparent to-transparent" />
                <div className={`absolute inset-x-2 top-[20%] text-center text-lg font-bold ${selectedBook.coverStyle}`}>
                  {selectedBook.coverTitle}
                </div>
              </div>

              {/* Modal Book Info */}
              <div className="flex flex-col justify-center text-left">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#38bdf8]/20 px-3 py-0.5 text-xs font-bold text-[#bae6fd]">
                    {selectedBook.year}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#38bdf8]">
                    {selectedBook.genre}
                  </span>
                </div>

                <h3 className="mt-2 text-2xl font-black text-[#bae6fd] sm:text-3xl">
                  {selectedBook.title}
                </h3>
                <p className="mt-1 font-['Merriweather',serif] text-xs italic text-white/70">
                  Published by {selectedBook.publisher} • {selectedBook.pages}
                </p>

                <p className="mt-4 font-['Roboto_Slab',Georgia,serif] text-sm leading-relaxed text-[#e2e8f0]/90">
                  {selectedBook.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    onClick={() => setSelectedBook(null)}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#38bdf8] px-7 text-xs font-bold uppercase tracking-widest text-[#050814] transition-all hover:bg-[#bae6fd] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                  >
                    Acquire Copy
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedBook(null)}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 px-6 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;