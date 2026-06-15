import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./textHero.css";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Portfolio",
        "Vipe",
        "Front-end Developer",
        "Hello world !",
      ],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
      backDelay: 1500,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="hero">
      <h1>
        <span ref={typedRef} />
      </h1>
    </section>
  );
}