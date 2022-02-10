import GuessRow from "./GuessRow";

interface BoardProps {
    numberOfGuesses: number;
    word: string;
}

const Board = (props: BoardProps) => {
    return (
        <div className="board">
            {[...Array(props.numberOfGuesses)].map(
                _ => <GuessRow wordLength={props.word.length} />
            )}
        </div>
    );
}

export default Board;