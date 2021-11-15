import React, {useState} from "react";
import Modal from 'react-modal'

Modal.setAppElement('#root')

export const ModalTest = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div>
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

