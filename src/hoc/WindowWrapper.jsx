import useWindowStore from "#store/window.js";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

function WindowWrapper(Component, windowKey) {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];

    const ref = useRef(null);
    const isFirstRender = useRef(true);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      // 🔥 SKIP animasi di render pertama
      if (isFirstRender.current) {
        el.style.display = isOpen ? "block" : "none";
        isFirstRender.current = false;
        return;
      }

      if (isOpen) {
        el.style.display = "block";

        gsap.fromTo(
          el,
          { scale: 0.9, opacity: 0, y: 20 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          }
        );
      } else {
        const rect = el.getBoundingClientRect();

        const targetX = window.innerWidth / 2 - rect.width / 2;
        const targetY = window.innerHeight;

        const deltaX = targetX - rect.left;
        const deltaY = targetY - rect.top;

        gsap.to(el, {
          x: deltaX,
          y: deltaY,
          scale: 0.3,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            el.style.display = "none";
            gsap.set(el, { x: 0, y: 0, scale: 1 });
          },
        });
      }
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, []);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute"
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper${
    Component.displayName || Component.name || "Component"
  }`;

  return Wrapped;
}


export default WindowWrapper;
