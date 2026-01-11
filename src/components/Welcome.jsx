import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, defaultWeight: 100 },
    title: { min: 400, max: 900, defaultWeight: 400 },
};

const renderText = (text, className, baseWeight = 400) =>
    [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{ fontVariationSettings: `"wght" ${baseWeight}` }}
        >
      {char === " " ? "\u00A0" : char}
    </span>
    ));

const setupTextHover = (container, type) => {
    if (!container) return () => {};

    const letters = container.querySelectorAll("span");
    const { min, max, defaultWeight } = FONT_WEIGHTS[type];

    const animateLetter = (letter, weight, duration = 0.25) =>
        gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `"wght" ${weight}`,
        });

    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const center = l - left + w / 2;
            const distance = Math.abs(mouseX - center);
            const intensity = Math.exp(-(distance ** 2) / 20000);

            animateLetter(letter, min + (max - min) * intensity);
        });
    };

    const handleMouseLeave = () => {
        letters.forEach((letter) =>
            animateLetter(letter, defaultWeight, 0.3)
        );
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    };
};

function Welcome() {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const cleanups = [
            setupTextHover(titleRef.current, "title"),
            setupTextHover(subtitleRef.current, "subtitle"),
        ];

        return () => cleanups.forEach((fn) => fn && fn());
    }, []);

    return (
        <section id="welcome">
            <p ref={subtitleRef}>
                {renderText(
                    "Hey, I'm Ilham Arip welcome to my",
                    "text-3xl font-georama",
                    100
                )}
            </p>

            <h1 ref={titleRef} className="mt-7">
                {renderText("Portfolio", "text-9xl italic font-georama")}
            </h1>

            <div className="small-screen">
                <p>This portfolio is designed for desktop/tablet screens only.</p>
            </div>
        </section>
    );
}

export default Welcome;
