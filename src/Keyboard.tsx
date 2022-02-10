import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'

interface KeyboardProps {
    letters: string[];
}

const Keyboard = (props: KeyboardProps) => {
    return (
        <div className='keyboard'>
            {props.letters.map(letter => <button className='key'>{letter}</button>)}
            <button className='key'><FontAwesomeIcon icon={faArrowTurnDown} rotation={90} /></button>
        </div>
    );
}

export default Keyboard;