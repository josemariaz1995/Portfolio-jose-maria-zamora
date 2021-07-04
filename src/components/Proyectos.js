import { useCallback } from "react";
import { useEffect, useRef, useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { Proyecto } from "./Proyecto";
import { Dots } from "./Dots";

export const Proyectos = () => {
  const proyect = [
    "#0088FE",
    "#01C49F",
    "#FFBB28",
    "#00C48F",
    "#00C45F",
    "#00C49F",
  ];
  const delay = 5000;

  const [index, setIndex] = useState(0);
  const timeout = useRef(null);
  const siguiente = useCallback(() => {
    setIndex((prevIndex) =>
      prevIndex === proyect.length - 1 ? 0 : prevIndex + 1
    );
  }, [proyect.length]);

  const anterior = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? proyect.length - 1 : prevIndex - 1
    );
  };

  const resetTimeout = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeout.current = setTimeout(() => siguiente(), delay);

    return () => {
      resetTimeout();
    };
  }, [proyect.length, index, siguiente]);

  return (
    <>
      <div className="slideshow position-relative">
        <div className="position-relative">
          <BsChevronCompactLeft className="arrow-l" onClick={anterior} />
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {proyect.map((proyecto, index) => (
              <Proyecto key={index} proyecto={proyecto} />
            ))}
          </div>
          <BsChevronCompactRight className="arrow-r" onClick={siguiente} />
        </div>
        <div className="slideshowDots">
          {proyect.map((proyecto, i) => (
            <Dots key={i} i={i} index={index} setIndex={setIndex} />
          ))}
        </div>
      </div>
    </>
  );
};
