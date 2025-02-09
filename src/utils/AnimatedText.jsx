import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fonts = [
  "font-montserrat font-bold",
  "font-playfair font-bold italic",
  "font-roboto-mono font-bold",
  "font-lora font-bold italic",
  "font-poppins font-black",
  "font-raleway font-extrabold",
  "font-ubuntu-mono italic",
  "font-merriweather font-bold italic",
  "font-oswald font-bold",
  "font-courier-prime font-bold italic",
];

const words = ["Nosotros", "nos", "adaptamos", "a", "cualquier", "estilo"];

const generateRandomLetter = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  return characters.charAt(Math.floor(Math.random() * characters.length));
};

const AnimatedLetter = ({ letter, font, triggerAnimation }) => {
  const [displayLetter, setDisplayLetter] = useState(letter);

  useEffect(() => {
    if (triggerAnimation) {
      let interval;
      let counter = 0;
      const maxIterations = 10 + Math.floor(Math.random() * 5);

      interval = setInterval(() => {
        if (counter < maxIterations) {
          setDisplayLetter(generateRandomLetter());
          counter++;
        } else {
          setDisplayLetter(letter);
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [letter, triggerAnimation]);

  return <span className={font}>{displayLetter}</span>;
};

export default function AnimatedText() {
  const [currentFonts, setCurrentFonts] = useState(
    words.map(() => fonts[Math.floor(Math.random() * fonts.length)])
  );
  const [triggerAnimations, setTriggerAnimations] = useState(
    words.map(() => false)
  );
  const [changedWords, setChangedWords] = useState([]);

  useEffect(() => {
    const changeWord = () => {
      const availableWords = words.filter(
        (_, index) => !changedWords.includes(index)
      );

      if (availableWords.length === 0) {
        setChangedWords([]);
        return;
      }

      const randomIndex = Math.floor(Math.random() * availableWords.length);
      const wordIndex = words.indexOf(availableWords[randomIndex]);

      setCurrentFonts((prevFonts) =>
        prevFonts.map((font, index) =>
          index === wordIndex
            ? fonts[Math.floor(Math.random() * fonts.length)]
            : font
        )
      );

      setTriggerAnimations((prev) =>
        prev.map((trigger, index) => (index === wordIndex ? true : trigger))
      );

      setChangedWords((prev) => [...prev, wordIndex]);

      setTimeout(() => {
        setTriggerAnimations((prev) =>
          prev.map((trigger, index) => (index === wordIndex ? false : trigger))
        );
      }, 6000);
    };

    const interval = setInterval(changeWord, 3000);

    return () => clearInterval(interval);
  }, [changedWords]);

  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl text-center leading-tight">
      {words.map((word, wordIndex) => (
        <motion.span
          key={`${word}-${wordIndex}`}
          className="inline-block mx-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: wordIndex * 0.1 }}
        >
          {word.split("").map((letter, letterIndex) => (
            <AnimatedLetter
              key={`${letter}-${letterIndex}-${currentFonts[wordIndex]}`}
              letter={letter}
              font={currentFonts[wordIndex]}
              triggerAnimation={triggerAnimations[wordIndex]}
            />
          ))}
        </motion.span>
      ))}
    </h1>
  );
}
