import GuessRow from './GuessRow';
import { useEffect, useState } from 'react';


interface BoardProps {
    numberOfGuesses: number;
    targetWord: string;

}

const Board = ({ targetWord, numberOfGuesses }: BoardProps) => {

    const [currentGuess, setCurrentGuess] = useState<string>('');
    const [currentRow, setCurrentRow] = useState<number>(0);

    const onKeyPress = (e: KeyboardEvent) => {
        if (targetWord.includes(e.key)) {
            setCurrentGuess(currentGuess + e.key);
        } else if (e.key == 'Backspace') {
            setCurrentGuess(currentGuess.slice(0, -1));
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
            {/* {Array(numberOfGuesses).map(
                _ => <GuessRow wordLength={} />
            )} */}
            <GuessRow currentGuess={currentGuess} wordLength={targetWord.length} />
        </div>
    );
}

export default Board;