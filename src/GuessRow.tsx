interface GuessRowProps {
    currentGuess: string;
    wordLength: number;
}

const GuessRow = ({ currentGuess, wordLength }: GuessRowProps) => {

    const letterAtPosition = (position: number) => {
        if (position > currentGuess.length) {
            return ' ';
        }

        return currentGuess[position];
    }

    return (
        <div className='boardRow'>
            {[...Array(wordLength)].map((_, i) =>
                <div className='boardTile'>
                    {letterAtPosition(i)}
                </div>)}
        </div>
    );
}

export default GuessRow;