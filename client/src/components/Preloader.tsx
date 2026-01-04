import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.4,
          onComplete,
        });
      },
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    )
      .to(progressRef.current, {
        width: "100%",
        duration: 1.2,
        ease: "power2.inOut",
      }, "-=0.3");
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black z-[10000] flex flex-col items-center justify-center"
      data-testid="preloader"
    >
      <div
        ref={logoRef}
        className="text-6xl md:text-7xl font-serif font-bold text-foreground mb-8"
        data-testid="preloader-logo"
      >
        HP
      </div>

      <div className="w-64 h-0.5 bg-muted rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full w-0 bg-primary rounded-full"
          data-testid="preloader-progress"
        />
      </div>
    </div>
  );
}
