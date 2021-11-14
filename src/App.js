import './App.css';
import React, { useState } from 'react';
import Modal from 'react-modal'
// import { IconContext } from 'react-icons';
// import { FaReact } from 'react-icons/fa'
// import { MdAlarm } from 'react-icons/md'
// import { toast } from 'react-toastify'

// import 'react-toastify/dist/ReactToastify.css'

// const CustomToast=({closeToast})=>{
//   return(
//     <div>
//       Something went wrong!
//       <button onClick={closeToast} >Close</button>
//     </div>
//   )
// }
// toast.configure()

Modal.setAppElement('#root')
function App() {

  // const toastDemo=()=>{
  //   toast('Basic Notification!')
  //   toast.success('Success Notification!', {position: toast.POSITION.TOP_CENTER, autoClose:false})
  //   toast.warn('Warning Notification!', {position: toast.POSITION.BOTTOM_LEFT, autoClose:4000})
  //   toast.info('Info Notification!', {position: toast.POSITION.BOTTOM_RIGHT, autoClose:5000})
  //   toast.error('Error Notification!', {position: toast.POSITION.BOTTOM_CENTER, autoClose:6000})
  //   toast(<CustomToast/>, {position: toast.POSITION.TOP_LEFT, autoClose:false})
  // }

  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div>

      {/* <h1>Icons Demo</h1>
      <IconContext.Provider value={{ color: 'green', size: '5rem' }}>
        <div className="App">
          <FaReact />
          <MdAlarm />
          <FaReact color='purple' size='10rem' />
          <MdAlarm color='purple' size='10rem' />
        </div>
      </IconContext.Provider> */}

      {/* <h1>Toast Notifications Demo</h1>
      <button onClick={toastDemo} >Click here...</button> */}

      <h1>Modal Demo</h1>
      <button onClick={() => setModalIsOpen(true)}>Show Modal</button>
      <Modal isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={
          {
            overlay: {
              backgroundColor: 'gray'
            },
            content: {
              color: 'green'
            }
          }}
      >
        <h2>Title</h2>
        <p>Modal Body</p>
        <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default App;
