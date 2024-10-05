import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
const animation = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Hero text animation on page load
  gsap.fromTo(
    ".hero-text",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.4 }
  );

  // Parallax effect for hero video
  gsap.fromTo(
    "#heroVideo",
    { scale: 1.1 },
    {
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    }
  );

  // Apply parallax effect and animations to sections
  gsap.utils.toArray("section").forEach((section, i) => {
    const bg = section.querySelector(".bg");

    if (!bg) return; // Ensure the bg exists before animating

    // Parallax effect for background images
    const getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.fromTo(
      bg,
      {
        backgroundPosition: () =>
          i === 0
            ? "50% 0px"
            : `50% ${-window.innerHeight * getRatio(section)}px`,
      },
      {
        backgroundPosition: () =>
          `50% ${window.innerHeight * (1 - getRatio(section))}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: i === 0 ? "top top" : "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );

    // Animation for section content when scrolled into view
    const otherContent = section.querySelector(".other-content");

    if (otherContent) {
      gsap.fromTo(
        otherContent,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 30%", // Adjust start position for triggering animation
            end: "top 100%",
            toggleActions: "play none none reverse", // Triggers animation when entering and leaving the viewport
          },
        }
      );
    }
  });
};

export default animation;
