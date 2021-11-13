import './App.css';
import { IconContext } from 'react-icons';
import { FaReact } from 'react-icons/fa'
import { MdAlarm } from 'react-icons/md'

function App() {
  return (
    <IconContext.Provider value={{ color: 'green', size: '10rem' }}>
      <div className="App">
        <FaReact  />
        <MdAlarm />
        {/*  below icons override property */}
        <FaReact color='purple' size='20rem' />
        <MdAlarm color='purple' size='20rem' />
      </div>
    </IconContext.Provider>
  );
}

export default App;
