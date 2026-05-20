import { useState, useRef, useEffect } from 'react';
import './Hero.css';

const VIDEOS = [
  'https://res.cloudinary.com/dsf6b2tnd/video/upload/v1779257820/BazaEdit_ivxorl.mp4',
  'https://res.cloudinary.com/dsf6b2tnd/video/upload/v1779257155/TripleDrift_unqaud.mp4',
  'https://res.cloudinary.com/dsf6b2tnd/video/upload/f_mp4/v1779257155/WETCROWN_spiqbi.mov',
  'https://res.cloudinary.com/dsf6b2tnd/video/upload/f_mp4/v1779257152/MK2DRIFT_fuzyb8.mov',
  'https://res.cloudinary.com/dsf6b2tnd/video/upload/f_mp4/v1779257152/CROWNDRIFT_ybvg99.mov',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef(null);

  function handleVideoEnded() {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % VIDEOS.length);
      setIsTransitioning(false);
    }, 1500);
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [currentIndex]);

  return (
    <section className="hero" id="top">
      <div className={`hero-video-layer ${isTransitioning ? 'hero-video-layer--fading' : ''}`}>
        <video
          ref={videoRef}
          key={currentIndex}
          className="hero-video"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
        >
          <source src={VIDEOS[currentIndex]} type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <img src="/logo/logo_clean_dark_bg_800w.png" alt="Japan Technology Co., Ltd." className="hero-logo" />
        <p className="hero-tagline">EXPORTS FROM JAPAN TO THE WORLD</p>
      </div>
      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to learn more">
        <span className="hero-scroll-label">SCROLL</span>
        <i className="ti ti-chevron-down" aria-hidden="true"></i>
      </a>
    </section>
  );
}