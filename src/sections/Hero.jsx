import { useState, useRef, useEffect } from 'react';
import './Hero.css';

const VIDEO_OPTS = 'q_auto:low,f_auto,vc_auto,br_3m,w_1280,c_limit';

const VIDEOS = [
  `https://res.cloudinary.com/dsf6b2tnd/video/upload/${VIDEO_OPTS}/v1779257820/BazaEdit_ivxorl.mp4`,
  `https://res.cloudinary.com/dsf6b2tnd/video/upload/${VIDEO_OPTS}/v1779257155/TripleDrift_unqaud.mp4`,
  `https://res.cloudinary.com/dsf6b2tnd/video/upload/${VIDEO_OPTS}/v1779257155/WETCROWN_spiqbi.mov`,
  `https://res.cloudinary.com/dsf6b2tnd/video/upload/${VIDEO_OPTS}/v1779257152/MK2DRIFT_fuzyb8.mov`,
  `https://res.cloudinary.com/dsf6b2tnd/video/upload/${VIDEO_OPTS}/v1779257152/CROWNDRIFT_ybvg99.mov`,
];

// Cloudinary auto-generates a poster image from the video (first frame).
// We use this for instant visual feedback while videos load.
const POSTER_OPTS = 'so_0,w_1280,c_limit,q_auto,f_jpg';
const POSTERS = VIDEOS.map(url => url.replace(VIDEO_OPTS, POSTER_OPTS).replace(/\.(mp4|mov)$/, '.jpg'));

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef(null);
  const preloadRef = useRef(null);

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
    // Preload the NEXT video so the transition is seamless
    const nextIndex = (currentIndex + 1) % VIDEOS.length;
    if (preloadRef.current) {
      preloadRef.current.src = VIDEOS[nextIndex];
      preloadRef.current.load();
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
          poster={POSTERS[currentIndex]}
          onEnded={handleVideoEnded}
        >
          <source src={VIDEOS[currentIndex]} type="video/mp4" />
        </video>
        <video ref={preloadRef} preload="auto" muted playsInline style={{ display: 'none' }}></video>
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <img src="/logo/logo_clean_dark_bg_800w.png" alt="Japan Technology Co., Ltd." className="hero-logo" />
      </div>
      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to learn more">
        <span className="hero-scroll-label">SCROLL</span>
        <i className="ti ti-chevron-down" aria-hidden="true"></i>
      </a>
    </section>
  );
}