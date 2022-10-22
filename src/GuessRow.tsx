import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

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
            {/* <div className='boardIconTile'>
                <FontAwesomeIcon className='loadingIcon' size='2x' icon={faSpinner} spin />
            </div> */}
        </div>
    );
}

export default GuessRow;