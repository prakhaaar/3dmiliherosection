"use client";

import { useEffect, useState } from "react";

/**
 * 🧠 useTypewriter Hook
 * -------------------------------------------------
 * A custom hook that creates a dynamic typewriter effect
 * — it types out a series of texts letter by letter,
 * pauses, then deletes them and moves to the next one.
 *
 * ✨ Features:
 *  - Supports multiple text strings (loops through them)
 *  - Adjustable typing speed and delay between phrases
 *  - Handles both typing and deleting phases
 *  - Returns blinking cursor state for animation sync
 *
 * Example usage:
 * const { text, blink } = useTypewriter({ texts: ["Hello", "World"], speed: 80 });
 */
interface Options {
  texts: string[]; // List of strings to animate one by one
  speed?: number; // Typing/deleting speed in ms (default: 70)
  delay?: number; // Pause duration after full text (default: 500)
}

export const useTypewriter = ({ texts, speed = 70, delay = 500 }: Options) => {
  // Index of the current text in the array
  const [index, setIndex] = useState(0);

  // Current number of characters displayed from the active text
  const [subIndex, setSubIndex] = useState(0);

  // Toggles the blinking cursor
  const [blink, setBlink] = useState(true);

  // Controls whether we are typing (false) or deleting (true)
  const [reverse, setReverse] = useState(false);

  // The actual visible text at any given time
  const [text, setText] = useState("");

  /**
   * 🎬 Typing and Deleting Effect
   * -------------------------------------------------
   * - Adds one character at a time while typing forward
   * - Removes one character at a time while deleting
   * - Switches direction when full or empty
   * - Loops continuously through all provided texts
   */
  useEffect(() => {
    // Reset to start when we reach the end of the list
    if (index === texts.length) setIndex(0);

    // Schedule the next step in typing or deleting
    const timeout = setTimeout(
      () => {
        // Update the text shown so far
        setText(texts[index].substring(0, subIndex));

        // If typing and full word is reached → wait, then start deleting
        if (!reverse && subIndex === texts[index].length) {
          setTimeout(() => setReverse(true), delay);

          // If deleting and reached empty → move to next word and start typing
        } else if (reverse && subIndex === 0) {
          setReverse(false);
          setIndex((prev) => (prev + 1) % texts.length);

          // Otherwise → continue typing or deleting one character
        } else {
          setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }
      },
      reverse ? speed / 2 : speed
    ); // Deleting is a bit faster

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  /**
   * 💡 Cursor Blink Effect
   * -------------------------------------------------
   * Toggles the cursor visibility every 500ms.
   * Works independently from the typing logic.
   */
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Expose both the current text and cursor blink state
  return { text, blink };
};

// Authored by Prakhar
