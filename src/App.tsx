import { useState } from "react";
import { useEffect } from "react"
import words from "./wordlist.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter((letter) =>
    !wordToGuess.includes(letter)
  );



  function addGuessedLetter(letter : string) {
    if (guessedLetters.includes(letter)) return


    setGuessedLetters(currentLetters => [...currentLetters, letter])

  }

  useEffect(() => {

    const handler = (e: KeyboardEvent)=>{
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()

      addGuessedLetter(key)

    }
    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }

  }, [guessedLetters])





  console.log(wordToGuess, words.length, guessedLetters, incorrectLetters);
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      {/*      <h1> muh me lega? </h1>
      <h2> Bata na </h2>*/}

      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Lose Win
      </div>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters = {guessedLetters} wordToGuess = {wordToGuess}/>
      <div
        style={{
          alignSelf: "stretch",
        }}
      >
        <Keyboard />
      </div>
    </div>
  );
}

export default App;