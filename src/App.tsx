import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'

import kekw from './kekw.png';

function App() {
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
        <img src={kekw} alt='KEKW image' />
        <h2 id='comingSoon'>Coming Soon</h2>
      </div>
      <div className='footer'>
        Kekwle &middot; source code available on <a href='https://github.com/tomasff/kekwle.com'>GitHub</a>
      </div>
    </div>
  );
}

export default App;
