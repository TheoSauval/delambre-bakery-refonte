import React from "react";

export default function CookieCard({ src, alt, name }) {
  return (
    <div className="w-72 md:w-96 rounded-2xl border-2 border-rougecerise bg-blanccasse p-3 shadow-lg">
      <img
        src={src}
        alt={alt}
        className="w-full h-64 md:h-80 object-contain rounded-xl"
      />
      <p className="mt-4 text-center text-2xl md:text-3xl font-bold uppercase text-rougecerise">
        {name}
      </p>
      <div className="flex justify-center mt-3">
        <button className="border text-rougecerise border-rougecerise hover:bg-rougecerise hover:text-blanccasse transition ease-linear py-2 px-6 rounded-3xl">
          Voir plus
        </button>
      </div>
    </div>
  );
}
