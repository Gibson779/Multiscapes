import React, { useState, useEffect } from "react";


const images = [
  "../images/bbq set up.jpg",
  "../images/drive way 3.jpg",
  "../images/bbq.jpg",
  "../images/Fencing job.jpg",
  "../images/Drive way.jpg",
  "../images/Garden reno.jpg",
  "../images/Sleepers.jpg",
    "../images/spar.jpg",
    "../images/garden reno 2.jpg",
   "../images/Large Drive Way.jpg",
   "../images/Garden job.jpg",
    "../images/detail.jpg",

 


   
];

export default function Gallery() {

  const [currentIndex, setCurrentIndex] = useState(null);
        const openLightbox = (index) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Close on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div>
      {/* Gallery Grid */}
      <div className="gallery">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            onClick={() => openLightbox(index)}
            className="gallery-img"
          />
        ))}
      </div>


    {/* Lightbox */}
      {currentIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            ❮
          </button>

          <img
            src={images[currentIndex]}
            alt=""
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button className="next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            ❯
          </button>
        </div>
      )}
    </div>
  );
}
