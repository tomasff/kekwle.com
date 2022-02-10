import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faCog, faTurnDown } from '@fortawesome/free-solid-svg-icons'

import Board from './Board';
import Keyboard from './Keyboard';

const App = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='left'>
          <div className='menuIcon'>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </div>
        </div>
        <div className='center'>
          KEKWLE
        </div>
        <div className='right'>
          <div className='menuIcon'>
            <FontAwesomeIcon icon={faCog} />
          </div>
        </div>
      </div>
      <div className='game'>
        <Board word='kekw' numberOfGuesses={3} />
      </div>
      <div className='footer'>
        <Keyboard letters={['k', 'e', 'w']} />
      </div>
    </div>
  );
}

export default App;
