import GuessRow from './GuessRow';
import { useEffect, useState } from 'react';


interface BoardProps {
    numberOfGuesses: number;
    targetWord: string;
}

const Board = ({ targetWord, numberOfGuesses }: BoardProps) => {
    const [currentGuess, setCurrentGuess] = useState<number>(0);

    const [guesses, setGuesses] = useState<string[]>(
        Array(numberOfGuesses).fill('')
    );

    const getCurrentGuess = () => guesses[currentGuess];

    const updateCurrentGuess = (guess: string) => {
        const updatedGuesses = [...guesses];

        updatedGuesses[currentGuess] = guess;

        setGuesses(updatedGuesses);
    }

    const onKeyPress = (e: KeyboardEvent) => {
        console.log(e.key);

        if (targetWord.includes(e.key) &&
            getCurrentGuess().length < targetWord.length) {
            updateCurrentGuess(getCurrentGuess() + e.key);
        } else if (e.key === 'Backspace') {
            updateCurrentGuess(getCurrentGuess().slice(0, -1));
        } else if (e.key === 'Enter') {
            setCurrentGuess(currentGuess + 1);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeyPress);

        return () => {
            document.removeEventListener('keydown', onKeyPress);
        };
    });

    return (
        <div className="board">
            {guesses.map(
                guess => <GuessRow
                    currentGuess={guess}
                    wordLength={targetWord.length}
                />
            )}
        </div>
    );
}

export default Board;