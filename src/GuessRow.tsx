interface GuessRowProps {
    wordLength: number;
}

const GuessRow = (props: GuessRowProps) => {
    return (
        <div className="boardRow">
            {[...Array(props.wordLength)].map(_ =>
                <div className="boardTile">
                </div>)}
        </div>
    );
}

export default GuessRow;